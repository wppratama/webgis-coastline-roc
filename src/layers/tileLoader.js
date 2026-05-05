/**
 * src/layers/tileLoader.js — STABLE
 * ──────────────────────────────────────────────────────────
 * Arsitektur: load-sekali, cache selamanya (tidak ada culling).
 * Fitur:
 * ✔ Canvas renderer
 * ✔ Marker clustering (disable di zoom 16)
 * ✔ Temporal thinning dinamis (Zoom 16+ = Full, < 16 = 1 Garis Terbaru)
 * ✔ FilterPanel integration
 * ✔ Viewport-based Stats (Aktif hanya di Zoom >= 14, menghitung area di layar saja)
 */

import L from 'leaflet';
import 'leaflet.markercluster';
import { setLayerStatus, updateStatCard } from '../ui/stats.js';
import { getWarnaTahun } from '../utils/color.js';
import { formatLaju } from '../utils/format.js';

const BASE_URL = './tiles';

// Certainty → style garis
const CERT_STYLE = {
  'good':             { dashArray: null,  weight: 1,   opacity: 0.9  },
  'insufficient data':{ dashArray: '8 5', weight: 0.5, opacity: 0.7  },
  'unstable data':    { dashArray: '2 5', weight: 0.5, opacity: 0.55 },
};
const getCertStyle = c => CERT_STYLE[c] ?? CERT_STYLE['good'];

export class TileLoader {
  constructor(map, options = {}) {
    this.map  = map;
    this.opts = {
      yearMin: options.yearMin ?? 1985,
      yearMax: options.yearMax ?? 2025,
    };

    this._ensurePanes();
    this._canvas = L.canvas({ padding: 0.5, tolerance: 2 });

    this.shorelinesGroup = L.layerGroup().addTo(map);
    this.clusterGroup    = this._buildClusterGroup();
    this.ratesGroup      = this.clusterGroup;

    this._manifest     = null;
    this._loadedTiles  = new Set();
    this._pendingTiles = new Set();

    this._shorelineLayers = [];   // { layer, year, certainty }
    this._rateLayers      = [];   // { layer, rate, isErosi, isAkresi, isStabil }

    this._filter = {
      yearMin:          options.yearMin ?? 1985,
      yearMax:          options.yearMax ?? 2025,
      showAbrasi:       true,
      showAkresi:       true,
      showStabil:       true,
      minRate:          0,
      certGood:         true,
      certInsufficient: true,
      certUnstable:     true,
    };

    this._isFlexZoomActive = false; 
  }

  // ── PUBLIC API ────────────────────────────────────────────

  async init() {
    this._manifest = await this._fetchManifest();
    if (!this._manifest) return;

    // Trigger map events
    this.map.on('moveend', () => {
      clearTimeout(this._moveTimer);
      this._moveTimer = setTimeout(() => {
        this._updateVisibleTiles();
        this._calculateViewportStats();
      }, 150);
    });

    this.map.on('zoomend', () => {
      clearTimeout(this._zoomTimer);
      this._zoomTimer = setTimeout(() => {
        this._applyFilterToLoaded();
        this._calculateViewportStats();
      }, 100);
    });

    await this._updateVisibleTiles();
    this._calculateViewportStats();
  }

  applyFilter(filter) {
    this._filter = { ...this._filter, ...filter };
    this._scheduleApplyFilter();
  }

  _scheduleApplyFilter() {
    clearTimeout(this._applyFilterTimer);
    this._applyFilterTimer = setTimeout(() => this._applyFilterToLoaded(), 40);
  }

  setShorelinesOpacity(opacity) {
    this._shorelineLayers.forEach(({ layer }) => {
      layer.setStyle?.({ opacity });
    });
  }

  setShorelinesOpacity(opacity) {
    this._shorelineLayers.forEach(({ layer }) => {
      layer.setStyle?.({ opacity });
    });
  }

  // TAMBAHKAN FUNGSI INI:
  setFlexZoom(isActive) {
    this._isFlexZoomActive = isActive;
    this._applyFilterToLoaded(); // Panggil ulang filter agar UI langsung update
  }

  // ── TILE MANAGEMENT ──────────────────────────────────────

