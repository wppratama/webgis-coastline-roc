"""
etl_stable.py — fix JSONDecodeError
=====================================
Root cause: gdf.to_json() gagal di-parse karena:
  1. Nilai NaN/Infinity di kolom non-geometry (json tidak kenal NaN)
  2. Geometri null/kosong setelah ST_SimplifyPreserveTopology
  3. String terlalu besar untuk json.loads() di-decode sekaligus

Fix:
  - Bersihkan NaN sebelum export
  - Validasi & drop geometri null
  - Gunakan to_json() dengan parameter nan handling
  - Export per-tile SEBELUM json.loads() — bukan seluruh GDF sekaligus
"""

import geopandas as gpd
import pandas as pd
import numpy as np
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
import os, json, time

load_dotenv()

DB_URL     = os.getenv("DB_URL")
PATH_TILES = os.getenv("PATH_TILES")
INPUT_GPKG = os.getenv("INPUT_GPKG")

COLS_SHORELINES = ['geometry', 'year', 'tile_id', 'certainty']
COLS_RATES      = ['geometry', 'rate_time', 'tile_id']

OUT_DIR_SHORELINES = "public/tiles/shorelines"
OUT_DIR_RATES      = "public/tiles/rates"
COORD_PRECISION    = 5

if 'CONDA_PREFIX' in os.environ:
    os.environ['PROJ_LIB'] = os.path.join(
        os.environ['CONDA_PREFIX'], 'Library', 'share', 'proj'
    )

engine = create_engine(DB_URL)


# ── HELPERS ─────────────────────────────────────────────────

def normalize_certainty(series):
    MAP = {
        'good': 'good',
        'insufficient': 'insufficient data',
        'insufficient data': 'insufficient data',
        'unstable': 'unstable data',
        'unstable data': 'unstable data',
    }
    return series.str.lower().str.strip().map(MAP).fillna('good')


def round_coordinates(coords, precision):
    """Rekursif — handle Point, LineString, Polygon, MultiX."""
    if not coords:
        return coords
    if isinstance(coords[0], (int, float)):
        return [round(c, precision) for c in coords]
    return [round_coordinates(ring, precision) for ring in coords]


def clean_properties(props: dict) -> dict:
    """
    Ganti NaN/Infinity/None dengan null agar JSON valid.
    json.dumps() Python tidak bisa encode float('nan') secara default.
    """
    cleaned = {}
    for k, v in props.items():
        if v is None:
            cleaned[k] = None
        elif isinstance(v, float):
            if np.isnan(v) or np.isinf(v):
                cleaned[k] = None
            else:
                cleaned[k] = v
        elif isinstance(v, (np.integer,)):
            cleaned[k] = int(v)
        elif isinstance(v, (np.floating,)):
            val = float(v)
            cleaned[k] = None if (np.isnan(val) or np.isinf(val)) else val
        elif isinstance(v, (np.bool_,)):
            cleaned[k] = bool(v)
        else:
            cleaned[k] = v
    return cleaned


def gdf_to_geojson_dict(gdf: gpd.GeoDataFrame, precision: int = 5) -> dict:
    """
    FIX UTAMA: Bangun dict GeoJSON secara manual per-fitur.
    Tidak pakai gdf.to_json() yang bisa gagal untuk data besar
    atau yang mengandung NaN/geometri null.
    """
    features = []
    skipped  = 0

    for _, row in gdf.iterrows():
        geom = row.geometry

        # Skip geometri null atau kosong
        if geom is None or geom.is_empty:
            skipped += 1
            continue

        # Ambil koordinat dan round presisi
        try:
            geom_dict = json.loads(geom.to_json() if hasattr(geom, 'to_json')
                                   else gpd.GeoSeries([geom]).to_json())
            # Untuk GeoPandas GeoSeries.to_json() wrap dalam FeatureCollection
            # Kita ambil geometry-nya saja
            if isinstance(geom_dict, dict) and geom_dict.get('type') == 'FeatureCollection':
                geom_dict = geom_dict['features'][0]['geometry']

            if geom_dict and geom_dict.get('coordinates'):
                geom_dict['coordinates'] = round_coordinates(
                    geom_dict['coordinates'], precision
                )
        except Exception as e:
            skipped += 1
            continue

        # Build properties — bersihkan NaN
        props = row.drop('geometry').to_dict()
        props = clean_properties(props)

        features.append({
            'type': 'Feature',
            'geometry': geom_dict,
            'properties': props,
        })

    if skipped > 0:
        print(f"      ⚠ {skipped} fitur dilewati (geometri null/kosong)")

    return {
        'type': 'FeatureCollection',
        'features': features,
    }


