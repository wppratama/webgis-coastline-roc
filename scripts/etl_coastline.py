import geopandas as gpd
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
import os

# --- 1. KONFIGURASI  ---
load_dotenv()

# --- 1. KONFIGURASI DARI ENV ---
DB_URL = os.getenv("DB_URL")
PATH_TILES = os.getenv("PATH_TILES")
INPUT_GPKG = os.getenv("INPUT_GPKG")

engine = create_engine(DB_URL)

# Fix untuk environment Windows
if 'CONDA_PREFIX' in os.environ:
    os.environ['PROJ_LIB'] = os.path.join(os.environ['CONDA_PREFIX'], 'Library', 'share', 'proj')

def run_real_final_etl():
    try:
        print("🛠️  Tahap 1: Membaca Index Tiles...")
        gdf_tiles = gpd.read_file(PATH_TILES)
        gdf_tiles = gdf_tiles[['id', 'geometry']].rename(columns={'id': 'tile_id'})

        # --- PROSES SHORELINES (GP) ---
        print("🌊 Tahap 2: Memproses Shorelines (GP)...")
        gdf_gp = gpd.read_file(INPUT_GPKG, layer='shorelines_annual')
        # Samakan CRS untuk spatial join
        gdf_tiles_proj = gdf_tiles.to_crs(gdf_gp.crs)
        gdf_gp_tagged = gpd.sjoin(gdf_gp, gdf_tiles_proj, how="inner", predicate="intersects")
        gdf_gp_tagged = gdf_gp_tagged.drop(columns=['index_right'])

        # --- PROSES RATES (ROC) ---
        print("📊 Tahap 3: Memproses Rates of Change (ROC)...")
        gdf_roc = gpd.read_file(INPUT_GPKG, layer='rates_of_change')
        gdf_roc_tagged = gpd.sjoin(gdf_roc, gdf_tiles_proj, how="inner", predicate="intersects")
        gdf_roc_tagged = gdf_roc_tagged.drop(columns=['index_right'])

        # --- DETEKSI TILE AKTIF & PEMBERSIHAN ---
        tiles_aktif = gdf_gp_tagged['tile_id'].unique()
        print(f"📍 Tile terdeteksi di data baru: {list(tiles_aktif)}")

        with engine.connect() as conn:
            for tid in tiles_aktif:
                print(f"🗑️  Menghapus data lama untuk Tile {tid} di PostGIS...")
                conn.execute(text(f"DELETE FROM tb_shorelines WHERE tile_id = '{tid}'"))
                conn.execute(text(f"DELETE FROM tb_rates WHERE tile_id = '{tid}'"))
            conn.commit()

        # --- SIMPAN KE POSTGIS ---
        print("📥 Memasukkan data baru ke PostGIS...")
        gdf_gp_tagged.to_postgis("tb_shorelines", engine, if_exists='append', index=False)
        gdf_roc_tagged.to_postgis("tb_rates", engine, if_exists='append', index=False)

        # --- EXPORT KEDUA DATA UNTUK WEB ---
        print("📤 Mengekspor ulang SEMUA data ke GeoJSON (WGS84)...")
        
        # Ambil semua data dari database agar GeoJSON web komplit (semua tile)
        final_gp = gpd.read_postgis("SELECT * FROM tb_shorelines", engine, geom_col='geometry')
        final_roc = gpd.read_postgis("SELECT * FROM tb_rates", engine, geom_col='geometry')

        # Simpan ke folder public dengan proyeksi WGS84 (EPSG:4326)
        final_gp.to_crs(epsg=4326).to_file("public/Coastline.geojson", driver='GeoJSON')
        final_roc.to_crs(epsg=4326).to_file("public/RatesofChange.geojson", driver='GeoJSON')

        print("✨ SELESAI!  Database terupdate, Coastline.geojson & RateofChange.geojson sudah diperbarui.")

    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    run_real_final_etl()