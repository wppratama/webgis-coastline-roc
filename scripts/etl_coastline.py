"""
ETL Optimized — WebGIS Dinamika Garis Pantai Indonesia
Fix: presisi koordinat via json.dumps() — kompatibel semua versi GeoPandas/pyogrio
"""

import geopandas as gpd
import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
import os, json, time

# ─── KONFIGURASI ───────────────────────────────────────────
load_dotenv()

DB_URL     = os.getenv("DB_URL")
PATH_TILES = os.getenv("PATH_TILES")
INPUT_GPKG = os.getenv("INPUT_GPKG")

COLS_SHORELINES = ['geometry', 'year', 'tile_id']
COLS_RATES      = ['geometry', 'rate_time', 'tile_id']

OUT_DIR_SHORELINES = "public/tiles/shorelines"
OUT_DIR_RATES      = "public/tiles/rates"

COORD_PRECISION = 5   # desimal — ±1 meter, cukup untuk web

if 'CONDA_PREFIX' in os.environ:
    os.environ['PROJ_LIB'] = os.path.join(
        os.environ['CONDA_PREFIX'], 'Library', 'share', 'proj'
    )

engine = create_engine(DB_URL)


# ─── FIX: ROUND KOORDINAT MANUAL ───────────────────────────
def round_coordinates(coords, precision):
    """Rekursif — handles Point, LineString, Polygon, MultiX, dst."""
    if isinstance(coords[0], (int, float)):
        return [round(c, precision) for c in coords]
    return [round_coordinates(ring, precision) for ring in coords]


def geojson_with_precision(gdf: gpd.GeoDataFrame, precision: int = 5) -> dict:
    """
    Convert GeoDataFrame ke dict GeoJSON dengan presisi koordinat terbatas.
    Kompatibel dengan semua versi GeoPandas (pyogrio MAUPUN fiona).
    """
    raw = json.loads(gdf.to_json())   # GeoPandas → JSON string → dict

    for feature in raw.get('features', []):
        geom = feature.get('geometry')
        if geom and geom.get('coordinates'):
            geom['coordinates'] = round_coordinates(geom['coordinates'], precision)

    return raw


def save_geojson(geojson_dict: dict, path: str):
    """Simpan dict GeoJSON ke file dengan format rapi."""
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(geojson_dict, f, separators=(',', ':'), ensure_ascii=False)


# ─── HELPER: SPATIAL INDEX ─────────────────────────────────
def ensure_spatial_indexes():
    print("🔍 Memastikan spatial index tersedia...")
    with engine.connect() as conn:
        conn.execute(text("""
            CREATE INDEX IF NOT EXISTS idx_shorelines_geom
                ON tb_shorelines USING GIST (geometry);
        """))
        conn.execute(text("""
            CREATE INDEX IF NOT EXISTS idx_shorelines_tile_year
                ON tb_shorelines (tile_id, year);
        """))
        conn.execute(text("""
            CREATE INDEX IF NOT EXISTS idx_rates_geom
                ON tb_rates USING GIST (geometry);
        """))
        conn.execute(text("""
            CREATE INDEX IF NOT EXISTS idx_rates_tile
                ON tb_rates (tile_id);
        """))
        conn.commit()
    print("   ✅ Spatial index siap.")


