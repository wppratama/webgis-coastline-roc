import Database from 'better-sqlite3';

// Ganti nama file ini jika berbeda
const fileGpkg = './public/data_pantai.gpkg';

console.log(`\n🔍 Menganalisis file GeoPackage: ${fileGpkg}\n`);

try {
    // Buka database mode read-only agar aman (tidak merusak data asli)
    const db = new Database(fileGpkg, { readonly: true });

    // 1. Cek tabel apa saja yang berisi data spasial (vektor/garis)
    const featureTables = db.prepare(`
        SELECT table_name 
        FROM gpkg_contents 
        WHERE data_type = 'features'
    `).all();

    if (featureTables.length === 0) {
        console.log("❌ Tidak ditemukan tabel data spasial di dalam file ini.");
    } else {
        featureTables.forEach(tabel => {
            const namaTabel = tabel.table_name;
            console.log(`=========================================`);
            console.log(`📁 DITEMUKAN TABEL: [ ${namaTabel} ]`);
            console.log(`=========================================`);

            // 2. Cek kolom geometri dan Sistem Koordinat (EPSG)
            const infoGeometri = db.prepare(`
                SELECT column_name, geometry_type_name, srs_id 
                FROM gpkg_geometry_columns 
                WHERE table_name = ?
            `).get(namaTabel);

            if (infoGeometri) {
                console.log(`📍 Kolom Geometri   : ${infoGeometri.column_name}`);
                console.log(`📐 Tipe Geometri    : ${infoGeometri.geometry_type_name}`);
                
                if (infoGeometri.srs_id === 4326) {
                    console.log(`✅ Sistem Koordinat : EPSG:4326 (WGS 84) -> AMAN untuk WebGIS Leaflet!`);
                } else {
                    console.log(`⚠️ Sistem Koordinat : EPSG:${infoGeometri.srs_id} -> PERINGATAN: Sebaiknya Reproyeksi ke EPSG:4326 di QGIS agar bisa tayang di WebGIS.`);
                }
            }

            // 3. Cek daftar kolom atribut (seperti tahun, keterangan, dll)
            const kolomTabel = db.prepare(`PRAGMA table_info(${namaTabel})`).all();
            const namaKolomAtribut = kolomTabel
                .map(k => k.name)
                .filter(nama => infoGeometri ? nama !== infoGeometri.column_name : true);

            console.log(`📋 Kolom Atribut    : ${namaKolomAtribut.join(', ')}`);

            // 4. Hitung jumlah baris data
            const jumlahData = db.prepare(`SELECT COUNT(*) as total FROM ${namaTabel}`).get();
            console.log(`📊 Total Baris Data : ${jumlahData.total} fitur garis pantai\n`);
        });
    }

    db.close();

} catch (error) {
    console.error("Terjadi kesalahan saat membaca file GPKG:", error.message);
}