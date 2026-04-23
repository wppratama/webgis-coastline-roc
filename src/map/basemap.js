/**
 * src/map/basemap.js — v2
 * Perubahan:
 *  - Tambah Google Satellite & Google Hybrid (coverage Indonesia lebih baik)
 *  - Auto-fallback ke Google saat Esri tile error di zoom tinggi
 *  - Update panel Basemap di sidebar (4 opsi)
 */

import L from 'leaflet';

// ── Definisi semua basemap ───────────────────────────────
const BASEMAPS = {
  satellite: {
    label: 'Esri Satellite',
    layer: L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 19, maxNativeZoom: 17, attribution: '© Esri World Imagery' }
    ),
  },
  google_sat: {
    label: 'Google Satellite',
    layer: L.tileLayer(
      'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      { maxZoom: 20, attribution: '© Google Maps' }
    ),
  },
  google_hybrid: {
    label: 'Google Hybrid',
    layer: L.tileLayer(
      'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
      { maxZoom: 20, attribution: '© Google Maps' }
    ),
  },
  osm: {
    label: 'OpenStreetMap',
    layer: L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { maxZoom: 19, attribution: '© OpenStreetMap contributors' }
    ),
  },
};

// Label overlay CartoDB (nama wilayah di atas satelit)
const LABEL_OVERLAY = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png',
  { maxZoom: 20, attribution: '© CartoDB', opacity: 0.85 }
);

let _activeKey = 'google_sat';   // default: Google Satellite
let _map       = null;
let _errorCount = 0;             // hitung error Esri berturut-turut

export function setupBasemap(map) {
  _map = map;

  // Aktifkan basemap default
  BASEMAPS[_activeKey].layer.addTo(map);
  LABEL_OVERLAY.addTo(map);

  // Auto-fallback: jika Esri error di zoom > 13, switch ke Google
  BASEMAPS.satellite.layer.on('tileerror', () => {
    _errorCount++;
    if (_errorCount >= 3 && _activeKey === 'satellite') {
      console.warn('Esri tile error — switching to Google Satellite');
      _switchBasemap(map, 'google_sat');
      _syncRadio('google_sat');
      _errorCount = 0;
    }
  });
  BASEMAPS.satellite.layer.on('tileload', () => { _errorCount = 0; });

  // ── Update panel Basemap di sidebar ──────────────────
  _rebuildBasemapPanel();

  // ── Update chip label ────────────────────────────────
  _updateChip(_activeKey);
}

// ── Ganti basemap ────────────────────────────────────────
function _switchBasemap(map, key) {
  Object.values(BASEMAPS).forEach(b => {
    if (map.hasLayer(b.layer)) map.removeLayer(b.layer);
  });
  BASEMAPS[key].layer.addTo(map);
  _activeKey = key;

  // Label overlay hanya untuk basemap satelit
  const isSat = ['satellite', 'google_sat', 'google_hybrid'].includes(key);
  if (isSat && !map.hasLayer(LABEL_OVERLAY)) map.addLayer(LABEL_OVERLAY);
  if (!isSat && map.hasLayer(LABEL_OVERLAY)) map.removeLayer(LABEL_OVERLAY);

  _updateChip(key);
}

function _syncRadio(key) {
  const radio = document.querySelector(`input[name="basemap"][value="${key}"]`);
  if (radio) radio.checked = true;
}

function _updateChip(key) {
  const chip = document.getElementById('chip-basemap');
  if (chip) chip.textContent = `Basemap: ${BASEMAPS[key]?.label ?? key}`;
}

// ── Rebuild panel Basemap di sidebar ─────────────────────
// Mengganti isi panel-body dari panel Basemap dengan 4 opsi
function _rebuildBasemapPanel() {
  // Cari panel-body dari panel Basemap
  // Identifikasi: panel yang berisi input[name="basemap"]
  const existingRadio = document.querySelector('input[name="basemap"]');
  const panelBody     = existingRadio?.closest('.panel-body');
  if (!panelBody) return;

  panelBody.innerHTML = Object.entries(BASEMAPS).map(([key, { label }]) => `
    <label class="basemap-row">
      <input class="basemap-radio" type="radio" name="basemap" value="${key}"
             ${key === _activeKey ? 'checked' : ''}>
      <span class="basemap-label">${label}</span>
    </label>
  `).join('');

  // Event listener untuk setiap radio
  panelBody.querySelectorAll('input[name="basemap"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === _activeKey) return;
      _switchBasemap(_map, radio.value);
    });
  });
}

export function getActiveBasemap() {
  return BASEMAPS[_activeKey]?.layer;
}