/**
 * src/map/basemap.js
 * Mengelola tile basemap (satellite / OSM) dan chip label di peta.
 */

import L from 'leaflet';

const LAYERS = {
  satellite: L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 19, attribution: '© Esri World Imagery' }
  ),
  osm: L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { maxZoom: 19, attribution: '© OpenStreetMap contributors' }
  ),
};

// Label overlay (nama kota, jalan) di atas satellite
const LABEL_OVERLAY = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png',
  { maxZoom: 19, attribution: '© CartoDB', pane: 'shadowPane', opacity: 0.8 }
);

let _activeKey = 'satellite';

export function setupBasemap(map) {
  // Aktifkan basemap default (satellite)
  LAYERS.satellite.addTo(map);
  LABEL_OVERLAY.addTo(map);   // label nama wilayah di atas satelit

  // Radio button handler
  document.querySelectorAll('input[name="basemap"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === _activeKey) return;

      // Hapus basemap lama
      Object.values(LAYERS).forEach(l => map.removeLayer(l));

      // Tambah basemap baru
      LAYERS[radio.value].addTo(map);
      _activeKey = radio.value;

      // Label overlay hanya untuk satellite
      if (radio.value === 'satellite') {
        LABEL_OVERLAY.addTo(map);
      } else {
        map.removeLayer(LABEL_OVERLAY);
      }

      // Update chip di peta
      const chip = document.getElementById('chip-basemap');
      if (chip) {
        chip.textContent = radio.value === 'satellite'
          ? 'Basemap: Satellite Imagery'
          : 'Basemap: Default Map';
      }
    });
  });
}

/** Kembalikan layer aktif saat ini (untuk keperluan lain) */
export function getActiveBasemap() {
  return LAYERS[_activeKey];
}