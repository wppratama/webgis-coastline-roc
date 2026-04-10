from flask import Flask, Response
from flask_cors import CORS
import geopandas as gpd
import warnings

warnings.filterwarnings("ignore")

app = Flask(__name__)
CORS(app)  # Mengizinkan WebGIS (Vite) mengambil data dari server ini

# Lokasi Master Database GPKG Anda
db_path = "./public/data_pantai_web.gpkg"


@app.route("/api/shorelines", methods=["GET"])
def get_shorelines():
    try:
        # Membaca layer garis pantai dan langsung mengubahnya ke GeoJSON
        gdf = gpd.read_file(db_path, layer="shorelines_annual", engine="pyogrio")
        return Response(gdf.to_json(), mimetype="application/json")
    except Exception as e:
        return Response(str(e), status=500)


@app.route("/api/rates", methods=["GET"])
def get_rates():
    try:
        # Membaca layer titik perubahan dan langsung mengubahnya ke GeoJSON
        gdf = gpd.read_file(db_path, layer="rates_of_change", engine="pyogrio")
        return Response(gdf.to_json(), mimetype="application/json")
    except Exception as e:
        return Response(str(e), status=500)


if __name__ == "__main__":
    print("=========================================================")
    print("🚀 SERVER BASIS DATA SPASIAL AKTIF")
    print("Membaca file : data_pantai_web.gpkg")
    print("Akses API    : http://localhost:5000/api/shorelines")
    print("=========================================================")
    # Menjalankan server di port 5000
    app.run(port=5000, debug=False)
