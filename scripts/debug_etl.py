"""
debug_etl.py
============
Jalankan ini SEBELUM etl_optimized.py untuk:
  1. Cek koneksi database PostGIS
  2. Cek struktur tabel tb_shorelines & tb_rates
  3. Cek file input (.gpkg & tiles)
  4. Preview data — berapa fitur, kolom apa saja, CRS apa

Cara pakai:
    python debug_etl.py
"""

import os, sys
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

try:
    import colorama; colorama.init()
    G = '\033[92m'; Y = '\033[93m'; R = '\033[91m'; B = '\033[94m'
    RESET = '\033[0m'; BOLD = '\033[1m'
except ImportError:
    G = Y = R = B = RESET = BOLD = ''

def ok(m):   print(f"  {G}✔{RESET}  {m}")
def warn(m): print(f"  {Y}⚠{RESET}  {m}")
def err(m):  print(f"  {R}✘{RESET}  {m}")
def info(m): print(f"  {B}i{RESET}  {m}")
def head(m): print(f"\n{BOLD}{m}{RESET}")
def sep():   print("  " + "─"*55)

errors_found = []

# ── 1. ENV VARIABLES ───────────────────────────────────────
head("1. Environment Variables (.env)")
for var in ['DB_URL', 'PATH_TILES', 'INPUT_GPKG']:
    val = os.getenv(var)
    if val:
        # Sembunyikan password di DB_URL
        display = val if var != 'DB_URL' else val.replace(
            val.split('@')[0].split('//')[-1], '****'
        ) if '@' in val else val
        ok(f"{var} = {display}")
    else:
        err(f"{var} tidak ada di .env")
        errors_found.append(f"ENV: {var} kosong")

# ── 2. FILE INPUT ──────────────────────────────────────────
head("2. File Input")

gpkg_path  = os.getenv('INPUT_GPKG', '')
tiles_path = os.getenv('PATH_TILES', '')

for label, path_str in [('INPUT_GPKG', gpkg_path), ('PATH_TILES', tiles_path)]:
    p = Path(path_str) if path_str else None
    if not p:
        warn(f"{label}: path tidak di-set, skip cek file")
        continue
    if p.exists():
        size_mb = p.stat().st_size / (1024*1024)
        ok(f"{label}: ada  ({size_mb:.0f} MB)  —  {p}")
    else:
        err(f"{label}: FILE TIDAK ADA — {p}")
        errors_found.append(f"FILE: {label} tidak ditemukan")

# ── 3. LIBRARY CHECK ───────────────────────────────────────
head("3. Python Libraries")

libs = {
    'geopandas':  'gpd',
    'sqlalchemy': 'sqlalchemy',
    'pyogrio':    'pyogrio',
    'psycopg2':   'psycopg2',
    'dotenv':     'dotenv',
}

gpd_ok = False
for lib, import_name in libs.items():
    try:
        mod = __import__(import_name)
        ver = getattr(mod, '__version__', '?')
        ok(f"{lib} {ver}")
        if lib == 'geopandas':
            gpd_ok = True
    except ImportError:
        if lib == 'psycopg2':
            try:
                import psycopg2
                ok(f"psycopg2 {psycopg2.__version__}")
            except ImportError:
                warn(f"{lib} tidak ada — coba: pip install psycopg2-binary")
        else:
            err(f"{lib} tidak ada — pip install {lib}")
            errors_found.append(f"LIB: {lib} tidak terinstall")

# ── 4. DATABASE CONNECTION ─────────────────────────────────
head("4. Koneksi Database PostGIS")

db_url = os.getenv('DB_URL', '')
if not db_url:
    err("DB_URL kosong, skip cek database")
