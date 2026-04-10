import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ============================================================
// 1. INISIALISASI PETA
// ============================================================
const map = L.map('map', {
  zoomControl: false,
  attributionControl: false,
}).setView([-2.5, 118.0], 5);

// Attribution custom di pojok kanan bawah (di atas scale bar)
L.control.attribution({
  position: 'bottomright',
  prefix: false,
}).addTo(map);

// ============================================================
// 2. PANE (Z-INDEX LAYER)
// ============================================================
map.createPane('lapisGaris');
map.getPane('lapisGaris').style.zIndex = 400;

map.createPane('lapisTitik');
map.getPane('lapisTitik').style.zIndex = 600;

// ============================================================
// 3. BASEMAP
// ============================================================
const osmLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  { maxZoom: 19, attribution: '© OpenStreetMap' }
);

const satelliteLayer = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { maxZoom: 19, attribution: '© Esri World Imagery' }
);

satelliteLayer.addTo(map);

// ============================================================
// 4. LAYER GROUP
// ============================================================
const shorelinesGroup = L.layerGroup().addTo(map);
const ratesGroup = L.layerGroup();

// ============================================================
// 5. HELPER FUNCTIONS
// ============================================================
function getWarnaTahun(tahun) {
  const t = parseInt(tahun);
  if (isNaN(t)) return '#ffffff';
  const hue = Math.max(0, Math.min(280, (t - 1984) * 7));
  return `hsl(${hue}, 100%, 55%)`;
}

function formatLaju(val) {
  return Number(val).toFixed(2);
}

// Update koordinat di UI topbar
function updateCoords(lat, lng) {
  const tooDeg = (val, pos, neg) => {
    const abs = Math.abs(val);
    const deg = Math.floor(abs);
    const minFull = (abs - deg) * 60;
    const min = Math.floor(minFull);
    const sec = Math.floor((minFull - min) * 60);
    return `${deg}°${min}'${sec}" ${val >= 0 ? pos : neg}`;
  };
  const elLat = document.getElementById('coord-lat');
  const elLng = document.getElementById('coord-lng');
  if (elLat) elLat.textContent = tooDeg(lat, 'LU', 'LS');
  if (elLng) elLng.textContent = tooDeg(lng, 'BT', 'BB');
}

// Update zoom level di UI
function updateZoom() {
  const el = document.getElementById('zoom-level');
  if (el) el.textContent = `zoom ${map.getZoom()}`;
}

// ============================================================
// 6. EVENT MAP → UPDATE UI
// ============================================================
map.on('mousemove', (e) => {
  updateCoords(e.latlng.lat, e.latlng.lng);
});

map.on('zoomend', updateZoom);
updateZoom();

// ============================================================
// 7. LOADING STATE HELPER
// ============================================================
function setLayerStatus(id, state) {
  // state: 'loading' | 'done' | 'error'
  const indicator = document.getElementById(id);
  if (!indicator) return;
  const colors = { loading: '#f5a623', done: '#00c9a7', error: '#ff4d4d' };
  indicator.style.background = colors[state] || '#4d6a94';
}

// ============================================================
// 8. MEMUAT DATA: GARIS PANTAI
// ============================================================
setLayerStatus('status-shorelines', 'loading');

fetch('gp.geojson')
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then((data) => {
    L.geoJSON(data, {
      pane: 'lapisGaris',
      style: (feature) => ({
        color: getWarnaTahun(feature.properties.year),
        weight: 2,
        opacity: 0.9,
      }),
      onEachFeature: (feature, layer) => {
        const tahun = feature.properties.year ?? '-';
        const warna = getWarnaTahun(tahun);

        layer.bindTooltip(
          `<div class="gis-tooltip">
            <span class="tooltip-label">Tahun</span>
            <span class="tooltip-value">${tahun}</span>
          </div>`,
          { sticky: true, direction: 'auto', className: 'gis-tooltip-wrap' }
        );

        layer.on('mouseover', function () {
          this.setStyle({ weight: 4, color: '#ffffff' });
          this.bringToFront();
        });

        layer.on('mouseout', function () {
          this.setStyle({ weight: 2, color: warna });
        });

        layer.bindPopup(
          `<div class="gis-popup">
            <div class="popup-header" style="border-color:${warna}">
              <span class="popup-icon">🌊</span>
              <span class="popup-title">Garis Pantai</span>
            </div>
            <table class="popup-table">
              <tr><td class="pt-label">Tahun</td><td class="pt-val">${tahun}</td></tr>
            </table>
          </div>`
        );
      },
    }).addTo(shorelinesGroup);

    setLayerStatus('status-shorelines', 'done');
    updateStatCard('stat-shoreline-count', data.features?.length ?? 0);
  })
  .catch((err) => {
    console.error('Gagal memuat shorelines:', err);
    setLayerStatus('status-shorelines', 'error');
    showMapError('Gagal memuat data garis pantai. Pastikan server.py berjalan di port 5000.');
  });

// ============================================================
// 9. MEMUAT DATA: TITIK LAJU PERUBAHAN
// ============================================================
setLayerStatus('status-rates', 'loading');

