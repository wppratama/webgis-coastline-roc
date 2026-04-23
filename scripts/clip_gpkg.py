import geopandas as gpd
import fiona

# 1. Definisikan Path File
gpkg_path = r"D:\Work Hard Play Hard\1. Work\1. Tugas\12. PIKSEL Dev\coastlines_0.0.5.gpkg"
tiles_path = r"D:\Work Hard Play Hard\1. Work\1. Tugas\12. PIKSEL Dev\indonesia_50km_tiles_lok.geojson"
output_gpkg = r"D:\Work Hard Play Hard\1. Work\1. Tugas\12. PIKSEL Dev\coastlines_clipped_filtered.gpkg"

# 2. Tentukan layer yang hanya ingin diambil
target_layers = ["shorelines_annual", "rates_of_change"]

def clip_selected_layers():
    print("Membaca file index tiles...")
    try:
        tiles_gdf = gpd.read_file(tiles_path)
    except Exception as e:
        print(f"Gagal membaca file tiles: {e}")
        return

    # 3. Looping hanya pada layer yang Anda butuhkan
    for layer_name in target_layers:
        print(f"\n--- Memproses layer: {layer_name} ---")
        
        try:
            # Load layer spesifik
            gdf = gpd.read_file(gpkg_path, layer=layer_name)
            
            # Sinkronisasi CRS
            if gdf.crs != tiles_gdf.crs:
                print(f"Menyesuaikan CRS layer {layer_name}...")
                tiles_gdf_projected = tiles_gdf.to_crs(gdf.crs)
            else:
                tiles_gdf_projected = tiles_gdf

            # Eksekusi Pemotongan
            print(f"Memotong data {layer_name}...")
            clipped_gdf = gpd.clip(gdf, tiles_gdf_projected)

            if not clipped_gdf.empty:
                print(f"Menyimpan {layer_name} ke file baru...")
                clipped_gdf.to_file(output_gpkg, layer=layer_name, driver="GPKG")
            else:
                print(f"Layer {layer_name} kosong setelah dipotong (di luar area tile).")
                
        except ValueError:
            print(f"⚠️ Layer '{layer_name}' tidak ditemukan di dalam file GPKG.")
        except Exception as e:
            print(f"Terjadi kesalahan pada layer {layer_name}: {e}")

    print(f"\n✅ Selesai! Hasil filter disimpan di:\n{output_gpkg}")

if __name__ == "__main__":
    clip_selected_layers()