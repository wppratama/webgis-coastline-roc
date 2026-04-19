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

// Update zoom level di UI dan Atur Visibilitas Label
map.on('zoomend', () => {
  updateZoom();
  
  // LOGIKA BARU: Tampilkan label hanya jika zoom >= 8
  // (Anda bisa mengubah angka 8 ini. Makin besar angkanya, makin harus di-zoom agar label muncul)
  if (map.getZoom() >= 8) {
    map.getContainer().classList.add('show-labels');
  } else {
    map.getContainer().classList.remove('show-labels');
  }
});

// Panggil sekali saat peta pertama kali dimuat
updateZoom();
if (map.getZoom() >= 8) {
  map.getContainer().classList.add('show-labels');
}

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

fetch('Coastline.geojson')
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

fetch('RatesofChange.geojson')
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
        const status = isErosi ? 'Abrasi' : 'Akresi';
        const badge = isErosi
          ? `<span class="popup-badge badge-erosi">Abrasi</span>`
          : `<span class="popup-badge badge-akresi">Akresi</span>`;

        layer.bindTooltip(
          `<div class="gis-tooltip">
            <span class="tooltip-label">${isErosi ? 'Abrasi' : 'Akresi'}</span>
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
    if (chipEl) chipEl.textContent = radio.value === 'osm' ? 'Basemap: Default Map' : 'Basemap: Satellite Imagery';
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
    const chevron = header.querySelector('.ph-chev');
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

// ============================================================
// 15. FITUR UPLOAD MULTIPLE GEOJSON (BISA LEBIH DARI SATU)
// ============================================================
const fileInput = document.getElementById('file-upload');
// Izinkan multiple file
if (fileInput) fileInput.setAttribute('multiple', 'multiple');

// Cari tombol "Buka Data"
let btnBukaData = null;
const allBtns = document.querySelectorAll('.btn-solid');
for (let btn of allBtns) {
  if (btn.innerText.includes('Buka Data')) {
    btnBukaData = btn;
    break;
  }
}

// Array untuk menyimpan semua layer upload
let uploadedLayers = [];

// Generate ID unik
function generateId() {
  return 'upload_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
}

// Hapus layer berdasarkan ID
function removeUploadedLayer(layerId) {
  const index = uploadedLayers.findIndex(item => item.id === layerId);
  if (index !== -1) {
    const item = uploadedLayers[index];
    // Hapus dari peta
    if (item.layer) map.removeLayer(item.layer);
    // Hapus baris toggle dari DOM
    if (item.controlRow) item.controlRow.remove();
    // Hapus dari array
    uploadedLayers.splice(index, 1);
    showToast(`🗑 ${item.filename} dihapus`, '#ff6b6b');
  }
}

// Tambah toggle ke panel Data Upload
function addUploadedLayerToggle(layerId, filename, layer) {
  const panel = document.getElementById('panel-layer-data');
  if (!panel) {
    console.error('Panel Data Upload tidak ditemukan');
    return;
  }
  const panelBody = panel.querySelector('.panel-body');
  if (!panelBody) return;

  const row = document.createElement('div');
  row.className = 'layer-row';
  row.style.justifyContent = 'space-between';
  row.setAttribute('data-layer-id', layerId);
  row.innerHTML = `
    <div style="display: flex; align-items: center; gap: 9px; flex:1;">
      <div class="layer-status"></div>
      <div class="layer-swatch" style="background:#ffaa33;"></div>
      <span class="layer-name" title="${filename}">${filename}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label class="tog">
        <input type="checkbox" checked>
        <span class="tog-track"></span>
      </label>
      <button class="btn-delete-upload" style="background: none; border: none; cursor: pointer; color: var(--text-3); padding: 4px; border-radius: 4px;" title="Hapus layer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  `;
  panelBody.appendChild(row);

  // Event toggle
  const chk = row.querySelector('input');
  chk.addEventListener('change', (e) => {
    if (layer) {
      if (e.target.checked) map.addLayer(layer);
      else map.removeLayer(layer);
    }
  });

  // Event hapus
  const delBtn = row.querySelector('.btn-delete-upload');
  delBtn.addEventListener('click', () => {
    removeUploadedLayer(layerId);
  });

  // Simpan ke array
  uploadedLayers.push({
    id: layerId,
    layer: layer,
    controlRow: row,
    filename: filename
  });
}