fetch('roc.geojson')
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then((data) => {
    let countErosi = 0;
    let countAkresi = 0;

    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        const laju = feature.properties.rate_time;
        let warnaTitik = '#8ba3c7';

        if (laju < 0) {
          warnaTitik = '#ff4d4d';
          countErosi++;
        } else if (laju > 0) {
          warnaTitik = '#00c9a7';
          countAkresi++;
        }

        return L.circleMarker(latlng, {
          pane: 'lapisTitik',
          radius: 4,
          fillColor: warnaTitik,
          color: 'rgba(255,255,255,0.6)',
          weight: 1,
          opacity: 1,
          fillOpacity: 1,
        });
      },
      onEachFeature: (feature, layer) => {
        const laju = feature.properties.rate_time;
        const isErosi = laju < 0;
        const warna = isErosi ? '#ff4d4d' : '#00c9a7';
        const status = isErosi ? 'Abrasi (Erosi)' : 'Akresi';
        const badge = isErosi
          ? `<span class="popup-badge badge-erosi">Kritis</span>`
          : `<span class="popup-badge badge-akresi">Aman</span>`;

        layer.bindTooltip(
          `<div class="gis-tooltip">
            <span class="tooltip-label">${isErosi ? 'Erosi' : 'Akresi'}</span>
            <span class="tooltip-value" style="color:${warna}">${formatLaju(laju)} m/th</span>
          </div>`,
          { sticky: true, direction: 'auto', className: 'gis-tooltip-wrap' }
        );

        layer.bindPopup(
          `<div class="gis-popup">
            <div class="popup-header" style="border-color:${warna}">
              <span class="popup-icon">${isErosi ? '⚠️' : '✅'}</span>
              <span class="popup-title">Titik Perubahan</span>
              ${badge}
            </div>
            <table class="popup-table">
              <tr><td class="pt-label">Status</td><td class="pt-val">${status}</td></tr>
              <tr><td class="pt-label">Laju Perubahan</td><td class="pt-val" style="color:${warna};font-weight:600;">${formatLaju(laju)} m/tahun</td></tr>
            </table>
          </div>`
        );
      },
    }).addTo(ratesGroup);

    setLayerStatus('status-rates', 'done');
    updateStatCard('stat-erosi-count', countErosi);
    updateStatCard('stat-akresi-count', countAkresi);
  })
  .catch((err) => {
    console.error('Gagal memuat rates:', err);
    setLayerStatus('status-rates', 'error');
    showMapError('Gagal memuat data laju perubahan. Pastikan server.py berjalan di port 5000.');
  });

// ============================================================
// 10. KONTROL LAYER DARI SIDEBAR (TOGGLE)
// ============================================================
const layerMap = {
  'toggle-shorelines': shorelinesGroup,
  'toggle-rates': ratesGroup,
  'toggle-osm': osmLayer,
  'toggle-satellite': satelliteLayer,
};

Object.entries(layerMap).forEach(([id, layer]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('change', () => {
    if (el.checked) {
      map.addLayer(layer);
    } else {
      map.removeLayer(layer);
    }
  });
});

// Basemap radio (hanya satu aktif)
const basemapRadios = document.querySelectorAll('input[name="basemap"]');
basemapRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'osm') {
      map.removeLayer(satelliteLayer);
      map.addLayer(osmLayer);
    } else {
      map.removeLayer(osmLayer);
      map.addLayer(satelliteLayer);
    }
    const chipEl = document.getElementById('chip-basemap');
    if (chipEl) chipEl.textContent = radio.value === 'osm' ? 'Basemap: OpenStreetMap' : 'Basemap: Satelit Esri';
  });
});

// ============================================================
// 11. OPACITY SLIDER
// ============================================================
const opacitySlider = document.getElementById('opacity-slider');
const opacityVal = document.getElementById('opacity-val');

if (opacitySlider) {
  opacitySlider.addEventListener('input', () => {
    const val = parseInt(opacitySlider.value) / 100;
    if (opacityVal) opacityVal.textContent = opacitySlider.value + '%';

    // Terapkan ke semua layer garis pantai
    shorelinesGroup.eachLayer((layer) => {
      if (layer.setStyle) layer.setStyle({ opacity: val });
    });
  });
}

// ============================================================
// 12. TOOLBAR BUTTONS
// ============================================================
const btnZoomIn = document.getElementById('btn-zoom-in');
const btnZoomOut = document.getElementById('btn-zoom-out');
const btnLocate = document.getElementById('btn-locate');
const btnFullscreen = document.getElementById('btn-fullscreen');
const btnFitBounds = document.getElementById('btn-fitbounds');

if (btnZoomIn) btnZoomIn.addEventListener('click', () => map.zoomIn());
if (btnZoomOut) btnZoomOut.addEventListener('click', () => map.zoomOut());

if (btnLocate) {
  btnLocate.addEventListener('click', () => {
    map.locate({ setView: true, maxZoom: 12 });
  });
  map.on('locationerror', () => {
    showMapError('Lokasi tidak dapat dideteksi.');
  });
}

if (btnFullscreen) {
  btnFullscreen.addEventListener('click', () => {
    const el = document.getElementById('map');
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });
}

if (btnFitBounds) {
  btnFitBounds.addEventListener('click', () => {
    map.setView([-2.5, 118.0], 5);
  });
}

// ============================================================
// 13. SIDEBAR PANEL COLLAPSE (fallback jika belum di HTML)
// ============================================================
document.querySelectorAll('.panel-header').forEach((header) => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const chevron = header.querySelector('.panel-chevron');
    if (!body) return;
    const isHidden = body.style.display === 'none';
    body.style.display = isHidden ? '' : 'none';
    if (chevron) chevron.classList.toggle('open', isHidden);
  });
});

// ============================================================
// 14. HELPER UI
// ============================================================
function updateStatCard(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = Number(value).toLocaleString('id-ID');
}

function showMapError(msg) {
  const existing = document.getElementById('map-error-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'map-error-toast';
  toast.style.cssText = `
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: #1a1a2e;
    border: 1px solid rgba(255,77,77,0.4);
    color: #ff6b6b;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    padding: 10px 18px;
    border-radius: 8px;
    z-index: 9999;
    pointer-events: none;
    max-width: 400px;
    text-align: center;
  `;
  toast.textContent = `⚠ ${msg}`;
  document.getElementById('map').appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}