else:
    try:
        from sqlalchemy import create_engine, text, inspect
        engine = create_engine(db_url, connect_args={'connect_timeout': 5})

        with engine.connect() as conn:
            # Cek koneksi dasar
            ver = conn.execute(text("SELECT version()")).scalar()
            ok(f"Koneksi berhasil — {ver[:50]}...")

            # Cek PostGIS extension
            try:
                pg_ver = conn.execute(text("SELECT PostGIS_Version()")).scalar()
                ok(f"PostGIS aktif — versi {pg_ver.strip()}")
            except Exception:
                warn("PostGIS extension tidak aktif — jalankan: CREATE EXTENSION postgis;")
                errors_found.append("DB: PostGIS extension belum aktif")

            # Cek tabel yang ada
            sep()
            info("Tabel yang relevan di database:")
            inspector = inspect(engine)
            all_tables = inspector.get_table_names()
            for tbl in ['tb_shorelines', 'tb_rates']:
                if tbl in all_tables:
                    # Hitung baris
                    try:
                        count = conn.execute(text(f"SELECT COUNT(*) FROM {tbl}")).scalar()
                        cols  = [c['name'] for c in inspector.get_columns(tbl)]
                        ok(f"{tbl}: {count:,} baris — kolom: {', '.join(cols[:8])}{'...' if len(cols)>8 else ''}")

                        # Cek ada geometry column
                        if 'geometry' not in cols:
                            warn(f"{tbl}: kolom 'geometry' tidak ditemukan!")
                            errors_found.append(f"DB: {tbl} tidak punya kolom geometry")

                        # Cek spatial index
                        idx_query = text(f"""
                            SELECT indexname FROM pg_indexes
                            WHERE tablename = '{tbl}'
                              AND indexdef ILIKE '%gist%'
                        """)
                        indexes = [r[0] for r in conn.execute(idx_query)]
                        if indexes:
                            ok(f"{tbl}: spatial index ada — {indexes}")
                        else:
                            warn(f"{tbl}: belum ada spatial index GIST (ETL akan membuatnya)")

                    except Exception as e:
                        warn(f"{tbl}: tabel ada tapi error saat query — {e}")
                else:
                    warn(f"{tbl}: belum ada (akan dibuat saat ETL pertama)")

    except Exception as e:
        err(f"Gagal konek database: {e}")
        errors_found.append(f"DB: koneksi gagal — {e}")

# ── 5. PREVIEW FILE GPKG ───────────────────────────────────
head("5. Preview Input GPKG")

if gpd_ok and gpkg_path and Path(gpkg_path).exists():
    try:
        import geopandas as gpd
        import fiona

        # List layer di GPKG
        layers = fiona.listlayers(gpkg_path)
        info(f"Layer di GPKG: {layers}")

        for layer_name in ['shorelines_annual', 'rates_of_change']:
            if layer_name not in layers:
                warn(f"Layer '{layer_name}' tidak ada di GPKG — nama layer mungkin berbeda")
                info(f"Layer yang tersedia: {layers}")
                errors_found.append(f"GPKG: layer '{layer_name}' tidak ditemukan")
                continue

            # Baca hanya 5 baris untuk preview cepat
            sample = gpd.read_file(gpkg_path, layer=layer_name, rows=5)
            ok(f"Layer '{layer_name}':")
            info(f"  CRS    : {sample.crs}")
            info(f"  Kolom  : {list(sample.columns)}")
            info(f"  Tipe   : {sample.geometry.geom_type.unique().tolist()}")
            info(f"  Contoh : {sample.iloc[0].to_dict() if len(sample) > 0 else 'kosong'}")

            # Estimasi total fitur (baca semua — bisa lambat untuk 5GB)
            sep()

    except ImportError:
        warn("fiona tidak terinstall — skip preview GPKG (pip install fiona)")
    except Exception as e:
        err(f"Gagal baca GPKG: {e}")
        errors_found.append(f"GPKG: error membaca — {e}")
else:
    if not gpd_ok:
        warn("geopandas tidak ada, skip preview GPKG")
    elif not gpkg_path:
        warn("INPUT_GPKG tidak di-set, skip")
    else:
        warn(f"File GPKG tidak ditemukan: {gpkg_path}")

# ── 6. CEK OUTPUT FOLDER ───────────────────────────────────
head("6. Output Folder (public/tiles/)")

out_root = Path("public/tiles")
if out_root.exists():
    for sub in ['shorelines', 'rates']:
        sub_path = out_root / sub
        if sub_path.exists():
            files = list(sub_path.glob("*.geojson"))
            ok(f"public/tiles/{sub}/: ada — {len(files)} file GeoJSON")
        else:
            info(f"public/tiles/{sub}/: belum ada (akan dibuat ETL)")
else:
    info("public/tiles/ belum ada (akan dibuat ETL saat dijalankan)")

# ── HASIL ─────────────────────────────────────────────────
print(f"\n{'='*59}")
if not errors_found:
    print(f"  {G}{BOLD}✔ SEMUA CEK LULUS — siap jalankan etl_optimized.py{RESET}")
else:
    print(f"  {R}{BOLD}✘ {len(errors_found)} masalah ditemukan — perbaiki sebelum ETL:{RESET}")
    for e in errors_found:
        print(f"     • {e}")
print(f"{'='*59}\n")