  async _updateVisibleTiles() {
    if (!this._manifest) return;

    if (this.map.getZoom() < 6) return; 

    const bounds = this.map.getBounds();

    const toLoad = this._manifest.tiles.filter(id => {
      if (this._loadedTiles.has(id) || this._pendingTiles.has(id)) return false;
      const bb = this._manifest.tile_bounds[String(id)];
      if (!bb) return false;
      const [minx, miny, maxx, maxy] = bb;
      return bounds.getWest() <= maxx && bounds.getEast() >= minx &&
             bounds.getSouth() <= maxy && bounds.getNorth() >= miny;
    });

    if (!toLoad.length) return;

    setLayerStatus('status-shorelines', 'loading');
    setLayerStatus('status-rates',      'loading');
    toLoad.forEach(id => this._pendingTiles.add(id));

    const chunks = [];
    for (let i = 0; i < toLoad.length; i += 2) {
      chunks.push(toLoad.slice(i, i + 2));
    }
    for (const chunk of chunks) {
      await Promise.allSettled(chunk.map(id => this._loadOneTile(id)));
    }
  }

  async _loadOneTile(tileId) {
    const tid = String(tileId);
    try {
      const [slRes, rtRes] = await Promise.allSettled([
        fetch(`${BASE_URL}/shorelines/shorelines_tile_${tid}.geojson`),
        fetch(`${BASE_URL}/rates/rates_tile_${tid}.geojson`),
      ]);

      // 1. Buat variabel untuk menampung data GeoJSON
      let slData = null;
      let rtData = null;

      if (slRes.status === 'fulfilled' && slRes.value.ok) {
        slData = await slRes.value.json();     // Simpan ke variabel
        this._renderShorelines(slData);        // Render ke peta
      }
      
      if (rtRes.status === 'fulfilled' && rtRes.value.ok) {
        rtData = await rtRes.value.json();     // Simpan ke variabel
        this._renderRates(rtData);             // Render ke peta
      }

      // 2. ---> TAMBAHKAN KODE LABEL DI SINI <---
      if (this.onTileLoaded) {
        // Kirim data yang sudah disimpan tadi ke LabelManager
        this.onTileLoaded(slData, rtData);
      }

      this._loadedTiles.add(tileId);
      setLayerStatus('status-shorelines', 'done');
      setLayerStatus('status-rates',      'done');
      
      // Update stats setiap ada tile baru yang berhasil di-render
      this._calculateViewportStats();

    } catch (err) {
      console.error(`Tile ${tileId} gagal:`, err);
      setLayerStatus('status-shorelines', 'error');
    } finally {
      this._pendingTiles.delete(tileId);
    }
  }

