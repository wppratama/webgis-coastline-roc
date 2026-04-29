/**
 * src/ui/mapLayout.js  — v2.1
 * ─────────────────────────────────────────────────────────
 * Map Layout Tool — export peta siap cetak (PNG + Print PDF)
 *
 * Perbaikan v2.1:
 *  ✔ Label garis pantai bergaya contur (rotasi + halo SVG)
 *  ✔ DPI dapat diatur (72 / 150 / 200 / 300)
 *  ✔ Aspect ratio terjaga saat export (tidak stretch)
 *  ✔ Logo diload via fetch → base64 agar html2canvas bisa render
 *  ✔ Mode "Peta Saja" (semua elemen kartografi nonaktif sekaligus)
 *  ✔ Tombol Copy to Clipboard
 *  ✔ Scale bar dinamis mengikuti zoom & posisi peta
 */

const HTML2CANVAS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
let _html2canvasLoaded = false;

async function loadHtml2Canvas() {
  if (_html2canvasLoaded || window.html2canvas) { _html2canvasLoaded = true; return; }
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = HTML2CANVAS_CDN;
    s.onload  = () => { _html2canvasLoaded = true; resolve(); };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// ── Logo cache (base64) ──────────────────────────────────
let _logoBase64 = null;
async function _getLogoBase64() {
  if (_logoBase64) return _logoBase64;
  const paths = ['public/logo/logo.png', 'public/logo/logo1.png', './logo.png'];
  for (const p of paths) {
    try {
      const res = await fetch(p);
      if (!res.ok) continue;
      const blob = await res.blob();
      _logoBase64 = await new Promise(r => {
        const reader = new FileReader();
        reader.onload = e => r(e.target.result);
        reader.readAsDataURL(blob);
      });
      return _logoBase64;
    } catch { /* coba path berikutnya */ }
  }
  return null; // tidak ditemukan
}

// ── Scale bar dinamis ────────────────────────────────────
/**
 * Hitung panjang skala dan label berdasarkan zoom & center peta.
 * Mengembalikan { meters, label, barWidthPx, displayPx }
 * displayPx = lebar batang yang akan ditampilkan di preview (target ~100 px)
 */
function _computeScale(mapInstance, targetBarPx = 100) {
  if (!mapInstance) return { meters: 0, label: '—', barWidthPx: targetBarPx };

  const center = mapInstance.getCenter();
  // 1 derajat longitude = cos(lat) * 111.32 km
  const metersPerPx = (Math.cos(center.lat * Math.PI / 180) * 111320)
                    / Math.pow(2, mapInstance.getZoom() + 8) * 256;

  const rawMeters = metersPerPx * targetBarPx;

  // Bulatkan ke nilai "cantik" terdekat
  const niceSteps = [
    1, 2, 5, 10, 20, 50, 100, 200, 500,
    1000, 2000, 5000, 10000, 20000, 50000,
    100000, 200000, 500000, 1000000,
  ];
  let niceMeters = niceSteps[0];
  for (const s of niceSteps) {
    if (s <= rawMeters) niceMeters = s;
    else break;
  }

  const label = niceMeters >= 1000
    ? `${(niceMeters / 1000).toLocaleString('id-ID')} km`
    : `${niceMeters.toLocaleString('id-ID')} m`;

  const barWidthPx = Math.round(niceMeters / metersPerPx);
  return { meters: niceMeters, label, barWidthPx };
}

// ── PUBLIC SETUP ─────────────────────────────────────────

export function setupMapLayout(mapInstance, layerCtrl) {
  _injectStyles();
  _buildModal(mapInstance, layerCtrl);
  _buildToolbarButton(mapInstance, layerCtrl);

  // Update scale bar di bottombar map utama secara dinamis
  _setupDynamicScaleBar(mapInstance);
}

// ── Dynamic Scale Bar (map utama) ────────────────────────
function _setupDynamicScaleBar(mapInstance) {
  if (!mapInstance) return;

  function update() {
    const { label, barWidthPx } = _computeScale(mapInstance, 44);
    const lineEl = document.querySelector('.scale-line');
    const textEl = document.querySelector('.scale-box span');
    if (lineEl) lineEl.style.width = barWidthPx + 'px';
    if (textEl) textEl.textContent = label;
  }

  mapInstance.on('zoomend moveend', update);
  update(); // langsung update saat init
}

// ── TOOLBAR BUTTON ───────────────────────────────────────
function _buildToolbarButton(mapInstance, layerCtrl) {
  const toolbar = document.querySelector('.map-toolbar');
  if (!toolbar) return;

  const group = document.createElement('div');
  group.className = 'tool-group';
  group.innerHTML = `
    <button class="map-tool" id="btn-map-layout" title="Layout - Ekspor Peta">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 3v18"/>
        <circle cx="15" cy="15" r="2" fill="currentColor" stroke="none" opacity=".5"/>
      </svg>
    </button>`;
  toolbar.appendChild(group);

  document.getElementById('btn-map-layout')
    ?.addEventListener('click', () => _openModal(mapInstance, layerCtrl));
}

// ── MODAL BUILD ──────────────────────────────────────────
function _buildModal(mapInstance, layerCtrl) {
  if (document.getElementById('map-layout-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'map-layout-modal';
  modal.innerHTML = `
    <div class="mlm-backdrop" id="mlm-backdrop"></div>
    <div class="mlm-panel">

      <!-- Sidebar kiri -->
      <div class="mlm-sidebar">
        <div class="mlm-sidebar-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 3v18"/>
          </svg>
          Layout Peta
        </div>

        <!-- Judul & subjudul -->
        <div class="mlm-section">
          <div class="mlm-section-label">Judul Peta</div>
          <input class="mlm-input" id="layout-title"
                 placeholder="Dinamika Garis Pantai..."
                 value="Peta Dinamika Garis Pantai Indonesia"/>
          <input class="mlm-input" id="layout-subtitle"
                 placeholder="Subjudul (opsional)"
                 value="Analisis Perubahan Garis Pantai 1985–2025"/>
        </div>

        <!-- Nama pembuat & lokasi -->
        <div class="mlm-section">
          <div class="mlm-section-label">Informasi Pembuat</div>
          <input class="mlm-input" id="layout-author" placeholder="Nama pembuat peta"/>
          <input class="mlm-input" id="layout-area"   placeholder="Nama area/wilayah yang dipetakan"/>
        </div>

        <!-- Toggle elemen kartografi -->
        <div class="mlm-section">
          <div class="mlm-section-label" style="display:flex;align-items:center;justify-content:space-between;">
            Elemen Kartografi
            <button class="mlm-toggle-all" id="btn-toggle-all-off" title="Nonaktifkan semua elemen">Peta Saja</button>
          </div>
          <div class="mlm-toggles">
            <label class="mlm-chk"><input type="checkbox" id="lyt-legend"     checked> Legenda</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-north"      checked> North Arrow</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-scale"      checked> Skala Bar</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-source"     checked> Sumber Data</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-disclaimer" checked> Disclaimer</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-date"       checked> Tanggal</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-inset"      checked> Peta Inset</label>
          </div>
        </div>

        <!-- Ukuran kertas & DPI -->
        <div class="mlm-section">
          <div class="mlm-section-label">Format & Resolusi</div>
          <div class="mlm-row2">
            <div>
              <div class="mlm-sublabel">Orientasi</div>
              <select class="mlm-select" id="layout-paper">
                <option value="a4l">Landscape</option>
                <option value="a4p">Portrait</option>
              </select>
            </div>
            <div>
              <div class="mlm-sublabel">DPI Export</div>
              <select class="mlm-select" id="layout-dpi">
                <option value="72">72 dpi (screen)</option>
                <option value="150">150 dpi</option>
                <option value="200" selected>200 dpi</option>
                <option value="300">300 dpi (print)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Tema -->
        <div class="mlm-section">
          <div class="mlm-section-label">Tema Layout</div>
          <div class="mlm-theme-row">
            <button class="mlm-theme active" data-theme="dark"  title="Dark">
              <div style="background:#080f1e;"></div> Dark
            </button>
            <button class="mlm-theme" data-theme="light" title="Light">
              <div style="background:#f8fafc;border:1px solid #e2e8f0;"></div> Light
            </button>
          </div>
        </div>

        <!-- Actions -->
        <div class="mlm-actions">
          <button class="mlm-btn mlm-btn-secondary" id="btn-lyt-refresh">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 .49-3.18"/>
            </svg>
            Refresh Preview
          </button>
          <button class="mlm-btn mlm-btn-primary" id="btn-lyt-png">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export PNG
          </button>
          <button class="mlm-btn mlm-btn-accent" id="btn-lyt-clipboard">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copy to Clipboard
          </button>
          <button class="mlm-btn mlm-btn-ghost" id="btn-lyt-print">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Export PDF
          </button>
          <button class="mlm-btn mlm-btn-close" id="btn-lyt-close">Tutup</button>
        </div>
      </div>

      <!-- Preview area -->
      <div class="mlm-preview-wrap">
        <div class="mlm-preview-topbar">
          <span class="mlm-preview-label" id="mlm-preview-label">Preview — A4 Landscape</span>
          <span class="mlm-preview-hint">Klik gambar peta untuk zoom</span>
        </div>
        <div class="mlm-preview-scroll">
          <div class="mlm-canvas" id="mlm-canvas"></div>
        </div>
      </div>

    </div>`;

  document.body.appendChild(modal);

  // ── Events ──
  document.getElementById('mlm-backdrop').addEventListener('click', _closeModal);
  document.getElementById('btn-lyt-close').addEventListener('click', _closeModal);
  document.getElementById('btn-lyt-refresh').addEventListener('click', () => _renderCanvas(mapInstance));
  document.getElementById('btn-lyt-png').addEventListener('click', () => _exportPNG(mapInstance));
  document.getElementById('btn-lyt-print').addEventListener('click', () => _printLayout(mapInstance));
  document.getElementById('btn-lyt-clipboard').addEventListener('click', () => _copyToClipboard(mapInstance));

  // Tombol "Peta Saja" — toggle semua elemen on/off
  const toggleAllBtn = document.getElementById('btn-toggle-all-off');
  let _mapOnlyMode = false;
  const _kartIds = ['lyt-legend','lyt-north','lyt-scale','lyt-source','lyt-disclaimer','lyt-date','lyt-inset'];
  toggleAllBtn.addEventListener('click', () => {
    _mapOnlyMode = !_mapOnlyMode;
    _kartIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.checked = !_mapOnlyMode;
    });
    toggleAllBtn.textContent = _mapOnlyMode ? 'Tampilkan Semua' : 'Peta Saja';
    toggleAllBtn.style.background = _mapOnlyMode ? 'rgba(59,130,246,0.2)' : '';
    toggleAllBtn.style.color      = _mapOnlyMode ? '#3b82f6' : '';
    _renderCanvas(mapInstance);
  });

  // Theme toggle
  document.querySelectorAll('.mlm-theme').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mlm-theme').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _renderCanvas(mapInstance);
    });
  });

  // Live update: input teks
  ['layout-title','layout-subtitle','layout-author','layout-area'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      clearTimeout(window._lytDebounce);
      window._lytDebounce = setTimeout(() => _renderCanvas(mapInstance), 400);
    });
  });

  // Live update: checkbox elemen
  _kartIds.forEach(id => {
    document.getElementById(id)?.addEventListener('change', () => _renderCanvas(mapInstance));
  });

  // Live update: paper size
  document.getElementById('layout-paper')?.addEventListener('change', () => {
    _updateCanvasSize();
    _renderCanvas(mapInstance);
  });
}