def save_geojson(d: dict, path: str):
    """Simpan dict ke file GeoJSON dengan separators kompak."""
    with open(path, 'w', encoding='utf-8') as f:
        # allow_nan=False → lempar error jika masih ada NaN yang lolos
        json.dump(d, f, separators=(',', ':'), ensure_ascii=False,
                  allow_nan=False)


def ensure_indexes():
    print("🔍 Spatial index...")
    with engine.connect() as conn:
        conn.execute(text("CREATE INDEX IF NOT EXISTS idx_shorelines_geom ON tb_shorelines USING GIST (geometry);"))
        conn.execute(text("CREATE INDEX IF NOT EXISTS idx_shorelines_tile_year ON tb_shorelines (tile_id, year);"))
        conn.execute(text("CREATE INDEX IF NOT EXISTS idx_rates_geom ON tb_rates USING GIST (geometry);"))
        conn.execute(text("CREATE INDEX IF NOT EXISTS idx_rates_tile ON tb_rates (tile_id);"))
        conn.commit()
    print("   ✅ Index siap.")


def filter_cols(gdf, cols):
    return gdf[[c for c in cols if c in gdf.columns]]


def validate_gdf(gdf: gpd.GeoDataFrame, label: str) -> gpd.GeoDataFrame:
    """Drop baris dengan geometry null/invalid sebelum diproses."""
    before = len(gdf)
    gdf    = gdf[~gdf.geometry.isna()].copy()
    gdf    = gdf[~gdf.geometry.is_empty].copy()
    after  = len(gdf)
    if before != after:
        print(f"   ⚠ {label}: {before-after} baris dengan geometri null dibuang")
    return gdf


# ── EXPORT PER TILE — versi baru ────────────────────────────

def export_per_tile(gdf: gpd.GeoDataFrame, output_dir: str, layer_name: str):
    """
    Export GeoJSON per tile.
    FIX: konversi ke dict dilakukan PER TILE (bukan seluruh GDF sekaligus)
    sehingga tidak ada masalah string terlalu besar untuk json.loads().
    """
    os.makedirs(output_dir, exist_ok=True)
    tiles    = sorted(gdf['tile_id'].unique())
    manifest = {
        "layer":       layer_name,
        "generated":   pd.Timestamp.now().isoformat(),
        "total_tiles": len(tiles),
        "tiles":       [],
        "tile_bounds": {}
    }
    total_features = 0
    errors         = []

    for tile_id in tiles:
        subset = gdf[gdf['tile_id'] == tile_id].copy()
        n_raw  = len(subset)

        # Validasi geometri
        subset = validate_gdf(subset, f"Tile {tile_id}")
        if subset.empty:
            print(f"   Tile {str(tile_id):>8}: KOSONG setelah validasi — dilewati")
            continue

        n = len(subset)
        total_features += n

        # Bbox dari geometri aktual
        bounds = subset.geometry.total_bounds
        manifest["tile_bounds"][str(tile_id)] = [
            round(float(bounds[0]), 4), round(float(bounds[1]), 4),
            round(float(bounds[2]), 4), round(float(bounds[3]), 4),
        ]
        manifest["tiles"].append(str(tile_id))

        # Buang kolom tile_id dari output
        out_gdf = subset.drop(columns=['tile_id'], errors='ignore')

        try:
            # FIX: bangun dict per tile — tidak ada json.loads() pada string raksasa
            geojson_dict = gdf_to_geojson_dict(out_gdf, COORD_PRECISION)
            path         = os.path.join(output_dir, f"{layer_name}_tile_{tile_id}.geojson")
            save_geojson(geojson_dict, path)

            size_kb = os.path.getsize(path) / 1024
            print(f"   Tile {str(tile_id):>8}: {n:>6} fitur  →  {size_kb:>7.1f} KB")

        except Exception as e:
            print(f"   Tile {str(tile_id):>8}: ❌ ERROR — {e}")
            errors.append((tile_id, str(e)))
            continue

    # Simpan manifest
    manifest_path = os.path.join(output_dir, f"{layer_name}_manifest.json")
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    total_mb = sum(
        os.path.getsize(os.path.join(output_dir, f))
        for f in os.listdir(output_dir) if f.endswith('.geojson')
    ) / (1024 * 1024)

    print(f"   📦 {len(manifest['tiles'])} tile berhasil, {total_features:,} fitur, {total_mb:.1f} MB")
    if errors:
        print(f"   ⚠ {len(errors)} tile gagal: {[e[0] for e in errors]}")


