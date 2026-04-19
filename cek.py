import geopandas as gpd

INPUT_GPKG = "public/coastlines_0.0.5.wpp.gpkg"

# Cek kolom Shorelines (GP)
print("--- Kolom di Shorelines (GP) ---")
gdf_gp = gpd.read_file(INPUT_GPKG, layer='shorelines_annual')
print(gdf_gp.columns.tolist())

# Cek kolom Rates (ROC)
print("\n--- Kolom di Rates (ROC) ---")
gdf_roc = gpd.read_file(INPUT_GPKG, layer='rates_of_change')
print(gdf_roc.columns.tolist())