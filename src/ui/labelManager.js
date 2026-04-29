/**
 * src/ui/labelManager.js
 * ─────────────────────────────────────────────────────────
 * Label Manager — dua jenis label:
 *
 *  1. SHORELINE LABELS — label tahun mengikuti arah garis (seperti kontur)
 *     - Teks rotate sesuai bearing garis di titik tersebut
 *     - Interval adaptif per zoom (makin zoom in makin rapat)
 *     - Anti-collision: label baru tidak ditempatkan jika terlalu dekat label lain
 *     - ✔ Sinkron dengan visibilitas TileLoader (flexZoom / zoom16 / isLatest)
 *
 *  2. RATE LABELS — nilai laju perubahan di samping titik
 *     - Format: "9.3 m (±1.0)"
 *     - Warna merah (abrasi) / hijau (akresi)
 *     - Anti-collision grid-based
 *     - Hanya muncul di zoom >= 10
 *
 *  Cara pakai di main.js:
 *    import { LabelManager } from './src/ui/labelManager.js';
 *    const labelMgr = new LabelManager(map);
 *
 *    // Setelah tile selesai load:
 *    tileLoader.onTileLoaded = (slData, rtData) => {
 *      if (slData?.features) labelMgr.addShorelineFeatures(slData.features);
 *      if (rtData?.features) labelMgr.addRateFeatures(rtData.features);
 *    };
 *
 *    // Sinkronkan flexZoom:
 *    const _origSetFlexZoom = tileLoader.setFlexZoom.bind(tileLoader);
 *    tileLoader.setFlexZoom = (isActive) => {
 *      _origSetFlexZoom(isActive);
 *      labelMgr.setFlexZoom(isActive, tileLoader._filter.yearMax);
 *    };
 *
 *    // Sinkronkan filter tahun:
 *    onFilterChange: (filter) => {
 *      tileLoader.applyFilter({ ... });
 *      labelMgr.setYearMax(filter.yearMax);
 *    }
 */

export class LabelManager {
  constructor(map) {
    this.map = map;

    // ── State fitur ─────────────────────────────────────
    this._shorelineFeatures = [];
    this._rateFeatures      = [];

    this._shorelineLabelsOn = false;
    this._rateLabelsOn      = false;

    // ── State sinkronisasi visibilitas (BARU) ───────────
    // Harus sama dengan kondisi di TileLoader._applyFilterToLoaded()
    this._flexZoomActive = false;
    this._filterYearMax  = 2025;

    // ── SVG overlay di atas peta ────────────────────────
    this._svg     = this._createSVGOverlay();
    this._slGroup = this._createGroup('sl-labels');
    this._rtGroup = this._createGroup('rt-labels');

    // Re-render saat peta bergerak / zoom
    this.map.on('moveend', () => this._render());
    this.map.on('zoomend', () => this._render());

    this._injectStyles();
    this._buildButtons();
  }

  // ── PUBLIC API ────────────────────────────────────────

  /** Tambah fitur garis pantai dari tile yang baru dimuat */
  addShorelineFeatures(features) {
    this._shorelineFeatures.push(...(features ?? []));
    if (this._shorelineLabelsOn) this._render();
  }

  /** Tambah fitur titik rates dari tile yang baru dimuat */
  addRateFeatures(features) {
    this._rateFeatures.push(...(features ?? []));
    if (this._rateLabelsOn) this._render();
  }

  /** Reset semua label (dipanggil saat tile di-reload) */
  clear() {
    this._shorelineFeatures = [];
    this._rateFeatures      = [];
    this._slGroup.innerHTML = '';
    this._rtGroup.innerHTML = '';
  }

  /**
   * Sinkronkan status flexZoom dari TileLoader.
   * Panggil setiap kali tileLoader.setFlexZoom() dipanggil.
   * @param {boolean} isActive
   * @param {number}  [yearMax]
   */
  setFlexZoom(isActive, yearMax) {
    this._flexZoomActive = isActive;
    if (yearMax !== undefined) this._filterYearMax = parseInt(yearMax);
    if (this._shorelineLabelsOn) this._renderShorelineLabels();
  }

  /**
   * Sinkronkan yearMax dari filter panel.
   * Panggil setiap kali filter tahun berubah.
   * @param {number} yearMax
   */
  setYearMax(yearMax) {
    this._filterYearMax = parseInt(yearMax);
    if (this._shorelineLabelsOn) this._renderShorelineLabels();
  }

  // ── TOGGLE BUTTONS ───────────────────────────────────