# ── ETL UTAMA ────────────────────────────────────────────────

def run_etl():
    t0 = time.time()
    try:
        print("\n🛠️  Tahap 1: Index Tiles...")
        gdf_tiles = gpd.read_file(PATH_TILES)
        gdf_tiles = gdf_tiles[['id', 'geometry']].rename(columns={'id': 'tile_id'})

        print("\n🌊 Tahap 2: Shorelines...")
        gdf_gp        = gpd.read_file(INPUT_GPKG, layer='shorelines_annual')
        gdf_tiles_p   = gdf_tiles.to_crs(gdf_gp.crs)
        gdf_gp_tagged = gpd.sjoin(gdf_gp, gdf_tiles_p, how="inner", predicate="intersects")
        gdf_gp_tagged = gdf_gp_tagged.drop(columns=['index_right'])

        if 'certainty' in gdf_gp_tagged.columns:
            gdf_gp_tagged['certainty'] = normalize_certainty(gdf_gp_tagged['certainty'])
            print(f"   Certainty: {gdf_gp_tagged['certainty'].value_counts().to_dict()}")
        else:
            gdf_gp_tagged['certainty'] = 'good'
        print(f"   ✅ {len(gdf_gp_tagged):,} fitur shoreline")

        print("\n📊 Tahap 3: Rates of Change...")
        gdf_roc        = gpd.read_file(INPUT_GPKG, layer='rates_of_change')
        gdf_roc_tagged = gpd.sjoin(gdf_roc, gdf_tiles_p, how="inner", predicate="intersects")
        gdf_roc_tagged = gdf_roc_tagged.drop(columns=['index_right'])
        print(f"   ✅ {len(gdf_roc_tagged):,} titik rates")

        tiles_aktif = gdf_gp_tagged['tile_id'].unique()
        print(f"\n📍 Tile aktif: {list(tiles_aktif)}")

        with engine.connect() as conn:
            for tid in tiles_aktif:
                conn.execute(text("DELETE FROM tb_shorelines WHERE tile_id = :tid"),
                             {"tid": str(tid)})
                conn.execute(text("DELETE FROM tb_rates WHERE tile_id = :tid"),
                             {"tid": str(tid)})
            conn.commit()

        print("\n📥 Ingest ke PostGIS...")
        gdf_gp_tagged.to_postgis("tb_shorelines", engine, if_exists='append', index=False)
        gdf_roc_tagged.to_postgis("tb_rates",      engine, if_exists='append', index=False)
        print("   ✅ Data tersimpan.")

        print()
        ensure_indexes()

        print("\n📤 Export per-tile (simplify 0.0003° di PostGIS)...")

        # Query shorelines — simplifikasi HANYA di PostGIS
        query_sl = """
            SELECT tile_id, year, certainty,
                   ST_SimplifyPreserveTopology(geometry, 0.0003) AS geometry
            FROM tb_shorelines
            ORDER BY tile_id, year
        """
        print("   📡 Query shorelines dari PostGIS...")
        final_gp = gpd.read_postgis(query_sl, engine, geom_col='geometry')
        print(f"   ✅ {len(final_gp):,} fitur dimuat")

        # Normalisasi certainty dari hasil query
        if 'certainty' in final_gp.columns:
            final_gp = final_gp.copy()
            final_gp['certainty'] = normalize_certainty(final_gp['certainty'])

        # Konversi CRS & filter kolom
        final_gp_exp = filter_cols(final_gp.to_crs(epsg=4326), COLS_SHORELINES)

        # Rates — tidak perlu simplifikasi (titik)
        print("   📡 Query rates dari PostGIS...")
        final_roc     = gpd.read_postgis("SELECT * FROM tb_rates", engine, geom_col='geometry')
        final_roc_exp = filter_cols(final_roc.to_crs(epsg=4326), COLS_RATES)
        print(f"   ✅ {len(final_roc_exp):,} titik dimuat")

        print("\n   Shorelines:")
        export_per_tile(final_gp_exp, OUT_DIR_SHORELINES, "shorelines")

        print("\n   Rates:")
        export_per_tile(final_roc_exp, OUT_DIR_RATES, "rates")

        elapsed = time.time() - t0
        print(f"\n✨ SELESAI! Total waktu: {elapsed:.1f} detik")

    except Exception as e:
        import traceback
        print(f"\n❌ Error: {e}")
        traceback.print_exc()


if __name__ == "__main__":
    run_etl()