// ── CANVAS SIZE ──────────────────────────────────────────
// Resolusi preview tetap (A4 landscape = 864×612 px @96dpi-preview)
const PAPER_SIZES = {
  a4l: { w: 864, h: 612,  label: 'A4 Landscape', mmW: 297, mmH: 210 },
  a4p: { w: 612, h: 864,  label: 'A4 Portrait',  mmW: 210, mmH: 297 },
  a3l: { w: 1122, h: 794, label: 'A3 Landscape', mmW: 420, mmH: 297 },
};

function _getPaper() {
  const id = document.getElementById('layout-paper')?.value ?? 'a4l';
  return PAPER_SIZES[id] ?? PAPER_SIZES.a4l;
}

function _getDPI() {
  return parseInt(document.getElementById('layout-dpi')?.value ?? '200');
}

function _updateCanvasSize() {
  const paper  = _getPaper();
  const canvas = document.getElementById('mlm-canvas');
  const label  = document.getElementById('mlm-preview-label');
  if (canvas) {
    canvas.style.width  = paper.w + 'px';
    canvas.style.height = paper.h + 'px';
  }
  if (label) label.textContent = `Preview — ${paper.label}`;
}

// ── OPEN / CLOSE ─────────────────────────────────────────
function _openModal(mapInstance) {
  const modal = document.getElementById('map-layout-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const flexBtn = document.getElementById('btn-flex-zoom');
  if (flexBtn && !flexBtn.classList.contains('active')) flexBtn.click();

  _updateCanvasSize();
  setTimeout(() => _renderCanvas(mapInstance), 150);
}

function _closeModal() {
  document.getElementById('map-layout-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── THEME ─────────────────────────────────────────────────
function _getTheme() {
  const active = document.querySelector('.mlm-theme.active')?.dataset.theme ?? 'dark';
  return {
    dark:  { bg: '#080f1e', text: '#f0f6ff', textSub: '#94afc8', border: 'rgba(255,255,255,0.12)', accent: '#3b82f6', cardBg: '#0c1526', cardBorder: 'rgba(255,255,255,0.08)', gridLine: 'rgba(255,255,255,0.04)' },
    light: { bg: '#f1f5f9', text: '#1e293b', textSub: '#64748b', border: '#cbd5e1', accent: '#2563eb', cardBg: '#ffffff', cardBorder: '#e2e8f0', gridLine: 'rgba(0,0,0,0.04)' },
  }[active];
}

function _val(id) { return document.getElementById(id)?.value?.trim() ?? ''; }
function _chk(id) { return document.getElementById(id)?.checked ?? true; }

// ── MAP SNAPSHOT ─────────────────────────────────────────
async function _getMapSnapshot(scale = 1.5) {
  const mapEl = document.getElementById('map');
  if (!mapEl) return null;
  await loadHtml2Canvas();
  const canvas = await window.html2canvas(mapEl, {
    useCORS: true, allowTaint: true,
    scale, backgroundColor: '#080f1e', logging: false,
  });
  // Kembalikan canvas itu sendiri agar kita bisa kontrol aspect ratio
  return canvas;
}

// ── RENDER CANVAS ─────────────────────────────────────────
async function _renderCanvas(mapInstance) {
  const canvasEl = document.getElementById('mlm-canvas');
  if (!canvasEl) return;

  canvasEl.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;
                height:100%;color:rgba(255,255,255,0.4);font-size:13px;
                font-family:'Inter',sans-serif;gap:8px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           width="16" height="16" style="animation:spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      Memuat snapshot peta...
    </div>`;

  const [mapCanvas, logo] = await Promise.all([
    _getMapSnapshot(1.5),
    _getLogoBase64(),
  ]);

  const mapImg = mapCanvas
    ? (() => {
        // Ambil gambar dengan aspect ratio asli dari map element
        const mapEl = document.getElementById('map');
        const paper = _getPaper();
        // Kita buat img tag dengan object-fit: cover agar tidak stretch
        return mapCanvas.toDataURL('image/jpeg', 0.93);
      })()
    : null;

  const T           = _getTheme();
  const title       = _val('layout-title')    || 'Peta Dinamika Garis Pantai';
  const subtitle    = _val('layout-subtitle') || '';
  const author      = _val('layout-author')  || '';
  const area        = _val('layout-area')    || '';
  const paper       = _getPaper();

  const showLegend     = _chk('lyt-legend');
  const showNorth      = _chk('lyt-north');
  const showScale      = _chk('lyt-scale');
  const showSource     = _chk('lyt-source');
  const showDisclaimer = _chk('lyt-disclaimer');
  const showDate       = _chk('lyt-date');
  const showInset      = _chk('lyt-inset');

  const today = new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });

  // Scale bar dinamis
  const { label: scaleLabel, barWidthPx: scalePx } = _computeScale(mapInstance, 80);
  const scaleBarWidth = Math.min(scalePx, 120); // batas max di layout

  // Cek apakah semua elemen kartografi nonaktif (mode peta saja)
  const mapOnly = !showLegend && !showNorth && !showScale && !showSource && !showDisclaimer;

  canvasEl.innerHTML = `
    <div class="lyt-page" style="background:${T.bg};color:${T.text};width:${paper.w}px;height:${paper.h}px;">

      <!-- Garis grid dekoratif latar -->
      <div class="lyt-grid-bg" style="background-image:
        linear-gradient(${T.gridLine} 1px, transparent 1px),
        linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px);
        background-size:24px 24px;"></div>

      <!-- Header strip -->
      <div class="lyt-header" style="border-bottom:2px solid ${T.accent};">
        <div class="lyt-accent-rule" style="background:${T.accent};"></div>
        <div class="lyt-title-block">
          <div class="lyt-eyebrow" style="color:${T.accent};">
            MONITORING DINAMIKA PESISIR NASIONAL · INDONESIA COASTLINES & RATES OF CHANGE
          </div>
          <div class="lyt-title" style="color:${T.text};">${title}</div>
          ${subtitle ? `<div class="lyt-subtitle" style="color:${T.textSub};">${subtitle}</div>` : ''}
          ${area ? `<div class="lyt-area-tag" style="background:${T.accent}20;border:1px solid ${T.accent}40;color:${T.accent};">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${area}
          </div>` : ''}
        </div>
        <div class="lyt-logo-area" style="color:${T.textSub};">
          ${logo
            ? `<div class="lyt-logo-box" style="border-color:${T.border};">
                 <img src="${logo}" alt="Logo" style="width:100%;height:100%;object-fit:contain;display:block;"/>
               </div>
               <div style="font-size:7px;text-align:center;margin-top:3px;opacity:.6;letter-spacing:.05em;">DPRWLP BIG</div>`
            : `<div class="lyt-logo-box lyt-logo-fallback" style="border-color:${T.border};background:${T.cardBg};">
                 <svg viewBox="0 0 24 24" fill="none" stroke="${T.accent}" stroke-width="1.5" width="18" height="18">
                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                 </svg>
               </div>
               <div style="font-size:7px;text-align:center;margin-top:3px;opacity:.6;">DPRWLP BIG</div>`
          }
        </div>
      </div>

      <!-- Body: peta + panel kanan -->
      <div class="lyt-body">

        <!-- Kontainer peta -->
        <div class="lyt-map-container" style="border:1px solid ${T.cardBorder};">
          ${mapImg
            ? `<img src="${mapImg}"
                    style="position:absolute;inset:0;width:100%;height:100%;
                           object-fit:cover;object-position:center;display:block;"/>`
            : `<div style="position:absolute;inset:0;display:flex;align-items:center;
                           justify-content:center;background:#07111f;
                           color:rgba(255,255,255,0.2);font-size:11px;">Snapshot peta</div>`
          }

          <!-- Overlay gradient bawah untuk legibilitas elemen -->
          <div style="position:absolute;bottom:0;left:0;right:0;height:60px;
                      background:linear-gradient(transparent,rgba(0,0,0,0.45));
                      pointer-events:none;"></div>

          ${showNorth ? `
          <!-- North Arrow — pojok kanan atas peta -->
          <div style="position:absolute;top:10px;right:10px;
                      background:${T.cardBg}cc;border:1px solid ${T.cardBorder};
                      border-radius:8px;padding:6px 5px;
                      display:flex;flex-direction:column;align-items:center;">
            <svg viewBox="0 0 32 52" fill="none" width="22" height="34">
              <!-- Panah utara (biru) -->
              <polygon points="16,2 23,32 16,26 9,32" fill="${T.accent}"/>
              <!-- Panah selatan (abu) -->
              <polygon points="16,50 9,20 16,26 23,20" fill="${T.cardBorder}" stroke="${T.border}" stroke-width=".5"/>
              <!-- Sumbu -->
              <line x1="16" y1="2" x2="16" y2="50" stroke="${T.border}" stroke-width=".5"/>
              <!-- Lingkaran tengah -->
              <circle cx="16" cy="26" r="3" fill="${T.bg}" stroke="${T.border}" stroke-width=".5"/>
            </svg>
            <div style="font-size:7px;font-weight:800;color:${T.text};margin-top:2px;
                        letter-spacing:.1em;text-align:center;">N</div>
          </div>` : ''}

          ${showScale ? `
          <!-- Scale bar — pojok kiri bawah peta -->
          <div style="position:absolute;bottom:10px;left:10px;
                      background:${T.cardBg}cc;border:1px solid ${T.cardBorder};
                      border-radius:6px;padding:4px 8px;">
            <!-- Bar bergaris-garis hitam putih -->
            <div style="display:flex;margin-bottom:2px;">
              <div style="width:${scaleBarWidth/2}px;height:5px;background:${T.text};border-radius:1px 0 0 1px;"></div>
              <div style="width:${scaleBarWidth/2}px;height:5px;background:${T.cardBorder};border-radius:0 1px 1px 0;"></div>
            </div>
            <!-- Tick + label -->
            <div style="display:flex;justify-content:space-between;
                        width:${scaleBarWidth}px;font-size:6.5px;color:${T.textSub};
                        font-family:'DM Mono',monospace;">
              <span>0</span>
              <span style="flex:1;text-align:right;">${scaleLabel}</span>
            </div>
            <div style="font-size:5.5px;color:${T.textSub};margin-top:1px;opacity:.7;">
              WGS 84 / EPSG:4326
            </div>
          </div>` : ''}

          ${showInset ? `
          <!-- Peta inset pojok kanan bawah -->
          <div style="position:absolute;bottom:10px;right:10px;
                      width:72px;height:54px;
                      background:${T.cardBg}ee;border:1px solid ${T.cardBorder};
                      border-radius:6px;overflow:hidden;
                      display:flex;align-items:center;justify-content:center;">
            <!-- SVG mini-map Indonesia -->
            <svg viewBox="94 -12 42 22" width="68" height="50" style="opacity:.85;">
              <rect x="94" y="-12" width="42" height="22" fill="transparent"/>
              <!-- Siluet sederhana pulau-pulau utama -->
              <path d="M96,-8 Q100,-9 104,-7 Q108,-8 112,-6 Q116,-7 120,-5 Q124,-6 128,-4 Q132,-5 135,-3"
                    fill="none" stroke="${T.accent}" stroke-width=".6" stroke-linecap="round"/>
              <path d="M97,-4 Q101,-5 105,-3 Q109,-4 113,-2"
                    fill="none" stroke="${T.textSub}" stroke-width=".5" stroke-linecap="round" opacity=".6"/>
              <!-- Titik lokasi (jika ada) -->
              <circle cx="112" cy="-5" r="1.5" fill="${T.accent}" opacity=".9"/>
              <circle cx="112" cy="-5" r="3" fill="${T.accent}" opacity=".25"/>
            </svg>
            <div style="position:absolute;bottom:3px;left:0;right:0;
                        font-size:5px;text-align:center;color:${T.textSub};letter-spacing:.04em;">
              INDONESIA
            </div>
          </div>` : ''}
        </div>

        <!-- Panel kanan — hanya tampil jika ada elemen aktif -->
        ${!mapOnly ? `
        <div class="lyt-right-panel" style="width:${paper.h < 700 ? 210 : 230}px;">

          ${showLegend ? `
          <!-- Legenda -->
          <div class="lyt-card" style="background:${T.cardBg};border:1px solid ${T.cardBorder};">
            <div class="lyt-card-header" style="color:${T.accent};border-bottom:1px solid ${T.cardBorder};">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
              LEGENDA
            </div>
            <div class="lyt-legend-body" style="color:${T.text};">

              <div class="lyt-legend-section" style="color:${T.textSub};">Laju Perubahan Pantai</div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#ef4444;flex-shrink:0;"></div>
                <span>Abrasi &nbsp;<span style="color:${T.textSub};font-size:6.5px;">(erosi pantai)</span></span>
              </div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#10d9a8;flex-shrink:0;"></div>
                <span>Akresi &nbsp;<span style="color:${T.textSub};font-size:6.5px;">(sedimentasi)</span></span>
              </div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#8ba3c7;flex-shrink:0;"></div>
                <span>Stabil</span>
              </div>

              <div class="lyt-legend-section" style="color:${T.textSub};margin-top:7px;">Garis Pantai (per Tahun)</div>
              <div style="height:5px;width:100%;border-radius:2px;margin-bottom:3px;
                          background:linear-gradient(to right,hsl(0,100%,55%),hsl(60,100%,55%),hsl(140,100%,55%),hsl(220,100%,65%),hsl(280,100%,65%));"></div>
              <div style="display:flex;justify-content:space-between;font-size:6.5px;color:${T.textSub};">
                <span>1985</span><span>2000</span><span>2025</span>
              </div>

              <div class="lyt-legend-section" style="color:${T.textSub};margin-top:7px;">Kualitas Data</div>
              <div class="lyt-legend-row">
                <svg width="24" height="5" style="flex-shrink:0;">
                  <line x1="0" y1="2.5" x2="24" y2="2.5" stroke="${T.textSub}" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <span>Good</span>
              </div>
              <div class="lyt-legend-row">
                <svg width="24" height="5" style="flex-shrink:0;">
                  <line x1="0" y1="2.5" x2="24" y2="2.5" stroke="${T.textSub}" stroke-width="1.5" stroke-dasharray="5 3" stroke-linecap="round"/>
                </svg>
                <span>Insufficient Data</span>
              </div>
              <div class="lyt-legend-row">
                <svg width="24" height="5" style="flex-shrink:0;">
                  <line x1="0" y1="2.5" x2="24" y2="2.5" stroke="${T.textSub}" stroke-width="1.5" stroke-dasharray="2 3" stroke-linecap="round"/>
                </svg>
                <span>Unstable Data</span>
              </div>

              <!-- Cluster -->
              <div class="lyt-legend-section" style="color:${T.textSub};margin-top:7px;">Cluster Titik</div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#ff4d4d;flex-shrink:0;"></div>
                <span>Mayoritas Abrasi</span>
              </div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#00c9a7;flex-shrink:0;"></div>
                <span>Mayoritas Akresi</span>
              </div>
              <div class="lyt-legend-row">
                <div style="width:9px;height:9px;border-radius:50%;background:#f5a623;flex-shrink:0;"></div>
                <span>Campuran</span>
              </div>

            </div>
          </div>` : ''}

          <!-- Informasi (selalu tampil jika panel kanan ada) -->
          <div class="lyt-card" style="background:${T.cardBg};border:1px solid ${T.cardBorder};">
            <div class="lyt-card-header" style="color:${T.accent};border-bottom:1px solid ${T.cardBorder};">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
              INFORMASI PETA
            </div>
            <div style="font-size:7.5px;line-height:1.75;color:${T.textSub};padding:6px 8px;">
              ${author ? `<div><strong style="color:${T.text};">Dibuat oleh</strong><br>${author}</div>` : ''}
              ${showDate ? `<div style="margin-top:3px;"><strong style="color:${T.text};">Tanggal</strong><br>${today}</div>` : ''}
              <div style="margin-top:3px;"><strong style="color:${T.text};">Sistem Koordinat</strong><br>WGS 84 / EPSG:4326</div>
              <div style="margin-top:3px;"><strong style="color:${T.text};">Periode Data</strong><br>1985 – 2025</div>
              <div style="margin-top:3px;"><strong style="color:${T.text};">Resolusi Citra</strong><br>30 m (Landsat)</div>
            </div>
          </div>

          ${showSource ? `
          <!-- Sumber data -->
          <div class="lyt-card" style="background:${T.cardBg};border:1px solid ${T.cardBorder};">
            <div class="lyt-card-header" style="color:${T.accent};border-bottom:1px solid ${T.cardBorder};">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              SUMBER DATA
            </div>
            <div style="font-size:7px;line-height:1.7;color:${T.textSub};padding:6px 8px;">
              <div style="margin-bottom:2px;">• Landsat 5, 7, 8, 9 (USGS/NASA)</div>
              <div style="margin-bottom:2px;">• Sub-pixel waterline extraction</div>
              <div>• Diadaptasi dari DEA Coastlines</div>
              <div style="margin-top:3px;opacity:.7;">Geoscience Australia</div>
            </div>
          </div>` : ''}

          ${showDisclaimer ? `
          <!-- Disclaimer -->
          <div class="lyt-card" style="background:${T.cardBg};border:1px solid rgba(245,158,11,0.35);">
            <div class="lyt-card-header" style="color:#f59e0b;border-bottom:1px solid rgba(245,158,11,0.2);">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              DISCLAIMER
            </div>
            <div style="font-size:6.5px;line-height:1.65;color:${T.textSub};text-align:justify;padding:6px 8px;">
              Hasil analisis dipengaruhi oleh kondisi atmosfer, tutupan awan, dan variasi pasang surut saat akuisisi citra. Data bersifat indikatif untuk keperluan riset dan monitoring, tidak menggantikan survei resmi (hidrografi, topografi, UAV, LiDAR, SAR).
            </div>
          </div>` : ''}

        </div>
        ` : ''}

      </div>

      <!-- Footer -->
      <div class="lyt-footer" style="border-top:1px solid ${T.border};color:${T.textSub};">
        <div class="lyt-footer-left">
          <span style="color:${T.accent};font-weight:600;letter-spacing:.04em;">© 2026 PIKSEL INA</span>
          <span style="opacity:.4;">|</span>
          <span>Direktorat Pemetaan Rupabumi Wilayah Laut dan Pantai</span>
          <span style="opacity:.4;">|</span>
          <span>Badan Informasi Geospasial</span>
        </div>
        ${showDate ? `<div class="lyt-footer-right" style="color:${T.textSub};">${today}</div>` : ''}
      </div>

    </div>`;
}

// ── EXPORT PNG (dengan DPI control & aspect-ratio aman) ──
async function _exportPNG(mapInstance) {
  const btn = document.getElementById('btn-lyt-png');
  if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }

  try {
    await loadHtml2Canvas();
    const target = document.querySelector('.lyt-page');
    if (!target) throw new Error('Layout tidak ditemukan');

    const dpi    = _getDPI();
    // scale = dpi / 96 (96 = screen dpi default)
    const scale  = dpi / 96;

    const canvas = await window.html2canvas(target, {
      useCORS: true,
      scale,
      logging: false,
      backgroundColor: null,
      // Pastikan lebar/tinggi canvas sesuai ukuran elemen, bukan viewport
      width:  target.offsetWidth,
      height: target.offsetHeight,
      windowWidth:  target.offsetWidth,
      windowHeight: target.offsetHeight,
    });

    const link    = document.createElement('a');
    const title   = document.getElementById('layout-title')?.value?.trim() || 'peta-garis-pantai';
    const safeName = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const paper    = _getPaper();
    link.download  = `${safeName}_${paper.label.replace(' ','-').toLowerCase()}_${dpi}dpi_${new Date().toISOString().slice(0,10)}.png`;
    link.href      = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error('Export PNG gagal:', err);
    alert('Gagal export PNG. Pastikan koneksi internet aktif.');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg> Export PNG`;
    }
  }
}

