"""
verify_etl.py
=============
Jalankan setelah etl_optimized.py selesai.
Script ini TIDAK menyentuh database — hanya membaca file output.

Cara pakai:
    python verify_etl.py
    python verify_etl.py --dir public/tiles   # jika folder berbeda
"""

import os, json, sys, argparse
from pathlib import Path

# ── Warna terminal (Windows & Unix) ────────────────────────
try:
    import colorama; colorama.init()
    G = '\033[92m'; Y = '\033[93m'; R = '\033[91m'; B = '\033[94m'; RESET = '\033[0m'; BOLD = '\033[1m'
except ImportError:
    G = Y = R = B = RESET = BOLD = ''

def ok(msg):   print(f"  {G}✔{RESET}  {msg}")
def warn(msg): print(f"  {Y}⚠{RESET}  {msg}")
def err(msg):  print(f"  {R}✘{RESET}  {msg}")
def info(msg): print(f"  {B}i{RESET}  {msg}")
def head(msg): print(f"\n{BOLD}{msg}{RESET}")
def sep():     print("  " + "─" * 58)

# ───────────────────────────────────────────────────────────
def check_manifest(manifest_path: Path) -> dict | None:
    """Validasi manifest.json — struktur, tipe data, kelengkapan field."""
    head(f"Manifest: {manifest_path.name}")

    if not manifest_path.exists():
        err(f"File tidak ditemukan: {manifest_path}")
        return None

    try:
        with open(manifest_path, encoding='utf-8') as f:
            m = json.load(f)
    except json.JSONDecodeError as e:
        err(f"JSON tidak valid: {e}")
        return None

    ok(f"File terbaca — {manifest_path.stat().st_size / 1024:.1f} KB")

    # Cek field wajib
    required = ['layer', 'generated', 'tiles', 'tile_bounds']
    for field in required:
        if field in m:
            ok(f"Field '{field}' ada")
        else:
            err(f"Field '{field}' TIDAK ADA — manifest tidak lengkap")

    # Cek konsistensi tiles vs tile_bounds
    tiles  = m.get('tiles', [])
    bounds = m.get('tile_bounds', {})
    info(f"Jumlah tile terdaftar: {len(tiles)}")

    missing_bounds = [t for t in tiles if str(t) not in bounds]
    if missing_bounds:
        warn(f"Tile tanpa bbox di tile_bounds: {missing_bounds}")
    else:
        ok("Semua tile punya bbox di tile_bounds")

    # Validasi format bbox
    bad_bbox = []
    for tid, bb in bounds.items():
        if not (isinstance(bb, list) and len(bb) == 4):
            bad_bbox.append(tid)
        else:
            minx, miny, maxx, maxy = bb
            if not (-180 <= minx < maxx <= 180 and -90 <= miny < maxy <= 90):
                bad_bbox.append(f"{tid} (nilai di luar range: {bb})")
    if bad_bbox:
        err(f"Bbox bermasalah: {bad_bbox}")
    else:
        ok("Semua bbox valid (WGS84)")

    return m


def check_tile_files(tiles_dir: Path, layer_name: str, manifest: dict) -> dict:
    """Cek file GeoJSON per-tile — ada, valid, isi masuk akal."""
    head(f"File tile — {layer_name}")

    tiles      = manifest.get('tiles', [])
    stats      = {'ok': 0, 'missing': 0, 'empty': 0, 'invalid': 0,
                  'total_features': 0, 'total_size_kb': 0,
                  'min_coords': None, 'max_coords': None,
                  'years': set(), 'sizes': []}

    for tile_id in tiles:
        path = tiles_dir / f"{layer_name}_tile_{tile_id}.geojson"

        if not path.exists():
            err(f"Tile {tile_id}: file TIDAK ADA — {path.name}")
            stats['missing'] += 1
            continue

        size_kb = path.stat().st_size / 1024
        stats['total_size_kb'] += size_kb
        stats['sizes'].append(size_kb)

        try:
            with open(path, encoding='utf-8') as f:
                data = json.load(f)
        except json.JSONDecodeError as e:
            err(f"Tile {tile_id}: JSON tidak valid — {e}")
            stats['invalid'] += 1
            continue

        features = data.get('features', [])
        n        = len(features)
        stats['total_features'] += n

        if n == 0:
            warn(f"Tile {tile_id}: 0 fitur (file kosong)")
            stats['empty'] += 1
            continue

        # Cek properti & koordinat sampel (maks 5 fitur pertama)
        sample_errors = []
        for feat in features[:5]:
            geom  = feat.get('geometry', {})
            props = feat.get('properties', {})

            # Cek geometri tidak null
            if not geom or not geom.get('coordinates'):
                sample_errors.append("geometry null/kosong")
                continue

            # Kumpulkan tahun (untuk shorelines)
            if 'year' in props:
                stats['years'].add(props['year'])

            # Cek presisi koordinat — ambil koordinat pertama
            def first_coord(coords):
                if isinstance(coords[0], (int, float)):
                    return coords[:2]
                return first_coord(coords[0])

            try:
                xy = first_coord(geom['coordinates'])
                # Cek apakah masuk bbox Indonesia
                lon, lat = float(xy[0]), float(xy[1])
                if not (94 <= lon <= 142 and -12 <= lat <= 8):
                    sample_errors.append(f"koordinat di luar Indonesia: [{lon:.4f}, {lat:.4f}]")

                # Cek presisi — hitung desimal
                lon_str = str(lon).split('.')
                decimals = len(lon_str[1]) if len(lon_str) > 1 else 0
                if decimals > 6:
                    sample_errors.append(f"presisi berlebihan: {decimals} desimal (target ≤5)")

                # Track range koordinat
                if stats['min_coords'] is None:
                    stats['min_coords'] = [lon, lat]
                    stats['max_coords'] = [lon, lat]
                else:
                    stats['min_coords'][0] = min(stats['min_coords'][0], lon)
                    stats['min_coords'][1] = min(stats['min_coords'][1], lat)
                    stats['max_coords'][0] = max(stats['max_coords'][0], lon)
                    stats['max_coords'][1] = max(stats['max_coords'][1], lat)
            except Exception:
                pass

        if sample_errors:
            warn(f"Tile {tile_id}: {n} fitur, {size_kb:.0f} KB — ⚠ {'; '.join(set(sample_errors))}")
        else:
            ok(f"Tile {tile_id}: {n:>6} fitur, {size_kb:>7.1f} KB — OK")

        stats['ok'] += 1

    return stats


