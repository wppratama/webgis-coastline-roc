/**
 * src/layers/tileLoader.js  — VERSI FIX
 * ─────────────────────────────────────────────────────────
 * Fix tile_id format: mendukung "72,35" (string dengan koma)
 * Fix: apply filter dari FilterPanel saat render & re-render
 */

import L from 'leaflet';
import { setLayerStatus, updateStatCard } from '../ui/stats.js';
import { getWarnaTahun } from '../utils/color.js';
import { formatLaju } from '../utils/format.js';

const BASE_URL = './tiles';

export class TileLoader {
  constructor(map, options = {}) {
    this.map  = map;
    this.opts = {
      yearMin: options.yearMin ?? 1985,
      yearMax: options.yearMax ?? 2025,
    };

    this._ensurePanes();

    this.shorelinesGroup = L.layerGroup().addTo(map);
    this.ratesGroup      = L.layerGroup();

    this._manifest     = null;
    this._loadedTiles  = new Set();
    this._pendingTiles = new Set();

    // Semua fitur yang sudah dirender — untuk re-filter tanpa re-fetch
    this._shorelineLayers = [];  // array of { layer, year }
    this._rateLayers      = [];  // array of { layer, rate, isErosi }

    // Filter aktif (diupdate dari FilterPanel)
    this._filter = {
      yearMin:    options.yearMin ?? 1985,
      yearMax:    options.yearMax ?? 2025,
      showAbrasi: true,
      showAkresi: true,
      showStabil: true,
      minRate:    0,
    };

    // Stat counter
    this._countShoreline = 0;
    this._countErosi     = 0;
    this._countAkresi    = 0;
  }

  // ── PUBLIC API ────────────────────────────────────────────

  async init() {
    this._manifest = await this._fetchManifest();
    if (!this._manifest) return;

    // Update tile saat peta berhenti bergerak
    this.map.on('moveend', () => this._updateVisibleTiles());

    // Load tile awal
    await this._updateVisibleTiles();
  }

  /**
   * Terima filter dari FilterPanel dan terapkan ke semua layer.
   * Tile yang sudah dimuat: langsung update opacity tanpa re-fetch.
   * Tile yang belum dimuat: akan terapkan filter saat render nanti.
   */
  applyFilter(filter) {
    this._filter = {
      yearMin:    filter.yearMin    ?? this._filter.yearMin,
      yearMax:    filter.yearMax    ?? this._filter.yearMax,
      showAbrasi: filter.showAbrasi ?? true,
      showAkresi: filter.showAkresi ?? true,
      showStabil: filter.showStabil ?? true,
      minRate:    filter.minRate    ?? 0,
    };

    // Re-apply ke semua layer yang sudah ada di memori — O(n) tapi cepat
    this._applyFilterToLoaded();
  }

  setShorelinesOpacity(opacity) {
    this._shorelineLayers.forEach(({ layer }) => {
      if (layer.setStyle) layer.setStyle({ opacity });
    });
  }

  // ── INTERNAL: TILE MANAGEMENT ────────────────────────────

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