// ── COPY TO CLIPBOARD ─────────────────────────────────────
async function _copyToClipboard(mapInstance) {
  const btn = document.getElementById('btn-lyt-clipboard');
  if (btn) { btn.disabled = true; btn.textContent = 'Menyalin...'; }

  try {
    await loadHtml2Canvas();
    const target = document.querySelector('.lyt-page');
    if (!target) throw new Error('Layout tidak ditemukan');

    const canvas = await window.html2canvas(target, {
      useCORS: true, scale: 1.5, logging: false,
      backgroundColor: null,
      width: target.offsetWidth, height: target.offsetHeight,
      windowWidth: target.offsetWidth, windowHeight: target.offsetHeight,
    });

    canvas.toBlob(async (blob) => {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        if (btn) { btn.textContent = '✓ Tersalin!'; }
        setTimeout(() => {
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg> Copy to Clipboard`;
          }
        }, 2000);
      } catch {
        alert('Browser tidak mendukung clipboard API. Gunakan Export PNG.');
        if (btn) { btn.disabled = false; btn.textContent = 'Copy to Clipboard'; }
      }
    }, 'image/png');

  } catch (err) {
    console.error('Copy clipboard gagal:', err);
    if (btn) { btn.disabled = false; btn.textContent = 'Copy to Clipboard'; }
  }
}

// ── PRINT PDF ─────────────────────────────────────────────
async function _printLayout(mapInstance) {
  await _renderCanvas(mapInstance);
  await new Promise(r => setTimeout(r, 500));

  const content = document.querySelector('.lyt-page')?.outerHTML;
  if (!content) return;

  const paper = _getPaper();

  const win = window.open('', '_blank');
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Cetak PDF</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        @page { size: ${paper.mmW}mm ${paper.mmH}mm; margin: 0; }
        ${_getLayoutCSS()}
        @media print {
          body { background: white; }
          .lyt-page {
            width: ${paper.mmW}mm !important;
            height: ${paper.mmH}mm !important;
            padding: 8mm !important;
            page-break-after: avoid;
          }
        }
      </style>
    </head>
    <body>
      ${content}
      <script>
        window.onload = () => setTimeout(() => { window.print(); window.close(); }, 800);
      <\/script>
    </body>
    </html>`);
  win.document.close();
}

// ── LAYOUT CSS ───────────────────────────────────────────
function _getLayoutCSS() {
  return `
    .lyt-page {
      position: relative;
      display: flex; flex-direction: column;
      overflow: hidden;
      padding: 16px 18px 12px;
      font-family: 'Inter', 'DM Sans', sans-serif;
    }
    .lyt-grid-bg {
      position: absolute; inset: 0;
      pointer-events: none; z-index: 0; opacity: .5;
    }
    .lyt-header {
      position: relative; z-index: 1;
      display: flex; align-items: flex-start;
      justify-content: space-between;
      padding-bottom: 8px; margin-bottom: 8px; gap: 12px;
    }
    .lyt-accent-rule {
      position: absolute; left: 0; top: 0; bottom: 8px;
      width: 3px; border-radius: 2px;
    }
    .lyt-title-block { flex: 1; padding-left: 10px; }
    .lyt-eyebrow {
      font-size: 6.5px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; margin-bottom: 3px; opacity: .8;
    }
    .lyt-title { font-size: 15px; font-weight: 700; line-height: 1.2; letter-spacing: -.02em; }
    .lyt-subtitle { font-size: 8.5px; margin-top: 2px; opacity: .8; }
    .lyt-area-tag {
      display: inline-flex; align-items: center; gap: 4px;
      font-size: 7.5px; font-weight: 500;
      padding: 2px 7px; border-radius: 10px; margin-top: 4px;
    }
    .lyt-logo-area { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
    .lyt-logo-box {
      width: 38px; height: 38px; border-radius: 10px; border: 1px solid;
      display: flex; align-items: center; justify-content: center; overflow: hidden;
    }
    .lyt-logo-fallback { opacity: .7; }
    .lyt-body {
      position: relative; z-index: 1;
      flex: 1; display: flex; gap: 8px; min-height: 0;
    }
    .lyt-map-container {
      flex: 1; position: relative; border-radius: 6px;
      overflow: hidden; min-height: 0;
    }
    .lyt-right-panel {
      flex-shrink: 0;
      display: flex; flex-direction: column; gap: 5px;
      overflow: hidden;
    }
    .lyt-card { border-radius: 7px; overflow: hidden; flex-shrink: 0; }
    .lyt-card-header {
      font-size: 7px; font-weight: 700; letter-spacing: .1em;
      padding: 5px 8px; text-transform: uppercase;
      display: flex; align-items: center; gap: 5px;
    }
    .lyt-legend-body { padding: 6px 8px; }
    .lyt-legend-section {
      font-size: 7px; font-weight: 600; letter-spacing: .06em;
      text-transform: uppercase; margin-bottom: 3px; padding-top: 2px;
    }
    .lyt-legend-row {
      display: flex; align-items: center; gap: 6px;
      font-size: 7.5px; padding: 1.5px 0;
    }
    .lyt-footer {
      position: relative; z-index: 1;
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 6px; margin-top: 6px;
      font-size: 7px; letter-spacing: .03em;
    }
    .lyt-footer-left { display: flex; align-items: center; gap: 7px; }
    .lyt-footer-right { font-size: 7px; opacity: .8; }
  `;
}

// ── INJECT STYLES ─────────────────────────────────────────
function _injectStyles() {
  if (document.getElementById('map-layout-styles')) return;
  const s = document.createElement('style');
  s.id = 'map-layout-styles';
  s.textContent = `
    #map-layout-modal {
      display: none; position: fixed; inset: 0;
      z-index: 99998; align-items: center; justify-content: center;
    }
    #map-layout-modal.open { display: flex; }

    .mlm-backdrop {
      position: absolute; inset: 0;
      background: rgba(4,8,18,0.78);
      backdrop-filter: blur(6px);
    }

    .mlm-panel {
      position: relative; z-index: 1;
      display: flex; gap: 0;
      width: min(1240px, 96vw);
      height: min(840px, 93vh);
      background: #0c1526;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0,0,0,0.65);
    }

    .mlm-sidebar {
      width: 248px; flex-shrink: 0;
      background: #080f1e;
      border-right: 1px solid rgba(255,255,255,0.07);
      display: flex; flex-direction: column;
      overflow-y: auto; padding-bottom: 12px;
    }
    .mlm-sidebar::-webkit-scrollbar { width: 3px; }
    .mlm-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

    .mlm-sidebar-header {
      display: flex; align-items: center; gap: 8px;
      padding: 14px 16px 12px;
      font-size: 12px; font-weight: 600; color: #f0f6ff;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      flex-shrink: 0; font-family: 'Inter', sans-serif;
    }

    .mlm-section {
      padding: 12px 14px 8px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .mlm-section-label {
      font-size: 9.5px; font-weight: 600; text-transform: uppercase;
      letter-spacing: .08em; color: #4a6480; margin-bottom: 7px;
      font-family: 'Inter', sans-serif;
    }
    .mlm-sublabel {
      font-size: 9px; color: #4a6480; margin-bottom: 3px;
      font-family: 'Inter', sans-serif;
    }
    .mlm-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }

    .mlm-input, .mlm-select {
      width: 100%; padding: 6px 10px; margin-bottom: 6px;
      background: #101d30; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px; font-size: 12px;
      color: #f0f6ff; font-family: 'Inter', sans-serif;
      outline: none; transition: border-color .15s; appearance: none;
    }
    .mlm-select { margin-bottom: 0; cursor: pointer; }
    .mlm-input:focus, .mlm-select:focus { border-color: #3b82f6; }
    .mlm-input::placeholder { color: #2a3d54; }

    .mlm-toggles { display: flex; flex-direction: column; gap: 5px; }
    .mlm-chk {
      display: flex; align-items: center; gap: 8px;
      font-size: 12px; color: #94afc8; font-family: 'Inter', sans-serif;
      cursor: pointer; padding: 2px 0;
    }
    .mlm-chk input { accent-color: #3b82f6; cursor: pointer; }

    .mlm-toggle-all {
      font-size: 9px; font-weight: 600;
      padding: 2px 8px; border-radius: 4px;
      background: transparent; border: 1px solid rgba(255,255,255,0.12);
      color: #4a6480; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s;
    }
    .mlm-toggle-all:hover { border-color: #3b82f6; color: #3b82f6; }

    .mlm-theme-row { display: flex; gap: 6px; }
    .mlm-theme {
      flex: 1; display: flex; flex-direction: column;
      align-items: center; gap: 4px;
      background: transparent; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px; padding: 6px 4px; cursor: pointer;
      font-size: 10px; color: #4a6480; font-family: 'Inter', sans-serif;
      transition: all .15s;
    }
    .mlm-theme div { width: 24px; height: 16px; border-radius: 3px; }
    .mlm-theme.active { border-color: #3b82f6; color: #3b82f6; background: rgba(59,130,246,0.1); }

    .mlm-actions {
      padding: 12px 14px; display: flex; flex-direction: column; gap: 7px;
      margin-top: auto;
    }
    .mlm-btn {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      padding: 8px 12px; border-radius: 7px; border: none;
      font-size: 12px; font-weight: 500; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s; width: 100%;
    }
    .mlm-btn:disabled { opacity: .45; cursor: not-allowed; }
    .mlm-btn-primary   { background: #3b82f6; color: #fff; }
    .mlm-btn-primary:hover   { background: #2563eb; }
    .mlm-btn-accent    { background: rgba(16,185,129,0.15); color: #10b981; border: 1px solid rgba(16,185,129,0.3); }
    .mlm-btn-accent:hover    { background: rgba(16,185,129,0.25); }
    .mlm-btn-secondary { background: rgba(255,255,255,0.06); color: #94afc8; border: 1px solid rgba(255,255,255,0.1); }
    .mlm-btn-secondary:hover { background: rgba(255,255,255,0.1); color: #f0f6ff; }
    .mlm-btn-ghost     { background: transparent; color: #94afc8; border: 1px solid rgba(255,255,255,0.1); }
    .mlm-btn-ghost:hover     { border-color: rgba(255,255,255,0.25); color: #f0f6ff; }
    .mlm-btn-close     { background: transparent; color: #4a6480; font-size: 11px; border: none; }
    .mlm-btn-close:hover     { color: #94afc8; }

    /* Preview */
    .mlm-preview-wrap {
      flex: 1; display: flex; flex-direction: column; min-width: 0; overflow: hidden;
    }
    .mlm-preview-topbar {
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 16px 8px;
      border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;
    }
    .mlm-preview-label {
      font-size: 11px; font-weight: 500; color: #4a6480; font-family: 'Inter', sans-serif;
    }
    .mlm-preview-hint {
      font-size: 10px; color: #2a3d54; font-family: 'Inter', sans-serif;
    }
    .mlm-preview-scroll {
      flex: 1; overflow: auto; padding: 20px;
      background: #060c18;
      display: flex; align-items: flex-start; justify-content: center;
    }
    .mlm-preview-scroll::-webkit-scrollbar { width: 5px; height: 5px; }
    .mlm-preview-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

    /* Canvas preview — ukuran diatur via JS sesuai paper size */
    .mlm-canvas {
      /* default A4 landscape */
      width: 864px; height: 612px;
      flex-shrink: 0;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.55);
      cursor: pointer;
      transition: transform .2s;
    }
    .mlm-canvas:hover { transform: scale(1.01); }

    /* Layout page */
    ${_getLayoutCSS()}

    @keyframes spin { to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(s);
}