def print_summary(layer_name: str, stats: dict):
    head(f"Ringkasan — {layer_name}")
    sep()

    total = stats['ok'] + stats['missing'] + stats['empty'] + stats['invalid']
    ok(f"Tile berhasil   : {stats['ok']} / {total}")

    if stats['missing'] > 0: err(f"Tile hilang     : {stats['missing']}")
    if stats['empty']   > 0: warn(f"Tile kosong     : {stats['empty']}")
    if stats['invalid'] > 0: err(f"Tile JSON rusak : {stats['invalid']}")

    info(f"Total fitur     : {stats['total_features']:,}")
    info(f"Total ukuran    : {stats['total_size_kb'] / 1024:.2f} MB")

    if stats['sizes']:
        info(f"Ukuran tile     : min {min(stats['sizes']):.0f} KB — max {max(stats['sizes']):.0f} KB")

    if stats['years']:
        years = sorted(stats['years'])
        info(f"Rentang tahun   : {years[0]} – {years[-1]}  ({len(years)} tahun unik)")

    if stats['min_coords']:
        info(f"Extent koordinat: lon {stats['min_coords'][0]:.3f}–{stats['max_coords'][0]:.3f}  "
             f"lat {stats['min_coords'][1]:.3f}–{stats['max_coords'][1]:.3f}")

    sep()


def check_frontend_reachable(tiles_dir: Path, layer_name: str, manifest: dict):
    """Simulasi fetch dari frontend — pastikan path relatif benar."""
    head("Simulasi path fetch frontend")

    tiles = manifest.get('tiles', [])
    if not tiles:
        warn("Tidak ada tile di manifest")
        return

    # Cek 3 tile pertama sebagai sample
    for tid in list(tiles)[:3]:
        rel = f"tiles/{layer_name}/{layer_name}_tile_{tid}.geojson"
        abs_path = tiles_dir / f"{layer_name}_tile_{tid}.geojson"
        if abs_path.exists():
            ok(f"fetch('{rel}') → ada ({abs_path.stat().st_size/1024:.0f} KB)")
        else:
            err(f"fetch('{rel}') → FILE TIDAK ADA")

    manifest_rel = f"tiles/{layer_name}/{layer_name}_manifest.json"
    manifest_abs = tiles_dir / f"{layer_name}_manifest.json"
    if manifest_abs.exists():
        ok(f"fetch('{manifest_rel}') → ada")
    else:
        err(f"fetch('{manifest_rel}') → TIDAK ADA")


# ── MAIN ───────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description='Verifikasi output ETL WebGIS')
    parser.add_argument('--dir', default='public/tiles',
                        help='Folder root tiles (default: public/tiles)')
    args = parser.parse_args()

    base = Path(args.dir)
    print(f"\n{'='*62}")
    print(f"  WebGIS ETL Verifier — root: {base.resolve()}")
    print(f"{'='*62}")

    layers = {
        'shorelines': base / 'shorelines',
        'rates':      base / 'rates',
    }

    all_ok = True

    for layer_name, layer_dir in layers.items():
        print(f"\n{'━'*62}")
        print(f"  LAYER: {layer_name.upper()}")
        print(f"{'━'*62}")

        if not layer_dir.exists():
            err(f"Folder tidak ada: {layer_dir}")
            err("→ Pastikan etl_optimized.py sudah dijalankan")
            all_ok = False
            continue

        manifest_path = layer_dir / f"{layer_name}_manifest.json"
        manifest      = check_manifest(manifest_path)

        if manifest is None:
            all_ok = False
            continue

        stats = check_tile_files(layer_dir, layer_name, manifest)
        print_summary(layer_name, stats)
        check_frontend_reachable(layer_dir, layer_name, manifest)

        if stats['missing'] > 0 or stats['invalid'] > 0:
            all_ok = False

    # ── Hasil akhir ──────────────────────────────────────
    print(f"\n{'='*62}")
    if all_ok:
        print(f"  {G}{BOLD}✔ SEMUA CEK LULUS — tiles siap dipakai frontend{RESET}")
    else:
        print(f"  {R}{BOLD}✘ ADA MASALAH — lihat error di atas sebelum lanjut{RESET}")
    print(f"{'='*62}\n")


if __name__ == '__main__':
    main()