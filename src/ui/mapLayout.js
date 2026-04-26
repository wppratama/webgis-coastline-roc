/**
 * src/ui/mapLayout.js
 * ─────────────────────────────────────────────────────────
 * Map Layout Tool — export peta siap cetak (PNG + Print PDF)
 * Elemen kartografi: judul, legenda, north arrow, skala,
 *                    sumber data, disclaimer, tanggal
 *
 * Cara pakai di main.js:
 *   import { setupMapLayout } from './src/ui/mapLayout.js';
 *   setupMapLayout(map, tileLoader);  // Leaflet
 *   // atau
 *   setupMapLayout(map, maplibreCtrl); // MapLibre
 */

// html2canvas di-load dari CDN saat pertama kali dibutuhkan
const HTML2CANVAS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';

let _html2canvasLoaded = false;

async function loadHtml2Canvas() {
  if (_html2canvasLoaded || window.html2canvas) {
    _html2canvasLoaded = true;
    return;
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = HTML2CANVAS_CDN;
    s.onload  = () => { _html2canvasLoaded = true; resolve(); };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// ── PUBLIC SETUP ─────────────────────────────────────────────

export function setupMapLayout(mapInstance, layerCtrl) {
  _injectStyles();
  _buildModal(mapInstance, layerCtrl);
  _buildToolbarButton(mapInstance, layerCtrl);
}

// ── TOOLBAR BUTTON ───────────────────────────────────────────

function _buildToolbarButton(mapInstance, layerCtrl) {
  // Cari tool-group terakhir di toolbar
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

// ── MODAL BUILD ──────────────────────────────────────────────

function _buildModal(mapInstance, layerCtrl) {
  if (document.getElementById('map-layout-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'map-layout-modal';
  modal.innerHTML = `
    <div class="mlm-backdrop" id="mlm-backdrop"></div>
    <div class="mlm-panel">

      <!-- Header panel kiri -->
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
          <input class="mlm-input" id="layout-author"
                 placeholder="Nama pembuat peta"/>
          <input class="mlm-input" id="layout-area"
                 placeholder="Nama area/wilayah yang dipetakan"/>
        </div>

        <!-- Toggle elemen -->
        <div class="mlm-section">
          <div class="mlm-section-label">Elemen Kartografi</div>
          <div class="mlm-toggles">
            <label class="mlm-chk"><input type="checkbox" id="lyt-legend"    checked> Legenda</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-north"     checked> North Arrow</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-scale"     checked> Skala Bar</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-source"    checked> Sumber Data</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-disclaimer"checked> Disclaimer</label>
            <label class="mlm-chk"><input type="checkbox" id="lyt-date"      checked> Tanggal</label>
          </div>
        </div>

        <!-- Warna background -->
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

        <!-- Action buttons -->
        <div class="mlm-actions">
          <button class="mlm-btn mlm-btn-secondary" id="btn-lyt-refresh" title="Refresh preview">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 .49-3.18"/>
            </svg>
            Refresh
          </button>
          <button class="mlm-btn mlm-btn-primary" id="btn-lyt-png">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export PNG
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
        <div class="mlm-preview-label">Preview Layout (A4 Landscape)</div>
        <div class="mlm-preview-scroll">
          <div class="mlm-canvas" id="mlm-canvas">
            <!-- Di-generate oleh _renderCanvas() -->
          </div>
        </div>
      </div>

    </div>`;

  document.body.appendChild(modal);

  // Events
  document.getElementById('mlm-backdrop')
    .addEventListener('click', _closeModal);
  document.getElementById('btn-lyt-close')
    .addEventListener('click', _closeModal);
  document.getElementById('btn-lyt-refresh')
    .addEventListener('click', () => _renderCanvas(mapInstance));
  document.getElementById('btn-lyt-png')
    .addEventListener('click', () => _exportPNG(mapInstance));
  document.getElementById('btn-lyt-print')
    .addEventListener('click', () => _printLayout(mapInstance));

  // Theme toggle
  document.querySelectorAll('.mlm-theme').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mlm-theme').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _renderCanvas(mapInstance);
    });
  });

  // Live update saat input berubah
  ['layout-title','layout-subtitle','layout-author','layout-area'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      clearTimeout(window._lytDebounce);
      window._lytDebounce = setTimeout(() => _renderCanvas(mapInstance), 400);
    });
  });

  ['lyt-legend','lyt-north','lyt-scale','lyt-source','lyt-disclaimer','lyt-date'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', () => _renderCanvas(mapInstance));
  });
}

