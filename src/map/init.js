/**
 * src/map/init.js — v2
 * Perubahan:
 *  - maxZoom: 16 (cegah zoom ke area basemap kosong)
 *  - minZoom: 4
 *  - Tambah maxBounds Indonesia agar peta tidak geser terlalu jauh
 */

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function initMap(containerId, opts = {}) {
  const map = L.map(containerId, {
    zoomControl:        false,
    attributionControl: false,
    center: opts.center ?? [-2.5, 118.0],
    zoom:   opts.zoom   ?? 5,
    minZoom: 4,
    maxZoom: 18,   // ← Esri & Google masih bagus sampai sini untuk Indonesia

    // Batasi pan ke sekitar Indonesia + buffer
    maxBounds: L.latLngBounds(
      L.latLng(-15, 90),   // SW — bawah kiri
      L.latLng(12,  145)   // NE — atas kanan
    ),
    maxBoundsViscosity: 0.85,  // 0=bebas, 1=hard lock
  });

  L.control.attribution({
    position: 'bottomright',
    prefix:   false,
  }).addTo(map);

  _createPane(map, 'lapisGaris', 400);
  _createPane(map, 'lapisTitik', 600);

  map.on('zoomend', () => {
    map.getContainer().classList.toggle('show-labels', map.getZoom() >= 8);
    _updateZoomUI(map);
  });

  _updateZoomUI(map);
  map.getContainer().classList.toggle('show-labels', map.getZoom() >= 8);

  return map;
}

function _createPane(map, name, zIndex) {
  if (!map.getPane(name)) {
    map.createPane(name);
    map.getPane(name).style.zIndex = String(zIndex);
  }
}

function _updateZoomUI(map) {
  const el = document.getElementById('zoom-level');
  if (el) el.textContent = `zoom ${map.getZoom()}`;
}