// Memuat satu file GeoJSON
function loadUserGeoJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      try {
        const geojson = JSON.parse(e.target.result);
        if (geojson.type !== 'FeatureCollection' && geojson.type !== 'Feature') {
          throw new Error('File harus FeatureCollection atau Feature');
        }

        const layer = L.geoJSON(geojson, {
          pane: 'lapisGaris',
          style: { color: '#ffaa33', weight: 3, opacity: 0.8 },
          onEachFeature: function(feature, layer) {
            
            // --- 1. FITUR POPUP SAAT DIKLIK ---
            const props = feature.properties || {};
            let content = '';
            const entries = Object.entries(props);
            
           if (entries.length === 0) {
            content = 'Tidak ada atribut';
          } else {
            // Update bagian ini untuk memberi warna terang pada teks atribut
            content = `<div style="font-family: sans-serif; padding: 5px; color: #ffffff;">
                          <h4 style="margin: 0 0 5px 0; color: #ffaa33; border-bottom: 1px solid #444; padding-bottom: 3px;">
                              Informasi Data
                          </h4>
                          <div style="margin-top: 8px; color: #e0e0e0; font-size: 13px;">` + 
                              entries.map(([k, v]) => `<strong style="color: #ffffff;">${k}:</strong> ${v}`).join('<br>') + 
                          `</div>
                      </div>`;
          }

          layer.bindPopup(content, { className: 'gis-popup-wrap' });

            // --- 2. EFEK HOVER VISUAL (Tanpa Teks) ---
            layer.on({
              mouseover: function(e) {
                this.setStyle({ weight: 5, color: '#ffffff', fillOpacity: 0.5 });
                this.bringToFront();
              },
              mouseout: function(e) {
                this.setStyle({ weight: 3, color: '#ffaa33', fillOpacity: 0.2 });
              }
            });

          }
        }).addTo(map);

        // Bersihkan nama file untuk UI Sidebar
        let filename = file.name.replace(/\.(geojson|json)$/i, '');
        if (filename.length > 25) filename = filename.substring(0, 22) + '...';
        
        const layerId = generateId();
        addUploadedLayerToggle(layerId, filename, layer);
        resolve({ filename, layer });
        
      } catch (err) {
        reject(err);
      }
    };
    
    reader.onerror = () => reject(new Error('Gagal membaca file'));
    reader.readAsText(file);
  });
}

// Event untuk input file (multiple)
if (fileInput) {
  fileInput.addEventListener('change', async function(e) {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    let successCount = 0;
    let errorCount = 0;

    for (const file of files) {
      if (file.name.endsWith('.geojson') || file.name.endsWith('.json')) {
        try {
          await loadUserGeoJSON(file);
          successCount++;
        } catch (err) {
          console.error(`Gagal memuat ${file.name}:`, err);
          showToast(`❌ Gagal: ${file.name} - ${err.message}`, '#ff4d4d');
          errorCount++;
        }
      } else {
        showToast(`⚠️ ${file.name} bukan .geojson/.json`, '#f5a623');
        errorCount++;
      }
    }

    if (successCount > 0) {
      showToast(`✅ ${successCount} file berhasil dimuat`, '#00c9a7');
    }
    // Reset input agar bisa upload file yang sama lagi
    fileInput.value = '';
  });
}

// Event untuk tombol Buka Data
if (btnBukaData) {
  btnBukaData.addEventListener('click', function() {
    if (fileInput) fileInput.click();
  });
}

// Helper notifikasi toast
function showToast(msg, bgColor = '#1a1a2e') {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: ${bgColor};
    color: #fff;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 13px;
    z-index: 9999;
    font-family: 'DM Sans', sans-serif;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '1'; }, 10);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 200);
  }, 2500);
}

// ============================================================
// 16. FITUR DEBUG: MENAMPILKAN LABEL NOMOR TILE (X, Y, Z)
// ============================================================
const tileGridLayer = L.GridLayer.extend({
  createTile: function (coords) {
    // 1. Buat kanvas kosong ukuran standar tile (256x256 pixel)
    const tile = document.createElement('canvas');
    tile.width = 256;
    tile.height = 256;
    const ctx = tile.getContext('2d');

    // 2. Gambar garis batas luar (Border) warna oranye
    ctx.strokeStyle = '#ffaa33'; 
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, 256, 256);

    // 3. Tulis teks label di tengah kotak
    ctx.fillStyle = '#ffaa33';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Format label: x, y, z
    ctx.fillText(`x: ${coords.x}, y: ${coords.y}, z: ${coords.z}`, 128, 128);

    return tile;
  }
});

// Jadikan ini sebagai objek layer yang bisa dihidup-matikan
const gridDebug = new tileGridLayer();

// ============================================================
// 17. SEARCH GEOCODER (NOMINATIM - INDONESIA)
// ============================================================
const searchInput    = document.getElementById('search-input');
const searchDropdown = document.getElementById('search-dropdown');

let searchTimeout = null;
let searchMarker  = null;

function clearSearchMarker() {
  if (searchMarker) { map.removeLayer(searchMarker); searchMarker = null; }
}