// ── OPEN / CLOSE MODAL ───────────────────────────────────────

function _openModal(mapInstance, layerCtrl) {
  const modal = document.getElementById('map-layout-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Aktifkan zoom fleksibel otomatis saat layout mode
  const flexBtn = document.getElementById('btn-flex-zoom');
  if (flexBtn && !flexBtn.classList.contains('active')) {
    flexBtn.click();
  }

  // Render canvas setelah modal terbuka
  setTimeout(() => _renderCanvas(mapInstance), 150);
}

function _closeModal() {
  const modal = document.getElementById('map-layout-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ── RENDER CANVAS ────────────────────────────────────────────

function _getTheme() {
  const active = document.querySelector('.mlm-theme.active')?.dataset.theme ?? 'dark';
  const themes = {
    dark:  { bg: '#080f1e', text: '#f0f6ff', textSub: '#94afc8', border: 'rgba(255,255,255,0.12)', accent: '#3b82f6', cardBg: '#0c1526', cardBorder: 'rgba(255,255,255,0.08)' },
    light: { bg: '#f1f5f9', text: '#1e293b', textSub: '#64748b', border: '#cbd5e1', accent: '#2563eb', cardBg: '#ffffff', cardBorder: '#e2e8f0' },
    white: { bg: '#ffffff', text: '#1e293b', textSub: '#64748b', border: '#e2e8f0', accent: '#2563eb', cardBg: '#f8fafc', cardBorder: '#e2e8f0' },
  };
  return themes[active];
}

function _val(id) {
  return document.getElementById(id)?.value?.trim() ?? '';
}

function _chk(id) {
  return document.getElementById(id)?.checked ?? true;
}

async function _getMapSnapshot() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return null;
  await loadHtml2Canvas();
  const canvas = await window.html2canvas(mapEl, {
    useCORS:         true,
    allowTaint:      true,
    scale:           1.5,
    backgroundColor: '#080f1e',
    logging:         false,
  });
  return canvas.toDataURL('image/jpeg', 0.92);
}

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

  const mapImg = await _getMapSnapshot();
  const T      = _getTheme();
  const title    = _val('layout-title')    || 'Peta Dinamika Garis Pantai';
  const subtitle = _val('layout-subtitle') || '';
  const author   = _val('layout-author')  || '';
  const area     = _val('layout-area')    || '';
  const showLegend     = _chk('lyt-legend');
  const showNorth      = _chk('lyt-north');
  const showScale      = _chk('lyt-scale');
  const showSource     = _chk('lyt-source');
  const showDisclaimer = _chk('lyt-disclaimer');
  const showDate       = _chk('lyt-date');

  const today = new Date().toLocaleDateString('id-ID', {
    day:'numeric', month:'long', year:'numeric'
  });

  canvasEl.innerHTML = `
    <div class="lyt-page" style="background:${T.bg};color:${T.text};font-family:'Inter',sans-serif;">

      <!-- Header -->
      <div class="lyt-header" style="border-bottom:2px solid ${T.accent};">
        <div class="lyt-title-block">
          <div class="lyt-title" style="color:${T.text};">${title}</div>
          ${subtitle ? `<div class="lyt-subtitle" style="color:${T.textSub};">${subtitle}</div>` : ''}
          ${area ? `<div class="lyt-area" style="color:${T.accent};">📍 ${area}</div>` : ''}
        </div>
        <div class="lyt-logo-area" style="color:${T.textSub};">
          <div class="lyt-logo-box" style="border-color:${T.border};">
            <img src="public/logo/logo.png" alt="Logo" style="width:100%; height:100%; object-fit:contain;">
          </div>
          <div style="font-size:8px;text-align:center;margin-top:3px;opacity:.7;">DPRWLP BIG</div>
        </div>
      </div>

      <!-- Main content -->
      <div class="lyt-body">

        <!-- Peta -->
        <div class="lyt-map-container" style="border:1px solid ${T.cardBorder};">
          ${mapImg
            ? `<img src="${mapImg}" style="width:100%;height:100%;object-fit:cover;display:block;"/>`
            : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#07111f;color:rgba(255,255,255,0.3);">Snapshot peta</div>`
          }

          ${showNorth ? `
          <!-- North Arrow -->
          <div class="lyt-north" style="background:${T.cardBg};border:1px solid ${T.cardBorder};">
            <svg viewBox="0 0 40 60" fill="none" width="28" height="42">
              <polygon points="20,2 28,38 20,32 12,38" fill="${T.accent}"/>
              <polygon points="20,58 12,22 20,28 28,22" fill="${T.cardBorder}"/>
              <line x1="20" y1="2" x2="20" y2="58" stroke="${T.border}" stroke-width=".5"/>
            </svg>
            <div style="font-size:8px;font-weight:700;color:${T.text};margin-top:1px;text-align:center;">N</div>
          </div>` : ''}

          ${showScale ? `
          <!-- Scale bar -->
          <div class="lyt-scale" style="background:${T.cardBg};border:1px solid ${T.cardBorder};">
            <div class="lyt-scale-bar">
              <div style="background:${T.text};height:100%;width:50%;display:inline-block;"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:7px;color:${T.textSub};margin-top:2px;">
              <span>0</span><span>50 km</span><span>100 km</span>
            </div>
          </div>` : ''}
        </div>

        <!-- Panel kanan -->
        <div class="lyt-right-panel">

          ${showLegend ? `
          <!-- Legenda -->
          <div class="lyt-card" style="background:${T.cardBg};border:1px solid ${T.cardBorder};">
            <div class="lyt-card-title" style="color:${T.accent};border-bottom:1px solid ${T.cardBorder};">
              LEGENDA
            </div>
            <div class="lyt-legend-body" style="color:${T.text};">

              <div class="lyt-legend-section" style="color:${T.textSub};">Laju Perubahan</div>
              <div class="lyt-legend-row">
                <div class="lyt-legend-dot" style="background:#ef4444;"></div>
                <span>Abrasi (erosi pantai)</span>
              </div>
              <div class="lyt-legend-row">
                <div class="lyt-legend-dot" style="background:#10d9a8;"></div>
                <span>Akresi (sedimentasi)</span>
              </div>
              <div class="lyt-legend-row">
                <div class="lyt-legend-dot" style="background:#8ba3c7;"></div>
                <span>Stabil</span>
              </div>

              <div class="lyt-legend-section" style="color:${T.textSub};margin-top:7px;">Garis Pantai</div>
              <div style="height:4px;width:100%;border-radius:2px;margin-bottom:4px;
                          background:linear-gradient(to right,hsl(0,100%,55%),hsl(140,100%,55%),hsl(280,100%,55%));"></div>
              <div style="display:flex;justify-content:space-between;font-size:7.5px;color:${T.textSub};">
                <span>1985</span><span>2005</span><span>2025</span>
              </div>

              <div class="lyt-legend-section" style="color:${T.textSub};margin-top:7px;">Kualitas Data</div>
              <div class="lyt-legend-row">
                <svg width="28" height="5"><line x1="0" y1="2.5" x2="28" y2="2.5" stroke="${T.textSub}" stroke-width="1.5" stroke-linecap="round"/></svg>
                <span>Good</span>
              </div>
              <div class="lyt-legend-row">
                <svg width="28" height="5"><line x1="0" y1="2.5" x2="28" y2="2.5" stroke="${T.textSub}" stroke-width="1.5" stroke-dasharray="5 3" stroke-linecap="round"/></svg>
                <span>Insufficient Data</span>
              </div>
              <div class="lyt-legend-row">
                <svg width="28" height="5"><line x1="0" y1="2.5" x2="28" y2="2.5" stroke="${T.textSub}" stroke-width="1.5" stroke-dasharray="2 3" stroke-linecap="round"/></svg>
                <span>Unstable Data</span>
              </div>

            </div>
          </div>` : ''}

          <!-- Info box -->
          <div class="lyt-card" style="background:${T.cardBg};border:1px solid ${T.cardBorder};">
            <div class="lyt-card-title" style="color:${T.accent};border-bottom:1px solid ${T.cardBorder};">
              INFORMASI
            </div>
            <div style="font-size:8px;line-height:1.7;color:${T.textSub};">
              ${author ? `<div><strong style="color:${T.text};">Pembuat:</strong> ${author}</div>` : ''}
              ${showDate ? `<div><strong style="color:${T.text};">Tanggal:</strong> ${today}</div>` : ''}
              <div><strong style="color:${T.text};">Proyeksi:</strong> WGS 84 / EPSG:4326</div>
              <div><strong style="color:${T.text};">Periode:</strong> 1985–2025</div>
              <div><strong style="color:${T.text};">Resolusi:</strong> 30 meter (Landsat)</div>
            </div>
          </div>

          ${showSource ? `
          <!-- Sumber data -->
          <div class="lyt-card" style="background:${T.cardBg};border:1px solid ${T.cardBorder};">
            <div class="lyt-card-title" style="color:${T.accent};border-bottom:1px solid ${T.cardBorder};">
              SUMBER DATA
            </div>
            <div style="font-size:7.5px;line-height:1.7;color:${T.textSub};">
              <div>• Citra Landsat 5, 7, 8, 9 (USGS/NASA)</div>
              <div>• Metode: Sub-pixel waterline extraction</div>
              <div>• Diadaptasi dari DEA Coastlines - Geoscience Australia</div>
            </div>
          </div>` : ''}

          ${showDisclaimer ? `
          <!-- Disclaimer -->
          <div class="lyt-card" style="background:${T.cardBg};border:1px solid rgba(245,158,11,0.3);">
            <div class="lyt-card-title" style="color:#f59e0b;border-bottom:1px solid rgba(245,158,11,0.2);">
              DISCLAIMER
            </div>
            <div style="font-size:7px; line-height:1.65; color:${T.textSub}; text-align: justify;">
              Hasil analisis dipengaruhi oleh kondisi atmosfer, tutupan awan, dan variasi pasang surut saat akuisisi citra. Data bersifat indikatif untuk keperluan riset dan monitoring dan tidak menggantikan resmi seperti survei hidrografi, survei topografi terestris, pemetaan menggunakan UAV, LiDAR, Synthetic Aperture Radar (SAR), serta survei lapangan langsung lainya.
            </div>
          </div>` : ''}

        </div>
      </div>

      <!-- Footer -->
      <div class="lyt-footer" style="border-top:1px solid ${T.border};color:${T.textSub};">
        <span>Sistem Informasi Spasial Dinamika Garis Pantai Indonesia</span>
        <span style="opacity:.5;">•</span>
        <span>Indonesia Dynamics Coastlines &amp; Rates of Change</span>
        ${showDate ? `<span style="margin-left:auto;">${today}</span>` : ''}
      </div>

    </div>`;
}

// ── EXPORT PNG ───────────────────────────────────────────────

async function _exportPNG(mapInstance) {
  const btn = document.getElementById('btn-lyt-png');
  if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }

  try {
    await loadHtml2Canvas();
    const target = document.querySelector('.lyt-page');
    if (!target) throw new Error('Layout tidak ditemukan');

    const canvas = await window.html2canvas(target, {
      useCORS: true,
      scale:   2,
      logging: false,
      backgroundColor: null,
    });

    const link    = document.createElement('a');
    const title   = document.getElementById('layout-title')?.value?.trim()
                    || 'peta-garis-pantai';
    const safeName = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    link.download = `${safeName}_${new Date().toISOString().slice(0,10)}.png`;
    link.href     = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error('Export PNG gagal:', err);
    alert('Gagal export PNG. Pastikan koneksi internet aktif (untuk html2canvas CDN).');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg> Export PNG`; }
  }
}

