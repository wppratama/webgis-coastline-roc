import geopandas as gpd
import warnings

# Mengabaikan peringatan minor dari library agar terminal terlihat bersih untuk screenshot Evidence
warnings.filterwarnings("ignore") 

input_gpkg = './public/coastlines_0.0.5.wpp.gpkg'
output_gpkg = './public/coastlines_0.0.5.wpp_web.gpkg'

print("=======================================================")
print("🌊 PROSES STANDARDISASI & KONVERSI DATA SPASIAL WEBGIS")
print("=======================================================")

try:
    # 1. Membaca Layer dari Master GPKG
    print("[1/3] Membaca tabel spasial dari master database...")
    shorelines = gpd.read_file(input_gpkg, layer='shorelines_annual', engine='pyogrio')
    rates = gpd.read_file(input_gpkg, layer='rates_of_change', engine='pyogrio')

    # 2. Proses Konversi CRS (Reproyeksi)
    print(f"[2/3] Mengonversi CRS 'shorelines_annual' ke EPSG:4326...")
    shorelines_web = shorelines.to_crs(epsg=4326)

    print(f"      Mengonversi CRS 'rates_of_change' ke EPSG:4326...")
    rates_web = rates.to_crs(epsg=4326)

    # 3. Menyimpan Output Standar WebGIS
    print("[3/3] Menyimpan struktur baru ke file GeoPackage...")
    # Menyimpan layer garis pantai
    shorelines_web.to_file(output_gpkg, layer='shorelines_annual', driver="GPKG", engine='pyogrio')
    # Menumpuk (append) layer hotspot ke dalam file yang sama
    rates_web.to_file(output_gpkg, layer='rates_of_change', driver="GPKG", engine='pyogrio')

    print("=======================================================")
    print("✅ SUCCESS: File vektor terstandarisasi telah berhasil dibuat!")
    print(f"📁 Lokasi Output : {output_gpkg}")
    print("=======================================================")

except Exception as e:
    print(f"❌ Terjadi Kesalahan Konversi: {e}")