/**
 * src/layers/upload.js
 * Upload GeoJSON tambahan oleh user — support multiple files.
 * Ekstrak dari main.js lama, dibungkus export function.
 */

import L from 'leaflet';
import { showToast } from '../utils/toast.js';

const uploadedLayers = [];

function generateId() {
  return 'upload_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
}

function removeLayer(layerId, map) {
  const idx = uploadedLayers.findIndex(i => i.id === layerId);
  if (idx === -1) return;
  const item = uploadedLayers[idx];
  map.removeLayer(item.layer);
  item.controlRow?.remove();
  uploadedLayers.splice(idx, 1);
  showToast(`🗑 ${item.filename} dihapus`, '#ff6b6b');
}

function addToggleRow(layerId, filename, layer, map) {
  const panel     = document.getElementById('panel-layer-data');
  const panelBody = panel?.querySelector('.panel-body');
  if (!panelBody) return;

  const row = document.createElement('div');
  row.className = 'layer-row';
  row.setAttribute('data-layer-id', layerId);
  row.innerHTML = `
    <div style="display:flex;align-items:center;gap:9px;flex:1;">
      <div class="layer-status" style="background:#00c9a7;"></div>
      <div class="layer-swatch" style="background:#ffaa33;"></div>
      <span class="layer-name" title="${filename}">${filename}</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <label class="tog">
        <input type="checkbox" checked>
        <span class="tog-track"></span>
      </label>
      <button class="btn-delete-upload" title="Hapus layer"
        style="background:none;border:none;cursor:pointer;color:var(--text-3);padding:4px;border-radius:4px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>`;

  row.querySelector('input').addEventListener('change', e => {
    e.target.checked ? map.addLayer(layer) : map.removeLayer(layer);
  });
  row.querySelector('.btn-delete-upload').addEventListener('click', () => removeLayer(layerId, map));

  panelBody.appendChild(row);
  uploadedLayers.push({ id: layerId, layer, controlRow: row, filename });
}

function loadGeoJSON(file, map) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const geojson = JSON.parse(e.target.result);
        if (!['FeatureCollection', 'Feature'].includes(geojson.type)) {
          throw new Error('Bukan FeatureCollection atau Feature');
        }

        const layer = L.geoJSON(geojson, {
          style: { color: '#ffaa33', weight: 3, opacity: 0.8 },
          onEachFeature: (feature, layer) => {
            const props   = feature.properties ?? {};
            const entries = Object.entries(props);
            const content = entries.length === 0
              ? 'Tidak ada atribut'
              : `<div style="font-family:sans-serif;padding:5px;color:#fff;">
                   <h4 style="margin:0 0 5px;color:#ffaa33;border-bottom:1px solid #444;padding-bottom:3px;">
                     Informasi Data
                   </h4>
                   ${entries.map(([k, v]) => `<strong style="color:#fff;">${k}:</strong> ${v}`).join('<br>')}
                 </div>`;
            layer.bindPopup(content);
            layer.on({
              mouseover(e) { this.setStyle({ weight: 5, color: '#fff', fillOpacity: 0.5 }); this.bringToFront(); },
              mouseout(e)  { this.setStyle({ weight: 3, color: '#ffaa33', fillOpacity: 0.2 }); },
            });
          },
        }).addTo(map);

        let name = file.name.replace(/\.(geojson|json)$/i, '');
        if (name.length > 25) name = name.slice(0, 22) + '...';
        addToggleRow(generateId(), name, layer, map);
        resolve(name);
      } catch (err) { reject(err); }
    };
    reader.onerror = () => reject(new Error('Gagal membaca file'));
    reader.readAsText(file);
  });
}

export function setupUpload(map) {
  const fileInput  = document.getElementById('file-upload');
  const btnBuka    = [...document.querySelectorAll('.btn-solid')]
                       .find(b => b.textContent.includes('Buka Data'));

  if (!fileInput) return;
  fileInput.setAttribute('multiple', 'multiple');

  btnBuka?.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', async e => {
    const files = [...e.target.files];
    if (!files.length) return;

    let ok = 0, fail = 0;
    for (const file of files) {
      if (/\.(geojson|json)$/i.test(file.name)) {
        try   { await loadGeoJSON(file, map); ok++; }
        catch (err) { showToast(`❌ ${file.name}: ${err.message}`, '#ff4d4d'); fail++; }
      } else {
        showToast(`⚠️ ${file.name} bukan .geojson/.json`, '#f5a623'); fail++;
      }
    }
    if (ok > 0) showToast(`✅ ${ok} file berhasil dimuat`, '#00c9a7');
    fileInput.value = '';
  });
}