  async _fetchManifest() {
    try {
      const res = await fetch(`${BASE_URL}/shorelines/shorelines_manifest.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const m = await res.json();
      m.tiles = m.tiles.map(String);
      const nb = {};
      Object.entries(m.tile_bounds ?? {}).forEach(([k, v]) => { nb[String(k)] = v; });
      m.tile_bounds = nb;
      return m;
    } catch (err) {
      console.error('Manifest gagal:', err);
      setLayerStatus('status-shorelines', 'error');
      return null;
    }
  }

  // ── RENDER: SHORELINES ───────────────────────────────────

  _renderShorelines(data) {
    const zoom = this.map.getZoom();

    L.geoJSON(data, {
      pane:     'lapisGaris',
      renderer: this._canvas,
      style: feature => {
        const year      = feature.properties?.year ?? null;
        const certainty = feature.properties?.certainty ?? 'good';
        const cs        = getCertStyle(certainty);
        const isZoom16  = zoom >= 16;
        const isLatest  = parseInt(year) === parseInt(this._filter.yearMax);
        const visible   = this._visibleYear(year) && (this._isFlexZoomActive || isZoom16 || isLatest);

        return {
          color:     getWarnaTahun(year),
          weight:    cs.weight,
          opacity:   visible ? cs.opacity : 0,
          dashArray: cs.dashArray,
        };
      },
      onEachFeature: (feature, layer) => {
        const tahun     = feature.properties?.year      ?? '-';
        const certainty = feature.properties?.certainty ?? 'good';
        const warna     = getWarnaTahun(tahun);
        const cs        = getCertStyle(certainty);

        const certLabel = {
          'good':             '✔ Good',
          'insufficient data':'⚠ Insufficient Data',
          'unstable data':    '✘ Unstable Data',
        }[certainty] ?? certainty;

        this._shorelineLayers.push({ layer, year: tahun, certainty });

        // Tooltip hanya di-bind jika garis ini memang visible saat pertama render
        const isVisibleNow = this._visibleYear(tahun) &&
          (this._isFlexZoomActive || this.map.getZoom() >= 16 ||
           parseInt(tahun) === parseInt(this._filter.yearMax));

        if (isVisibleNow) {
        layer.bindTooltip(
          `<div class="gis-tooltip">
             <span class="tooltip-label">Tahun · ${certLabel}</span>
             <span class="tooltip-value">${tahun}</span>
           </div>`,
          { sticky: true, direction: 'auto', className: 'gis-tooltip-wrap' }
        );
        }

        layer.on('mouseover', function () {
          if (this.options.opacity === 0) return;

          this.setStyle({ weight: cs.weight + 2, color: '#ffffff' });
          this.bringToFront();
        });
        layer.on('mouseout', function () {
          this.setStyle({ weight: cs.weight, color: warna });
        });

        layer.bindPopup(
          `<div class="gis-popup">
             <div class="popup-header" style="border-color:${warna}">
               <span class="popup-icon">🌊</span>
               <span class="popup-title">Garis Pantai</span>
             </div>
             <table class="popup-table">
               <tr><td class="pt-label">Tahun</td>
                   <td class="pt-val">${tahun}</td></tr>
               <tr><td class="pt-label">Kualitas</td>
                   <td class="pt-val">${certLabel}</td></tr>
             </table>
           </div>`
        );
      },
    }).addTo(this.shorelinesGroup);
  }

  // ── RENDER: RATES ────────────────────────────────────────

  _renderRates(data) {
    const markers = [];

    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        const laju    = feature.properties?.rate_time ?? 0;
        const isErosi = laju < 0;
        const isStbl  = Math.abs(laju) < 0.1;
        let warna     = '#8ba3c7';

        if (!isStbl) warna = isErosi ? '#ff4d4d' : '#00c9a7';

        const marker = L.circleMarker(latlng, {
          radius:      3,
          fillColor:   warna,
          color:       'rgba(255,255,255,0.7)',
          weight:      0.5,
          opacity:     1,
          fillOpacity: 1,
          _isErosi:    isErosi && !isStbl,
          _isAkresi:   !isErosi && !isStbl,
          _isStabil:   isStbl,
          _rate:       laju,
        });

        this._rateLayers.push({
          layer:    marker,
          rate:     laju,
          isErosi:  isErosi && !isStbl,
          isAkresi: !isErosi && !isStbl,
          isStabil: isStbl,
        });

        if (!this._visibleRate(laju, isErosi && !isStbl, !isErosi && !isStbl, isStbl)) {
          marker.setStyle({ opacity: 0, fillOpacity: 0 });
        }

        markers.push(marker);
        return marker;
      },
      onEachFeature: (feature, layer) => {
        const laju    = feature.properties?.rate_time ?? 0;
        const isErosi = laju < 0;
        const warna   = isErosi ? '#ff4d4d' : '#00c9a7';
        const status  = isErosi ? 'Abrasi' : 'Akresi';

        layer.bindTooltip(
          `<div class="gis-tooltip">
             <span class="tooltip-label">${status}</span>
             <span class="tooltip-value" style="color:${warna}">${formatLaju(laju)} m/th</span>
           </div>`,
          { sticky: true, direction: 'auto', className: 'gis-tooltip-wrap' }
        );

        layer.bindPopup(
          `<div class="gis-popup">
             <div class="popup-header" style="border-color:${warna}">
               <span class="popup-icon">${isErosi ? '⚠️' : '✅'}</span>
               <span class="popup-title">Titik Perubahan</span>
               <span class="popup-badge ${isErosi ? 'badge-erosi' : 'badge-akresi'}">${status}</span>
             </div>
             <table class="popup-table">
               <tr><td class="pt-label">Status</td><td class="pt-val">${status}</td></tr>
               <tr><td class="pt-label">Laju</td><td class="pt-val" style="color:${warna};font-weight:600;">${formatLaju(laju)} m/th</td></tr>
             </table>
           </div>`
        );
      },
    });

    this.clusterGroup.addLayers(markers);
  }

  // ── CLUSTER GROUP ────────────────────────────────────────

  _buildClusterGroup() {
    const group = L.markerClusterGroup({
      maxClusterRadius: z => z<=5?100 : z<=7?80 : z<=9?60 : z<=11?45 : z<=15?35 : 10,
      disableClusteringAtZoom: 16,
      spiderfyOnMaxZoom:   true,
      showCoverageOnHover: false,
      chunkedLoading:      true,
      animate:             true,
      
      iconCreateFunction: cluster => {
        const ms    = cluster.getAllChildMarkers();
        const total = ms.length;
        const ratio = ms.filter(m => m.options._isErosi).length / total;
        let bg, border;
        
        if      (ratio > 0.6) { bg = '#ff4d4d'; border = '#cc2222'; }
        else if (ratio < 0.4) { bg = '#00c9a7'; border = '#009980'; }
        else                  { bg = '#f5a623'; border = '#c47a00'; }
        
        // 1. UKURAN DIPERKECIL (Sebelumnya: 32, 38, 44, 50)
        const sz = total < 10 ? 20 : total < 50 ? 24 : total < 200 ? 28 : 32;
        
        // 2. FONT DISESUAIKAN agar muat di lingkaran yang lebih kecil
        const fontSize = sz < 30 ? 10 : 11;

        return L.divIcon({
          html: `<div style="
            width:${sz}px;
            height:${sz}px;
            border-radius:50%;
            background:${bg};
            border: 1.5px solid ${border}; /* Border ditipiskan */
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:${fontSize}px;
            font-weight:700;
            color:#fff;
            font-family:'DM Sans',sans-serif;
            box-shadow:0 2px 5px rgba(0,0,0,0.3);
            opacity: 0.85; /* 3. TRANSPARANSI ditambahkan agar garis bawah terlihat */
            ">${total}</div>`,
          className:  '',
          iconSize:   [sz, sz],
          iconAnchor: [sz/2, sz/2],
        });
      },
    });

    group.addTo(this.map);
    return group;
  }

  // ── FILTER & VISIBILITY ──────────────────────────────────

  _visibleYear(year) {
    const y = parseInt(year);
    if (isNaN(y)) return true;
    return y >= this._filter.yearMin && y <= this._filter.yearMax;
  }

  _visibleRate(rate, isErosi, isAkresi, isStabil) {
    if (isErosi  && !this._filter.showAbrasi) return false;
    if (isAkresi && !this._filter.showAkresi) return false;
    if (isStabil && !this._filter.showStabil) return false;
    if (Math.abs(rate) < (this._filter.minRate ?? 0)) return false;
    return true;
  }

  _visibleCertainty(certainty) {
    const c = (certainty ?? 'good').toLowerCase();
    if (c === 'good'              && !this._filter.certGood)         return false;
    if (c === 'insufficient data' && !this._filter.certInsufficient) return false;
    if (c === 'unstable data'     && !this._filter.certUnstable)     return false;
    return true;
  }