  async _fetchManifest() {
    try {
      const res = await fetch(`${BASE_URL}/shorelines/shorelines_manifest.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const m = await res.json();

      // Normalisasi: tile_id bisa berupa number ATAU string "72,35"
      // Simpan sebagai string agar konsisten
      m.tiles = m.tiles.map(t => String(t));
      const normalBounds = {};
      Object.entries(m.tile_bounds ?? {}).forEach(([k, v]) => {
        normalBounds[String(k)] = v;
      });
      m.tile_bounds = normalBounds;

      return m;
    } catch (err) {
      console.error('Gagal memuat manifest:', err);
      setLayerStatus('status-shorelines', 'error');
      return null;
    }
  }

  _getVisibleTileIds() {
    if (!this._manifest) return [];
    const b = this.map.getBounds();

    return this._manifest.tiles.filter(tileId => {
      const bb = this._manifest.tile_bounds[tileId];
      if (!bb) return false;
      const [minx, miny, maxx, maxy] = bb;
      return b.getWest()  <= maxx &&
             b.getEast()  >= minx &&
             b.getSouth() <= maxy &&
             b.getNorth() >= miny;
    });
  }

  async _updateVisibleTiles() {
    const visible = this._getVisibleTileIds();
    const toLoad  = visible.filter(
      id => !this._loadedTiles.has(id) && !this._pendingTiles.has(id)
    );
    if (!toLoad.length) return;

    setLayerStatus('status-shorelines', 'loading');
    setLayerStatus('status-rates',      'loading');

    toLoad.forEach(id => this._pendingTiles.add(id));

    await Promise.allSettled(toLoad.map(id => this._loadOneTile(id)));
  }

  async _loadOneTile(tileId) {
    // tile_id "72,35" → nama file shorelines_tile_72,35.geojson
    const tidStr = String(tileId);

    try {
      const [slRes, rtRes] = await Promise.allSettled([
        fetch(`${BASE_URL}/shorelines/shorelines_tile_${tidStr}.geojson`),
        fetch(`${BASE_URL}/rates/rates_tile_${tidStr}.geojson`),
      ]);

      if (slRes.status === 'fulfilled' && slRes.value.ok) {
        const data = await slRes.value.json();
        this._renderShorelines(data);
      }

      if (rtRes.status === 'fulfilled' && rtRes.value.ok) {
        const data = await rtRes.value.json();
        this._renderRates(data);
      }

      this._loadedTiles.add(tileId);
      setLayerStatus('status-shorelines', 'done');
      setLayerStatus('status-rates',      'done');
      updateStatCard('stat-shoreline-count', this._countShoreline);
      updateStatCard('stat-erosi-count',     this._countErosi);
      updateStatCard('stat-akresi-count',    this._countAkresi);

    } catch (err) {
      console.error(`Gagal memuat tile ${tileId}:`, err);
      setLayerStatus('status-shorelines', 'error');
    } finally {
      this._pendingTiles.delete(tileId);
    }
  }

  // ── RENDER ───────────────────────────────────────────────

  _renderShorelines(data) {
    L.geoJSON(data, {
      pane:  'lapisGaris',
      style: feature => {
        const year  = feature.properties?.year ?? null;
        const warna = getWarnaTahun(year);
        return {
          color:   warna,
          weight:  2,
          opacity: this._visibleYear(year) ? 0.9 : 0,
        };
      },
      onEachFeature: (feature, layer) => {
        const tahun = feature.properties?.year ?? '-';
        const warna = getWarnaTahun(tahun);

        // Simpan referensi untuk re-filter
        this._shorelineLayers.push({ layer, year: tahun });
        this._countShoreline++;

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
               <tr><td class="pt-label">Tahun</td>
                   <td class="pt-val">${tahun}</td></tr>
             </table>
           </div>`
        );
      },
    }).addTo(this.shorelinesGroup);
  }

  _renderRates(data) {
    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        const laju    = feature.properties?.rate_time ?? 0;
        const isErosi = laju < 0;
        const isStbl  = Math.abs(laju) < 0.1;
        let warna     = '#8ba3c7';

        if (!isStbl) {
          if (isErosi) { warna = '#ff4d4d'; this._countErosi++; }
          else         { warna = '#00c9a7'; this._countAkresi++; }
        }

        const marker = L.circleMarker(latlng, {
          pane: 'lapisTitik', radius: 4,
          fillColor: warna, color: 'rgba(255,255,255,0.6)',
          weight: 1, opacity: 1, fillOpacity: 1,
        });

        // Simpan untuk re-filter
        this._rateLayers.push({
          layer: marker, rate: laju,
          isErosi, isAkresi: !isErosi && !isStbl, isStabil: isStbl,
        });

        // Apply filter saat ini
        if (!this._visibleRate(laju, isErosi, !isErosi && !isStbl, isStbl)) {
          marker.setStyle({ opacity: 0, fillOpacity: 0 });
        }

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
             <span class="tooltip-value" style="color:${warna}">
               ${formatLaju(laju)} m/th
             </span>
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
               <tr><td class="pt-label">Status</td>
                   <td class="pt-val">${status}</td></tr>
               <tr><td class="pt-label">Laju</td>
                   <td class="pt-val" style="color:${warna};font-weight:600;">
                     ${formatLaju(laju)} m/th
                   </td></tr>
             </table>
           </div>`
        );
      },
    }).addTo(this.ratesGroup);
  }

  // ── FILTER HELPERS ───────────────────────────────────────

  _visibleYear(year) {
    const y = parseInt(year);
    if (isNaN(y)) return true;
    return y >= this._filter.yearMin && y <= this._filter.yearMax;
  }

  _visibleRate(rate, isErosi, isAkresi, isStabil) {
    const { showAbrasi, showAkresi, showStabil, minRate } = this._filter;
    if (isErosi  && !showAbrasi) return false;
    if (isAkresi && !showAkresi) return false;
    if (isStabil && !showStabil) return false;
    if (Math.abs(rate) < minRate) return false;
    return true;
  }

  /** Re-apply filter ke semua layer yang sudah dirender */
  _applyFilterToLoaded() {
    // Shorelines — hanya ubah opacity
    this._shorelineLayers.forEach(({ layer, year }) => {
      if (!layer.setStyle) return;
      layer.setStyle({ opacity: this._visibleYear(year) ? 0.9 : 0 });
    });

    // Rate markers
    this._rateLayers.forEach(({ layer, rate, isErosi, isAkresi, isStabil }) => {
      const visible = this._visibleRate(rate, isErosi, isAkresi, isStabil);
      layer.setStyle({
        opacity:     visible ? 1 : 0,
        fillOpacity: visible ? 1 : 0,
      });
    });
  }
}