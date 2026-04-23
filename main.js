/**
 * main.js — Entry point WebGIS Dinamika Garis Pantai Indonesia
 * Versi final: TileLoader + FilterPanel terhubung
 */

import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet/dist/leaflet.css';

import { TileLoader } from './src/layers/tileLoader.js';
import { setupUpload } from './src/layers/upload.js';
import { setupBasemap } from './src/map/basemap.js';
import { initMap } from './src/map/init.js';
import { setupDisclaimer } from './src/ui/disclaimer.js';
import { FilterPanel } from './src/ui/filterPanel.js';
import { setupSearch } from './src/ui/search.js';
import { setupSidebar } from './src/ui/sidebar.js';
import { setupToolbar } from './src/ui/toolbar.js';


// ── 1. Peta ────────────────────────────────────────────────
const map = initMap('map', { center: [-2.5, 118.0], zoom: 5 });

// ── 2. Basemap ─────────────────────────────────────────────
setupBasemap(map);
setupSearch(map);

// ── 3. Tile loader ─────────────────────────────────────────
const tileLoader = new TileLoader(map, { yearMin: 1985, yearMax: 2025 });
await tileLoader.init();

const { shorelinesGroup, ratesGroup } = tileLoader;

// ── 4. Filter panel ────────────────────────────────────────
// Tambahkan <div id="filter-panel-wrap"></div> di sidebar HTML
// setelah panel Layer Data dan sebelum panel Basemap
const filterWrap = document.getElementById('filter-panel-wrap');
const filterPanel = new FilterPanel({
  container:      filterWrap,
  yearMin:        1985,
  yearMax:        2025,
  onFilterChange: (filter) => {
    // Teruskan ke TileLoader — dia yang urus opacity tiap layer
    tileLoader.applyFilter({
      yearMin:    filter.yearMin,
      yearMax:    filter.yearMax,
      showAbrasi: filter.showAbrasi,
      showAkresi: filter.showAkresi,
      showStabil: filter.showStabil,
      minRate:    parseInt(document.getElementById('fp-rate')?.value ?? 0),
    });
  },
});

// ── 5. Sidebar (toggle layer, opacity) ────────────────────
setupSidebar({
  map,
  shorelinesGroup,
  ratesGroup,
  onOpacityChange:    (val) => tileLoader.setShorelinesOpacity(val),
  onToggleShorelines: (on)  => on ? map.addLayer(shorelinesGroup)
                                  : map.removeLayer(shorelinesGroup),
  onToggleRates:      (on)  => on ? map.addLayer(ratesGroup)
                                  : map.removeLayer(ratesGroup),
});

// ── 6. Toolbar ─────────────────────────────────────────────
setupToolbar(map);

// ── 7. Search geocoder ─────────────────────────────────────
setupSearch(map);

// ── 8. Upload GeoJSON tambahan ─────────────────────────────
setupUpload(map);

// ── 9. Koordinat & zoom UI ─────────────────────────────────
map.on('mousemove', ({ latlng: { lat, lng } }) => {
  const fmt = (v, pos, neg) => {
    const a = Math.abs(v), d = Math.floor(a);
    const m = Math.floor((a-d)*60), s = Math.floor(((a-d)*60-m)*60);
    return `${d}°${m}'${s}" ${v >= 0 ? pos : neg}`;
  };
  const elLat = document.getElementById('coord-lat');
  const elLng = document.getElementById('coord-lng');
  if (elLat) elLat.textContent = fmt(lat, 'LU', 'LS');
  if (elLng) elLng.textContent = fmt(lng, 'BT', 'BB');
});

map.on('zoomend', () => {
  const el = document.getElementById('zoom-level');
  if (el) el.textContent = `zoom ${map.getZoom()}`;
  map.getContainer().classList.toggle('show-labels', map.getZoom() >= 8);
});

// ── 10. Disclaimer Text ─────────────────────────────────
setupDisclaimer();
document.getElementById('btn-reopen-disclaimer')
  ?.addEventListener('click', () => {
    // Hapus flag localStorage agar popup muncul lagi
    localStorage.removeItem('webgis_disclaimer_accepted');
    setupDisclaimer();
  });