_applyFilterToLoaded() {
    const zoom     = this.map.getZoom();
    const isZoom16 = zoom >= 16;

    this._shorelineLayers.forEach(({ layer, year, certainty }) => {
      if (!layer.setStyle) return;
      const cs       = getCertStyle(certainty);
      const isLatest = parseInt(year) === parseInt(this._filter.yearMax);
      const visible  = this._visibleYear(year)
                    && this._visibleCertainty(certainty)
                    && (this._isFlexZoomActive || isZoom16 || isLatest);

      // ── Dirty-check: skip setStyle jika state tidak berubah ──
      if (layer._lastVisible === visible) return;
      layer._lastVisible = visible;

      layer.options.interactive = visible;
      if (!visible) {
        layer.closeTooltip();
        layer.unbindTooltip();
      } else if (!layer.getTooltip()) {
        const certLabel = {
          'good':              '✔ Good',
          'insufficient data': '⚠ Insufficient Data',
          'unstable data':     '✘ Unstable Data',
        }[certainty] ?? certainty;
        layer.bindTooltip(
          `<div class="gis-tooltip">
             <span class="tooltip-label">Tahun · ${certLabel}</span>
             <span class="tooltip-value">${year}</span>
           </div>`,
          { sticky: true, direction: 'auto', className: 'gis-tooltip-wrap' }
        );
      }

      layer.setStyle({
        opacity:   visible ? cs.opacity : 0,
        dashArray: cs.dashArray,
        weight:    cs.weight,
      });
    });

    this._rateLayers.forEach(({ layer, rate, isErosi, isAkresi, isStabil }) => {
      const visible = this._visibleRate(rate, isErosi, isAkresi, isStabil);
      const inCluster = this.clusterGroup.hasLayer(layer);
      if (visible && !inCluster) {
        this.clusterGroup.addLayer(layer);
      } else if (!visible && inCluster) {
        this.clusterGroup.removeLayer(layer);
      }
    });

    this._calculateViewportStats();
  }

  // ── VIEWPORT STATS (RINGAN & DINAMIS) ────────────────────

  _calculateViewportStats() {
    clearTimeout(this._statsTimer);
    this._statsTimer = setTimeout(() => this._doCalculateStats(), 200);
  }

  _doCalculateStats() {
    const zoom = this.map.getZoom();
    if (zoom < 14) {
      updateStatCard('stat-erosi-count',     '—');
      updateStatCard('stat-akresi-count',    '—');
      
      const el = document.getElementById('stat-avg-rate');
      if (el) { 
        el.textContent = '—'; 
        el.style.color = 'inherit'; 
      }
      return;
    }

    // 2. Persiapan Hitung
    const bounds = this.map.getBounds();
    let sumRate = 0, countRate = 0;
    let countErosi = 0, countAkresi = 0, countShoreline = 0;

    // 3. Looping Garis Pantai yang masuk layar
    this._shorelineLayers.forEach(({ layer, year }) => {
      const isLatest = parseInt(year) === parseInt(this._filter.yearMax);
      const visible  = this._visibleYear(year) && (this._isFlexZoomActive || zoom >= 16 || isLatest);
      if (!visible) return;

      if (layer.getBounds && bounds.intersects(layer.getBounds())) {
        countShoreline++;

        // Hitung panjang secara presisi pakai fungsi Leaflet (hanya hitung ruas yang bersinggungan di layar)
        const latlngs = layer.getLatLngs();
        const lines = Array.isArray(latlngs[0]) ? latlngs : [latlngs]; // Handle MutiLineString vs LineString
      }
    });

    // 4. Looping Titik Rates yang masuk layar
    this._rateLayers.forEach(({ layer, rate, isErosi, isAkresi, isStabil }) => {
      if (!this._visibleRate(rate, isErosi, isAkresi, isStabil)) return;

      if (bounds.contains(layer.getLatLng())) {
        sumRate += rate;
        countRate++;
        if (isErosi) countErosi++;
        if (isAkresi) countAkresi++;
      }
    });

    // 5. Update UI Dashboard
    updateStatCard('stat-erosi-count',     countErosi);
    updateStatCard('stat-akresi-count',    countAkresi);

    const avgRate = countRate > 0 ? (sumRate / countRate).toFixed(2) : '—';
    const elRate = document.getElementById('stat-avg-rate');
    if (elRate) {
      elRate.textContent = avgRate;
      elRate.style.color = avgRate !== '—' 
        ? (parseFloat(avgRate) < 0 ? '#ff4d4d' : '#00c9a7') 
        : 'inherit';
    }
  }   // ← tutup _doCalculateStats

  // ── SETUP PANES ──────────────────────────────────────────

  _ensurePanes() {
    if (!this.map.getPane('lapisGaris')) {
      this.map.createPane('lapisGaris');
      this.map.getPane('lapisGaris').style.zIndex = 400;
    }
    if (!this.map.getPane('lapisTitik')) {
      this.map.createPane('lapisTitik');
      this.map.getPane('lapisTitik').style.zIndex = 600;
    }
  }
}