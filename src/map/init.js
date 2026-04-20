/**
 * src/map/init.js
 * Inisialisasi objek L.map dengan konfigurasi standar project.
 * Dipisah agar mudah di-mock saat testing.
 */

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * @param {string} containerId  — id elemen HTML tempat peta dirender
 * @param {object} opts         — override default (center, zoom, dsb.)
 * @returns {L.Map}
 */
export function initMap(containerId, opts = {}) {
  const map = L.map(containerId, {
    zoomControl:        false,   // kita buat toolbar sendiri
    attributionControl: false,   // kita buat sendiri di bawah
    center: opts.center ?? [-2.5, 118.0],
    zoom:   opts.zoom   ?? 5,
    ...opts,
  });

  // Attribution kustom pojok kanan bawah
  L.control.attribution({
    position: 'bottomright',
    prefix:   false,
  }).addTo(map);

  // Pane z-index — didefinisikan di sini agar tersedia sebelum layer apapun ditambah
  _createPane(map, 'lapisGaris', 400);
  _createPane(map, 'lapisTitik', 600);

  // Label di atas semua layer (zoom >= 8)
  map.on('zoomend', () => {
    map.getContainer().classList.toggle('show-labels', map.getZoom() >= 8);
  });
  // Set saat init
  map.getContainer().classList.toggle('show-labels', map.getZoom() >= 8);

  return map;
}

function _createPane(map, name, zIndex) {
  if (!map.getPane(name)) {
    map.createPane(name);
    map.getPane(name).style.zIndex = String(zIndex);
  }
}