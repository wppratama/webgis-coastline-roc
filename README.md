## Deskripsi Proyek
Sistem Informasi Spasial Dinamika Garis Pantai Indonesia (ID-Coastline) adalah platform berbasis WebGIS yang dirancang untuk memantau perubahan garis pantai temporal serta laju perubahannya (abrasi dan akresi). Proyek ini dikembangkan dalam rangka kegiatan Aktualisasi CPNS di Badan Informasi Geospasial (BIG) guna mengoptimalkan penyajian data hasil ekstraksi garis pantai secara interaktif dan terpusat.

Sistem ini mengintegrasikan basis data spasial PostGIS dengan antarmuka web modern untuk memberikan visualisasi yang akurat bagi para pengambil kebijakan dalam manajemen wilayah pesisir nasional.

## Fitur Utama Sistem

### 1. Visualisasi Temporal Interaktif
Menampilkan data garis pantai tahunan mulai dari tahun 1984 hingga 2026. Pengguna dapat berinteraksi dengan peta untuk melihat pergeseran garis pantai dari waktu ke waktu dengan dukungan kontrol transparansi lapisan.

### 2. Analisis Laju Perubahan (Rates of Change)
Menyajikan statistik laju perubahan pantai (meter/tahun) dalam bentuk titik-titik data (Rates of Change). Sistem secara otomatis mengklasifikasikan titik tersebut menjadi kategori Abrasi (merah) atau Akresi (hijau) berdasarkan nilai numerik laju perubahan.

### 3. Pipeline ETL Otomatis
Dilengkapi dengan skrip Python (ETL) yang menghubungkan hasil pengolahan lokal ke basis data server. Skrip ini menggunakan metode Spatial Join berbasis grid tiles 50km untuk memastikan manajemen data yang terstruktur dan mencegah redundansi data.

### 4. Manajemen Wilayah Kerja (Spatial Indexing)
Mengimplementasikan sistem indeks spasial untuk membagi wilayah kerja nasional menjadi unit-unit kecil yang mudah dikelola, mempercepat kueri database, dan mempermudah proses pembaruan data secara parsial.

## Arsitektur Teknologi

### Frontend (Antarmuka)
- Framework: Vite + Node.js
- Library Pemetaan: Leaflet JS
- Gaya Visual: CSS3 (Custom Dashboard Design)
- Pengelolaan Kode: Git & GitHub (Version Control)

### Backend & Database
- DBMS: PostgreSQL
- Ekstensi Spasial: PostGIS
- Engine Database: SQLAlchemy (Python)

### Data Processing
- Ekstraksi & Migrasi: Python (GeoPandas)
- Format Pertukaran Data: GeoJSON (WGS84)

## Struktur Repositori
- `/src` : Berisi logika utama aplikasi JavaScript dan komponen antarmuka.
- `/public` : Direktori untuk aset statis, ikon, dan file GeoJSON hasil sinkronisasi.
- `etl_final_full.py` : Skrip otomasi pemindahan data dari GeoPackage ke basis data PostGIS.
- `index.html` : Struktur dasar aplikasi web dan pendefinisian elemen UI.
- `package.json` : Konfigurasi dependensi proyek dan skrip build.

## Panduan Instalasi dan Pengembangan

1. Clone repositori ini:
   git clone https://github.com/wppratama/webgis-coastline-roc.git

2. Instal dependensi:
   npm install

3. Jalankan server pengembangan:
   npm run dev

4. Akses melalui peramban pada alamat http://localhost:5173

## Akuntabilitas dan Keberlanjutan
Proyek ini dibangun dengan mengedepankan prinsip transparansi dan keberlanjutan. Seluruh perubahan kode didokumentasikan melalui sistem Version Control (GitHub) untuk memudahkan audit teknologi, pemeliharaan sistem, serta pengembangan fitur lanjutan oleh unit kerja terkait di masa mendatang.

---
**Kontak Pengembang**
Wahyu P. Pratama
Direktorat Pemetaan Rupabumi Wilayah Laut dan Pantai
Badan Informasi Geospasial (BIG)