function renderDropdown(items) {
  searchDropdown.innerHTML = '';

  if (!items || items.length === 0) {
    searchDropdown.innerHTML = '<div class="search-empty">Lokasi tidak ditemukan</div>';
    searchDropdown.style.display = 'block';
    return;
  }

  const typeIcon = {
    city: '🏙️', town: '🏘️', village: '🏡',
    administrative: '📍', province: '🗺️',
    island: '🏝️', bay: '🌊', river: '🏞️',
    peak: '⛰️', suburb: '🏘️',
  };

  items.forEach((item) => {
    const row  = document.createElement('div');
    row.className = 'search-item';
    const icon = typeIcon[item.type] || typeIcon[item.addresstype] || '📍';
    const name = item.name || item.display_name.split(',')[0];

    row.innerHTML = `
      <div class="search-item-icon">${icon}</div>
      <div class="search-item-text">
        <span class="search-item-name">${name}</span>
        <span class="search-item-sub">${item.display_name}</span>
      </div>
    `;

    row.addEventListener('click', () => {
      const lat = parseFloat(item.lat);
      const lon = parseFloat(item.lon);

      clearSearchMarker();

      searchMarker = L.circleMarker([lat, lon], {
        radius: 8,
        fillColor: '#1a7aff',
        color: '#ffffff',
        weight: 2,
        opacity: 1,
        fillOpacity: 1,
      }).addTo(map);

      searchMarker.bindPopup(
        `<div class="gis-popup">
          <div class="popup-header" style="border-color:#1a7aff">
            <span class="popup-icon">${icon}</span>
            <span class="popup-title">${name}</span>
          </div>
          <table class="popup-table">
            <tr><td class="pt-label">Tipe</td><td class="pt-val">${item.type ?? '-'}</td></tr>
            <tr><td class="pt-label">Koordinat</td><td class="pt-val">${lat.toFixed(5)}, ${lon.toFixed(5)}</td></tr>
          </table>
        </div>`
      ).openPopup();

      if (item.boundingbox) {
        const bb = item.boundingbox.map(Number);
        map.fitBounds([[bb[0], bb[2]], [bb[1], bb[3]]], { maxZoom: 13, animate: true });
      } else {
        map.flyTo([lat, lon], 12, { animate: true, duration: 1.2 });
      }

      searchInput.value = name;
      searchDropdown.innerHTML = '';
      searchDropdown.style.display = 'none';
    });

    searchDropdown.appendChild(row);
  });

  searchDropdown.style.display = 'block';
}

async function doSearch(query) {
  if (query.length < 4) {
    searchDropdown.innerHTML = '';
    searchDropdown.style.display = 'none';
    return;
  }

  searchDropdown.innerHTML = '<div class="search-loading">🔍 Mencari...</div>';
  searchDropdown.style.display = 'block';

  try {
    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.set('q', query);
    url.searchParams.set('format', 'jsonv2');
    url.searchParams.set('addressdetails', '1');
    url.searchParams.set('limit', '7');
    url.searchParams.set('countrycodes', 'id');
    url.searchParams.set('accept-language', 'id');

    const res  = await fetch(url.toString(), { headers: { 'Accept-Language': 'id' } });
    const data = await res.json();
    renderDropdown(data);
  } catch (err) {
    searchDropdown.innerHTML = '<div class="search-empty">⚠️ Gagal menghubungi server pencarian</div>';
    searchDropdown.style.display = 'block';
    console.error('Nominatim error:', err);
  }
}

if (searchInput) {
  // Input dengan debounce
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const q = e.target.value.trim();
    if (q.length === 0) {
      searchDropdown.innerHTML = '';
      searchDropdown.style.display = 'none';
      clearSearchMarker();
      return;
    }
    searchTimeout = setTimeout(() => doSearch(q), 600);
  });

  // Tutup saat klik di luar
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) {
      searchDropdown.innerHTML = '';
      searchDropdown.style.display = 'none';
    }
  });

  // Navigasi keyboard
  searchInput.addEventListener('keydown', (e) => {
    const items  = searchDropdown.querySelectorAll('.search-item');
    const active = searchDropdown.querySelector('.search-item.active');
    let idx = Array.from(items).indexOf(active);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (active) active.classList.remove('active');
      const next = items[Math.min(idx + 1, items.length - 1)];
      if (next) { next.classList.add('active'); next.scrollIntoView({ block: 'nearest' }); }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (active) active.classList.remove('active');
      const prev = items[Math.max(idx - 1, 0)];
      if (prev) { prev.classList.add('active'); prev.scrollIntoView({ block: 'nearest' }); }
    } else if (e.key === 'Enter') {
      if (active) active.click();
    } else if (e.key === 'Escape') {
      searchDropdown.innerHTML = '';
      searchDropdown.style.display = 'none';
      searchInput.blur();
    }
  });
}