  _buildButtons() {
    const togSL = document.getElementById('toggle-label-sl');
    const togRT = document.getElementById('toggle-label-rt');

    if (togSL) {
      togSL.addEventListener('change', (e) => {
        this._shorelineLabelsOn = e.target.checked;
        this._slGroup.style.display = this._shorelineLabelsOn ? '' : 'none';
        if (this._shorelineLabelsOn) this._render();
      });
    }

    if (togRT) {
      togRT.addEventListener('change', (e) => {
        this._rateLabelsOn = e.target.checked;
        this._rtGroup.style.display = this._rateLabelsOn ? '' : 'none';
        if (this._rateLabelsOn) this._render();
      });
    }
  }

  // ── SVG OVERLAY ──────────────────────────────────────

  _createSVGOverlay() {
    const existing = document.getElementById('label-svg-overlay');
    if (existing) return existing;

    const mapEl = document.getElementById('map');
    const svg   = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id      = 'label-svg-overlay';
    svg.style.cssText = `
      position:absolute; inset:0; width:100%; height:100%;
      pointer-events:none; z-index:450; overflow:visible;`;
    mapEl?.appendChild(svg);
    return svg;
  }

  _createGroup(id) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.id    = id;
    g.style.display = 'none';
    this._svg.appendChild(g);
    return g;
  }

  // ── MAIN RENDER ──────────────────────────────────────

  _render() {
    if (this._shorelineLabelsOn) this._renderShorelineLabels();
    if (this._rateLabelsOn)      this._renderRateLabels();
  }

  // ── RENDER SHORELINE LABELS ──────────────────────────

  _renderShorelineLabels() {
    this._slGroup.innerHTML = '';
    if (!this._shorelineFeatures.length) return;

    const zoom = this.map.getZoom();

    // Interval minimum antar label (px) — makin zoom in makin rapat
    const minDist = zoom >= 14 ? 120
                  : zoom >= 12 ? 180
                  : zoom >= 10 ? 240
                  : 300;

    // Panjang minimum segmen garis untuk mendapat label (px)
    const minSegLen = minDist * 0.6;

    // Anti-collision: simpan posisi label yang sudah ditempatkan
    const placed = [];

    // Group per tahun agar label setiap tahun punya warna sesuai
    const byYear = new Map();
    this._shorelineFeatures.forEach(f => {
      const y = f.properties?.year ?? '-';
      if (!byYear.has(y)) byYear.set(y, []);
      byYear.get(y).push(f);
    });

    byYear.forEach((features, year) => {
      const yearInt  = parseInt(year);
      const isLatest = yearInt === this._filterYearMax;
      const isZoom16 = zoom >= 16;

      // ── KUNCI PERBAIKAN ──────────────────────────────
      // Replikasi kondisi visibilitas yang sama persis dengan
      // TileLoader._applyFilterToLoaded() baris:
      //   const visible = ... && (this._isFlexZoomActive || isZoom16 || isLatest);
      // Jika garis tidak visible di peta, jangan render labelnya.
      const yearVisible = this._flexZoomActive || isZoom16 || isLatest;
      if (!yearVisible) return; // skip seluruh tahun ini
      // ─────────────────────────────────────────────────

      const hue   = Math.max(0, Math.min(280, (yearInt - 1984) * 7));
      const color = isNaN(yearInt) ? '#fff' : `hsl(${hue},100%,65%)`;

      features.forEach(feature => {
        const geom = feature.geometry;
        if (!geom) return;

        const lines = geom.type === 'LineString'
          ? [geom.coordinates]
          : geom.type === 'MultiLineString'
          ? geom.coordinates
          : [];

        lines.forEach(coords => {
          if (coords.length < 2) return;

          // Convert koordinat geografis ke pixel
          const pts = coords.map(([lng, lat]) => {
            const px = this.map.latLngToContainerPoint([lat, lng]);
            return { x: px.x, y: px.y };
          });

          // Hitung panjang total garis dalam pixel
          let totalLen = 0;
          const segLens = [];
          for (let i = 1; i < pts.length; i++) {
            const dx = pts[i].x - pts[i-1].x;
            const dy = pts[i].y - pts[i-1].y;
            const d  = Math.sqrt(dx*dx + dy*dy);
            segLens.push(d);
            totalLen += d;
          }

          if (totalLen < minSegLen) return;

          // Tempatkan label di interval reguler sepanjang garis
          const numLabels = Math.max(1, Math.floor(totalLen / minDist));
          const step      = totalLen / (numLabels + 1);

          for (let n = 1; n <= numLabels; n++) {
            const targetDist = step * n;
            let   accum      = 0;

            for (let i = 1; i < pts.length; i++) {
              const segLen = segLens[i-1];
              if (accum + segLen >= targetDist) {
                const t  = (targetDist - accum) / segLen;
                const lx = pts[i-1].x + t * (pts[i].x - pts[i-1].x);
                const ly = pts[i-1].y + t * (pts[i].y - pts[i-1].y);

                // Hitung bearing untuk rotasi teks
                const dx    = pts[i].x - pts[i-1].x;
                const dy    = pts[i].y - pts[i-1].y;
                let   angle = Math.atan2(dy, dx) * 180 / Math.PI;
                // Pastikan teks tidak terbalik
                if (angle > 90)  angle -= 180;
                if (angle < -90) angle += 180;

                // Anti-collision check
                const tooClose = placed.some(p => {
                  const ddx = p.x - lx, ddy = p.y - ly;
                  return Math.sqrt(ddx*ddx + ddy*ddy) < minDist * 0.85;
                });

                if (!tooClose) {
                  // Cek apakah titik ini dalam viewport (dengan buffer)
                  const W = this._svg.clientWidth;
                  const H = this._svg.clientHeight;
                  if (lx > -40 && lx < W+40 && ly > -20 && ly < H+20) {
                    this._placeSLLabel(lx, ly, angle, String(year), color);
                    placed.push({ x: lx, y: ly });
                  }
                }
                break;
              }
              accum += segLen;
            }
          }
        });
      });
    });
  }

  _placeSLLabel(x, y, angle, text, color) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${x},${y}) rotate(${angle})`);

    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('text-anchor',       'middle');
    t.setAttribute('dominant-baseline', 'central');

    // Warna teks mengikuti warna garis tahunnya (bukan selalu putih)
    t.setAttribute('fill',             color);
    t.setAttribute('stroke',           'rgba(0,0,0,0.9)');
    t.setAttribute('stroke-width',     '3');
    t.setAttribute('stroke-linejoin',  'round');
    // Trik SVG: gambar outline dulu di belakang, baru isi warna di depan
    t.setAttribute('paint-order',      'stroke fill');

    t.setAttribute('font-size',        '11');
    t.setAttribute('font-family',      "'Inter', 'DM Sans', sans-serif");
    t.setAttribute('font-weight',      '700');
    t.setAttribute('letter-spacing',   '0.05em');
    t.setAttribute('filter',           'drop-shadow(0px 1px 2px rgba(0,0,0,0.6))');

    t.textContent = text;
    g.appendChild(t);
    this._slGroup.appendChild(g);
  }

  // ── RENDER RATE LABELS ───────────────────────────────

  _renderRateLabels() {
    this._rtGroup.innerHTML = '';
    if (!this._rateFeatures.length) return;

    const zoom = this.map.getZoom();
    if (zoom < 10) {
      this._rtGroup.innerHTML = `
        <text x="50%" y="50%"
          font-size="12" fill="rgba(255,255,255,0.3)"
          font-family="'Inter',sans-serif"
          text-anchor="middle" dominant-baseline="middle">
          Zoom in ke level 10+ untuk label laju
        </text>`;
      return;
    }

    const W = this._svg.clientWidth;
    const H = this._svg.clientHeight;

    // Anti-collision grid: bagi layar ke sel 100×24 px
    const CELL_W = 100, CELL_H = 24;
    const cols   = Math.ceil(W / CELL_W);
    const rows   = Math.ceil(H / CELL_H);
    const grid   = new Uint8Array(cols * rows);

    const markGrid = (x, y, w, h) => {
      const c0 = Math.max(0, Math.floor((x - w/2) / CELL_W));
      const c1 = Math.min(cols-1, Math.ceil((x + w/2) / CELL_W));
      const r0 = Math.max(0, Math.floor((y - h/2) / CELL_H));
      const r1 = Math.min(rows-1, Math.ceil((y + h/2) / CELL_H));
      for (let r = r0; r <= r1; r++)
        for (let c = c0; c <= c1; c++)
          grid[r * cols + c] = 1;
    };

    const checkGrid = (x, y, w, h) => {
      const c0 = Math.max(0, Math.floor((x - w/2) / CELL_W));
      const c1 = Math.min(cols-1, Math.ceil((x + w/2) / CELL_W));
      const r0 = Math.max(0, Math.floor((y - h/2) / CELL_H));
      const r1 = Math.min(rows-1, Math.ceil((y + h/2) / CELL_H));
      for (let r = r0; r <= r1; r++)
        for (let c = c0; c <= c1; c++)
          if (grid[r * cols + c]) return true;
      return false;
    };

    // Sort: rate terbesar (absolut) lebih diprioritaskan
    const sorted = [...this._rateFeatures]
      .filter(f => {
        const coords = f.geometry?.coordinates;
        if (!coords) return false;
        const px = this.map.latLngToContainerPoint([coords[1], coords[0]]);
        return px.x > -20 && px.x < W+20 && px.y > -20 && px.y < H+20;
      })
      .sort((a, b) =>
        Math.abs(b.properties?.rate_time ?? 0) -
        Math.abs(a.properties?.rate_time ?? 0)
      );

    sorted.forEach(feature => {
      const coords = feature.geometry?.coordinates;
      if (!coords) return;

      const rate   = parseFloat(feature.properties?.rate_time ?? 0);
      const uncert = parseFloat(
        feature.properties?.uncertainty
        ?? feature.properties?.rate_time_unc
        ?? feature.properties?.unc
        ?? 0
      );
      if (Math.abs(rate) < 0.05) return; // skip stabil

      const px = this.map.latLngToContainerPoint([coords[1], coords[0]]);
      const x  = px.x, y = px.y;

      const isErosi  = rate < 0;
      const color    = '#ffffff';
      const bgColor  = isErosi ? 'rgba(220,38,38,0.85)' : 'rgba(5,150,105,0.85)';
      const border   = isErosi ? '#fca5a5' : '#6ee7b7';

      const rateStr  = rate.toFixed(1) + ' m';
      const uncStr   = uncert > 0 ? ` (±${uncert.toFixed(1)})` : '';
      const fullText = rateStr + uncStr;

      const textW = fullText.length * 5.8 + 12;
      const textH = 16;

      // Coba 4 posisi: kanan, kiri, atas, bawah titik
      const offsets = [
        { dx:  14, dy:   0, anchor: 'start'  },
        { dx: -14, dy:   0, anchor: 'end'    },
        { dx:   0, dy: -12, anchor: 'middle' },
        { dx:   0, dy:  16, anchor: 'middle' },
      ];

      for (const off of offsets) {
        const lx = x + off.dx + (off.anchor === 'start'  ?  textW/2
                               : off.anchor === 'end'    ? -textW/2
                               : 0);
        const ly = y + off.dy;

        if (lx < 0 || lx > W || ly < -10 || ly > H+10) continue;
        if (checkGrid(lx, ly, textW + 6, textH + 4)) continue;

        markGrid(lx, ly, textW + 6, textH + 4);
        this._placeRateLabel(x, y, lx, ly, fullText, color, bgColor, border, off.anchor);
        break;
      }
    });
  }

  _placeRateLabel(dotX, dotY, lx, ly, text, color, bgColor, borderColor, anchor) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Leader line dari titik ke label
    const dx = lx - dotX, dy = ly - dotY;
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', dotX); line.setAttribute('y1', dotY);
      line.setAttribute('x2', lx);   line.setAttribute('y2', ly);
      line.setAttribute('stroke',         color);
      line.setAttribute('stroke-width',   '0.8');
      line.setAttribute('stroke-opacity', '0.5');
      line.setAttribute('stroke-dasharray', '3 2');
      g.appendChild(line);
    }

    // Background pill
    const tw  = text.length * 5.8 + 12;
    const th  = 16;
    const bx  = anchor === 'start' ? lx - 2
              : anchor === 'end'   ? lx - tw + 2
              : lx - tw/2;

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x',            bx);
    rect.setAttribute('y',            ly - th/2);
    rect.setAttribute('width',        tw);
    rect.setAttribute('height',       th);
    rect.setAttribute('rx',           '4');
    rect.setAttribute('fill',         bgColor);
    rect.setAttribute('stroke',       borderColor);
    rect.setAttribute('stroke-width', '0.8');
    g.appendChild(rect);

    // Teks nilai
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', anchor === 'start' ? bx + 6
                       : anchor === 'end'   ? lx - 6
                       : lx);
    t.setAttribute('y',                  ly + 1);
    t.setAttribute('text-anchor',        anchor === 'start' ? 'start'
                                        : anchor === 'end'  ? 'end'
                                        : 'middle');
    t.setAttribute('dominant-baseline',  'middle');
    t.setAttribute('fill',              color);
    t.setAttribute('font-size',         '9');
    t.setAttribute('font-family',       "'Inter','DM Sans',sans-serif");
    t.setAttribute('font-weight',       '600');
    t.textContent = text;
    g.appendChild(t);

    this._rtGroup.appendChild(g);
  }

  // ── INJECT STYLES ────────────────────────────────────

  _injectStyles() {
    if (document.getElementById('label-mgr-styles')) return;
    const s = document.createElement('style');
    s.id = 'label-mgr-styles';
    s.textContent = `
      #btn-label-shoreline.label-btn-active,
      #btn-label-rates.label-btn-active {
        background: rgba(59,130,246,0.2) !important;
        color: #3b82f6 !important;
        box-shadow: inset 0 0 0 1px rgba(59,130,246,0.4);
      }
      #label-svg-overlay { user-select: none; }
    `;
    document.head.appendChild(s);
  }
}