# ─── HELPER: EXPORT PER TILE ───────────────────────────────
def export_per_tile(gdf: gpd.GeoDataFrame, output_dir: str, layer_name: str):
    """
    Export GeoDataFrame terpisah per tile_id dengan koordinat presisi terbatas.
    Menghasilkan:
      {layer_name}_tile_{tile_id}.geojson  — satu file per tile
      {layer_name}_manifest.json           — daftar tile + bbox masing-masing
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

    for tile_id in tiles:
        subset = gdf[gdf['tile_id'] == tile_id].copy()
        n      = len(subset)
        total_features += n

        # Bbox dari geometri aktual (sudah dalam WGS84)
        bounds = subset.geometry.total_bounds  # [minx, miny, maxx, maxy]
        manifest["tile_bounds"][str(tile_id)] = [
            round(float(bounds[0]), 4),
            round(float(bounds[1]), 4),
            round(float(bounds[2]), 4),
            round(float(bounds[3]), 4),
        ]
        manifest["tiles"].append(str(tile_id))

        # Buang kolom tile_id dari GeoJSON (sudah ada di nama file)
        out_gdf = subset.drop(columns=['tile_id'], errors='ignore')

        # Konversi ke GeoJSON dengan presisi koordinat terbatas
        geojson_dict = geojson_with_precision(out_gdf, COORD_PRECISION)

        path = os.path.join(output_dir, f"{layer_name}_tile_{tile_id}.geojson")
        save_geojson(geojson_dict, path)

        size_kb = os.path.getsize(path) / 1024
        print(f"   Tile {str(tile_id):>8}: {n:>6} fitur  →  {size_kb:>8.1f} KB")

    # Simpan manifest
    manifest_path = os.path.join(output_dir, f"{layer_name}_manifest.json")
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    total_size = sum(
        os.path.getsize(os.path.join(output_dir, f))
        for f in os.listdir(output_dir) if f.endswith('.geojson')
    ) / (1024 * 1024)

    print(f"   📋 Manifest: {manifest_path}")
    print(f"   📦 Total: {len(tiles)} tile, {total_features:,} fitur, {total_size:.1f} MB")


# ─── HELPER: FETCH DARI POSTGIS ────────────────────────────
def fetch_simplified(table: str, tolerance: float = 0.0005) -> gpd.GeoDataFrame:
    if tolerance > 0:
        query = f"""
            SELECT tile_id, year,
                   ST_SimplifyPreserveTopology(geometry, {tolerance}) AS geometry
            FROM {table}
            ORDER BY tile_id, year
        """
    else:
        query = f"SELECT * FROM {table}"

    print(f"   📡 Query {table}  (tolerance={tolerance}°)...")
    gdf = gpd.read_postgis(query, engine, geom_col='geometry')
    print(f"   ✅ {len(gdf):,} fitur dimuat.")
    return gdf


def filter_cols(gdf: gpd.GeoDataFrame, target_cols: list) -> gpd.GeoDataFrame:
    available = [c for c in target_cols if c in gdf.columns]
    return gdf[available]


# ─── ETL UTAMA ─────────────────────────────────────────────
def run_etl():
    t0 = time.time()
    try:
        # ── Tahap 1: Baca tile index ──────────────────────
        print("\n🛠️  Tahap 1: Membaca Index Tiles...")
        gdf_tiles = gpd.read_file(PATH_TILES)
        gdf_tiles = gdf_tiles[['id', 'geometry']].rename(columns={'id': 'tile_id'})

        # ── Tahap 2: Proses Shorelines ────────────────────
        print("\n🌊 Tahap 2: Memproses Shorelines...")
        gdf_gp        = gpd.read_file(INPUT_GPKG, layer='shorelines_annual')
        gdf_tiles_p   = gdf_tiles.to_crs(gdf_gp.crs)
        gdf_gp_tagged = gpd.sjoin(gdf_gp, gdf_tiles_p, how="inner", predicate="intersects")
        gdf_gp_tagged = gdf_gp_tagged.drop(columns=['index_right'])
        print(f"   ✅ {len(gdf_gp_tagged):,} fitur shoreline ter-tag.")

        # ── Tahap 3: Proses Rates of Change ──────────────
        print("\n📊 Tahap 3: Memproses Rates of Change...")
        gdf_roc        = gpd.read_file(INPUT_GPKG, layer='rates_of_change')
        gdf_roc_tagged = gpd.sjoin(gdf_roc, gdf_tiles_p, how="inner", predicate="intersects")
        gdf_roc_tagged = gdf_roc_tagged.drop(columns=['index_right'])
        print(f"   ✅ {len(gdf_roc_tagged):,} titik rates ter-tag.")

        # ── Tahap 4: Hapus data lama, ingest baru ────────
        tiles_aktif = gdf_gp_tagged['tile_id'].unique()
        print(f"\n📍 Tile aktif: {list(tiles_aktif)}")

        with engine.connect() as conn:
            for tid in tiles_aktif:
                print(f"   🗑️  Hapus tile '{tid}' dari DB...")
                conn.execute(text("DELETE FROM tb_shorelines WHERE tile_id = :tid"), {"tid": str(tid)})
                conn.execute(text("DELETE FROM tb_rates WHERE tile_id = :tid"),      {"tid": str(tid)})
            conn.commit()

        print("\n📥 Ingest ke PostGIS...")
        gdf_gp_tagged.to_postgis("tb_shorelines", engine, if_exists='append', index=False)
        gdf_roc_tagged.to_postgis("tb_rates",      engine, if_exists='append', index=False)
        print("   ✅ Data tersimpan.")

        # ── Tahap 5: Spatial index ────────────────────────
        print()
        ensure_spatial_indexes()

        # ── Tahap 6: Export per-tile ──────────────────────
        print("\n📤 Tahap 6: Export per-tile (WGS84, presisi 5 desimal)...")

        final_gp  = fetch_simplified("tb_shorelines", tolerance=0.0005)
        final_roc = fetch_simplified("tb_rates",      tolerance=0)

        final_gp_exp  = filter_cols(final_gp.to_crs(epsg=4326),  COLS_SHORELINES)
        final_roc_exp = filter_cols(final_roc.to_crs(epsg=4326), COLS_RATES)

        print("\n   Shorelines:")
        export_per_tile(final_gp_exp,  OUT_DIR_SHORELINES, "shorelines")

        print("\n   Rates of Change:")
        export_per_tile(final_roc_exp, OUT_DIR_RATES, "rates")

        elapsed = time.time() - t0
        print(f"\n✨ SELESAI! Waktu: {elapsed:.1f} detik")

    except Exception as e:
        import traceback
        print(f"\n❌ Error: {e}")
        traceback.print_exc()


if __name__ == "__main__":
    run_etl()