// ── PRINT ────────────────────────────────────────────────────

async function _printLayout(mapInstance) {
  await _renderCanvas(mapInstance);
  await new Promise(r => setTimeout(r, 500));

  const content = document.querySelector('.lyt-page')?.outerHTML;
  if (!content) return;

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
        
        /* Paksa browser mencetak warna background */
        body { 
          -webkit-print-color-adjust: exact !important; 
          print-color-adjust: exact !important; 
          background: #333; /* Warna luar kertas */
        }
        
        @page { size: A4 landscape; margin: 0; }
        
        ${_getLayoutCSS()}
        
        /* Override khusus untuk print agar presisi A4 tanpa margin berlebih */
        @media print {
          body { background: white; }
          .lyt-page { 
            width: 297mm !important; 
            height: 210mm !important; 
            padding: 10mm !important; 
            page-break-after: avoid; 
          }
        }
      </style>
    </head>
    <body>
      ${content}
      <script>
        window.onload = function() {
          setTimeout(() => { window.print(); window.close(); }, 800);
        };
      </script>
    </body>
    </html>
  `);
  win.document.close();
}

// ── STYLES ───────────────────────────────────────────────────

function _getLayoutCSS() {
  return `
    .lyt-page {
      width: 100%; height: 100%; /* Agar mengikuti wadah preview */
      display: flex; flex-direction: column;
      overflow: hidden; padding: 24px; /* Sesuaikan margin tepi */
      font-family: 'Inter', sans-serif;
    }
    .lyt-header {
      display: flex; align-items: flex-start;
      justify-content: space-between;
      padding-bottom: 5px; margin-bottom: 6px;
    }
    .lyt-title-block { flex: 1; }
    .lyt-title { font-size: 16px; font-weight: 700; line-height: 1.2; letter-spacing: -.02em; }
    .lyt-subtitle { font-size: 9px; margin-top: 2px; }
    .lyt-area { font-size: 8.5px; margin-top: 3px; font-weight: 500; }
    .lyt-logo-area { display: flex; flex-direction: column; align-items: center; }
    .lyt-logo-box {
      width: 36px; height: 36px; border-radius: 8px; border: 1px solid;
      display: flex; align-items: center; justify-content: center;
    }
    .lyt-body {
      flex: 1; display: flex; gap: 6px; min-height: 0;
    }
    .lyt-map-container {
      flex: 1; position: relative; border-radius: 4px;
      overflow: hidden; min-height: 0;
    }
    .lyt-map-container img {
      transition: transform 0.3s ease;
      cursor: zoom-in;
    }
    .lyt-map-container img:hover {
      transform: scale(2.5); /* Angka 2.5 berarti di-zoom 2.5x lipat */
    }
    .lyt-north {
      position: absolute; top: 8px; right: 8px;
      padding: 4px 5px; border-radius: 6px;
      display: flex; flex-direction: column; align-items: center;
    }
    .lyt-scale {
      position: absolute; bottom: 8px; left: 8px;
      padding: 4px 8px; border-radius: 6px; min-width: 100px;
    }
    .lyt-scale-bar {
      height: 6px; width: 100%; border-radius: 1px;
      overflow: hidden; display: flex;
    }
    .lyt-right-panel {
      width: 230px; 
      flex-shrink: 0; /* PENTING: Mencegah panel tergencet gambar peta */
      display: flex; flex-direction: column; gap: 5px;
    }
    .lyt-card {
      border-radius: 6px; overflow: hidden;
    }
    .lyt-card-title {
      font-size: 7.5px; font-weight: 700; letter-spacing: .1em;
      padding: 4px 8px; text-transform: uppercase;
    }
    .lyt-legend-body { padding: 6px 8px; }
    .lyt-legend-section {
      font-size: 7.5px; font-weight: 600; letter-spacing: .06em;
      text-transform: uppercase; margin-bottom: 3px;
    }
    .lyt-legend-row {
      display: flex; align-items: center; gap: 6px;
      font-size: 8px; padding: 2px 0;
    }
    .lyt-legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .lyt-card div[style*="font-size:8px"],
    .lyt-card div[style*="font-size:7.5px"],
    .lyt-card div[style*="font-size:7px"] { padding: 6px 8px; }
    .lyt-footer {
      display: flex; align-items: center; gap: 8px;
      padding-top: 5px; margin-top: 5px; font-size: 7.5px;
    }
  `;
}

function _injectStyles() {
  if (document.getElementById('map-layout-styles')) return;
  const s = document.createElement('style');
  s.id = 'map-layout-styles';
  s.textContent = `
    /* Modal wrapper */
    #map-layout-modal {
      display: none; position: fixed; inset: 0;
      z-index: 99998; align-items: center; justify-content: center;
    }
    #map-layout-modal.open { display: flex; }

    .mlm-backdrop {
      position: absolute; inset: 0;
      background: rgba(4,8,18,0.75);
      backdrop-filter: blur(5px);
    }

    /* Main panel */
    .mlm-panel {
      position: relative; z-index: 1;
      display: flex; gap: 0;
      width: min(1200px, 96vw);
      height: min(820px, 92vh);
      background: #0c1526;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0,0,0,0.6);
    }

    /* Left sidebar */
    .mlm-sidebar {
      width: 240px; flex-shrink: 0;
      background: #080f1e;
      border-right: 1px solid rgba(255,255,255,0.07);
      display: flex; flex-direction: column;
      overflow-y: auto; padding-bottom: 12px;
    }
    .mlm-sidebar::-webkit-scrollbar { width: 3px; }
    .mlm-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }

    .mlm-sidebar-header {
      display: flex; align-items: center; gap: 8px;
      padding: 14px 16px 12px;
      font-size: 12px; font-weight: 600;
      color: #f0f6ff;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      flex-shrink: 0;
      font-family: 'Inter', sans-serif;
    }

    .mlm-section {
      padding: 12px 14px 8px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .mlm-section-label {
      font-size: 9.5px; font-weight: 600;
      text-transform: uppercase; letter-spacing: .08em;
      color: #4a6480; margin-bottom: 7px;
      font-family: 'Inter', sans-serif;
    }

    .mlm-input {
      width: 100%; padding: 6px 10px; margin-bottom: 6px;
      background: #101d30; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px; font-size: 12px;
      color: #f0f6ff; font-family: 'Inter', sans-serif;
      outline: none; transition: border-color .15s;
    }
    .mlm-input:focus { border-color: #3b82f6; }
    .mlm-input::placeholder { color: #2a3d54; }

    .mlm-toggles { display: flex; flex-direction: column; gap: 5px; }
    .mlm-chk {
      display: flex; align-items: center; gap: 8px;
      font-size: 12px; color: #94afc8;
      font-family: 'Inter', sans-serif;
      cursor: pointer; padding: 2px 0;
    }
    .mlm-chk input { accent-color: #3b82f6; cursor: pointer; }

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
    .mlm-theme:hover { border-color: rgba(255,255,255,0.2); color: #94afc8; }

    .mlm-actions {
      padding: 12px 14px;
      display: flex; flex-direction: column; gap: 7px;
      margin-top: auto;
    }

    .mlm-btn {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      padding: 8px 12px; border-radius: 7px; border: none;
      font-size: 12px; font-weight: 500;
      font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s; width: 100%;
    }
    .mlm-btn:disabled { opacity: .5; cursor: not-allowed; }
    .mlm-btn-primary   { background: #3b82f6; color: #fff; }
    .mlm-btn-primary:hover { background: #2563eb; }
    .mlm-btn-secondary { background: rgba(255,255,255,0.06); color: #94afc8; border: 1px solid rgba(255,255,255,0.1); }
    .mlm-btn-secondary:hover { background: rgba(255,255,255,0.1); color: #f0f6ff; }
    .mlm-btn-ghost     { background: transparent; color: #94afc8; border: 1px solid rgba(255,255,255,0.1); }
    .mlm-btn-ghost:hover { border-color: rgba(255,255,255,0.25); color: #f0f6ff; }
    .mlm-btn-close     { background: transparent; color: #4a6480; font-size: 11px; border: none; }
    .mlm-btn-close:hover { color: #94afc8; }

    /* Preview area */
    .mlm-preview-wrap {
      flex: 1; display: flex; flex-direction: column; min-width: 0;
    }

    .mlm-preview-label {
      padding: 10px 16px 8px;
      font-size: 11px; font-weight: 500;
      color: #4a6480; font-family: 'Inter', sans-serif;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      flex-shrink: 0;
    }

    .mlm-preview-scroll {
      flex: 1; overflow: auto; padding: 16px;
      background: #060c18;
      display: flex; align-items: flex-start; justify-content: center;
    }
    .mlm-preview-scroll::-webkit-scrollbar { width: 5px; height: 5px; }
    .mlm-preview-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

    .mlm-canvas {
      width: 864px; /* A4 landscape ~96dpi preview */
      height: 612px;
      flex-shrink: 0;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    }

    /* Layout page CSS (preview & print) */
    ${_getLayoutCSS()}

    /* Spin animation untuk loading */
    @keyframes spin { to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(s);
}
