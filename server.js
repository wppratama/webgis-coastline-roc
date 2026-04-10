import Database from 'better-sqlite3';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

// 1. Arahkan ke database yang BARU dan sudah EPSG:4326
const db = new Database('./public/data_pantai_web.gpkg');

// 2. Jalur API untuk Garis Pantai
app.get('/api/shorelines', (req, res) => {
    try {
        const rows = db.prepare('SELECT *, st_asgeojson(geom) as geometry FROM shorelines_annual').all();
        const geojson = {
            type: "FeatureCollection",
            features: rows.map(row => ({
                type: "Feature",
                geometry: JSON.parse(row.geometry),
                properties: { ...row, geometry: null, geom: null }
            }))
        };
        res.json(geojson);
    } catch (error) { res.status(500).json({ error: error.message }); }
});

// 3. Jalur API untuk Titik Laju Perubahan (Hotspots/Rates)
app.get('/api/rates', (req, res) => {
    try {
        const rows = db.prepare('SELECT *, st_asgeojson(geom) as geometry FROM rates_of_change').all();
        const geojson = {
            type: "FeatureCollection",
            features: rows.map(row => ({
                type: "Feature",
                geometry: JSON.parse(row.geometry),
                properties: { ...row, geometry: null, geom: null }
            }))
        };
        res.json(geojson);
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.listen(3000, () => {
    console.log('Server Database Aktif! Menggunakan: data_pantai_web.gpkg');
});