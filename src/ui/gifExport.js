/**
 * src/ui/gifExport.js  — v3.0
 * FIX: willReadFrequently patch + tainted canvas + worker blob URL
 */

const GIF_JS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js';

// ─────────────────────────────────────────────────────────
// FIX #1: Patch getContext SEBELUM gif.js diload.
// gif.js memanggil getImageData ratusan kali per frame.
// Tanpa willReadFrequently:true, Chrome throttle → stuck 0%.
// ─────────────────────────────────────────────────────────
function _patchCanvasWillReadFrequently() {
  if (HTMLCanvasElement.prototype.__gifPatched) return;
  const _orig = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function(type, opts = {}) {
    if (type === '2d') opts = { willReadFrequently: true, ...opts };
    return _orig.call(this, type, opts);
  };
  HTMLCanvasElement.prototype.__gifPatched = true;
}

async function _loadScript(src) {
  if (document.querySelector(`script[src="${src}"]`)?.dataset.loaded) return;
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload  = () => { s.dataset.loaded = '1'; res(); };
    s.onerror = () => rej(new Error(`Gagal memuat: ${src}`));
    document.head.appendChild(s);
  });
}

// FIX #2: Worker blob URL — CDN worker diblokir CORS browser
let _workerBlobUrl = null;
async function _getWorkerBlobUrl() {
  if (_workerBlobUrl) return _workerBlobUrl;
  const res = await fetch(GIF_JS_CDN);
  if (!res.ok) throw new Error('Gagal fetch gif.js dari CDN');
  const src  = await res.text();
  const blob = new Blob([src], { type: 'application/javascript' });
  _workerBlobUrl = URL.createObjectURL(blob);
  return _workerBlobUrl;
}

export function setupGifExport(mapInstance, tileLoader) {
  if (!mapInstance || !tileLoader) return;
  _injectGifStyles();

  const actions = document.querySelector('.mlm-actions');
  if (!actions || document.getElementById('gif-section')) return;

  const section = document.createElement('div');
  section.id        = 'gif-section';
  section.className = 'gif-section';
  section.innerHTML = `
    <div class="gif-header">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      Export Animasi GIF
    </div>
    <div class="gif-row">
      <div>
        <div class="mlm-sublabel">Tahun Mulai</div>
        <input class="mlm-input gif-input" id="gif-year-start" type="number"
               min="1984" max="2024" value="1984" step="1"/>
      </div>
      <div>
        <div class="mlm-sublabel">Tahun Akhir</div>
        <input class="mlm-input gif-input" id="gif-year-end" type="number"
               min="1985" max="2025" value="2025" step="1"/>
      </div>
    </div>
    <div class="gif-row">
      <div>
        <div class="mlm-sublabel">Interval (tahun)</div>
        <select class="mlm-select gif-input" id="gif-interval">
          <option value="1" selected>Tiap 1 tahun</option>
          <option value="2">Tiap 2 tahun</option>
          <option value="3">Tiap 3 tahun</option>
          <option value="5">Tiap 5 tahun</option>
        </select>
      </div>
      <div>
        <div class="mlm-sublabel">Delay per frame</div>
        <select class="mlm-select gif-input" id="gif-delay">
          <option value="300">0.3 dtk</option>
          <option value="500" selected>0.5 dtk</option>
          <option value="800">0.8 dtk</option>
          <option value="1200">1.2 dtk</option>
          <option value="2000">2.0 dtk</option>
        </select>
      </div>
    </div>
    <div class="gif-row" style="grid-template-columns:1fr;">
      <div>
        <div class="mlm-sublabel">Resolusi GIF</div>
        <select class="mlm-select gif-input" id="gif-resolution">
          <option value="0.5">Kecil — cepat (~480px)</option>
          <option value="0.75" selected>Sedang (~720px)</option>
          <option value="1">Penuh (~1080px) — lambat</option>
        </select>
      </div>
    </div>
    <div class="gif-progress-wrap" id="gif-progress-wrap" style="display:none;">
      <div class="gif-progress-bar">
        <div class="gif-progress-fill" id="gif-progress-fill"></div>
      </div>
      <div class="gif-progress-label" id="gif-progress-label">Menyiapkan...</div>
    </div>
    <button class="mlm-btn mlm-btn-gif" id="btn-export-gif">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
      Buat Animasi GIF
    </button>
  `;

  actions.parentNode.insertBefore(section, actions);
  document.getElementById('btn-export-gif')
    .addEventListener('click', () => _startGifExport(mapInstance, tileLoader));
}

async function _startGifExport(mapInstance, tileLoader) {
  const btn      = document.getElementById('btn-export-gif');
  const progWrap = document.getElementById('gif-progress-wrap');
  const progFill = document.getElementById('gif-progress-fill');
  const progLbl  = document.getElementById('gif-progress-label');

  const yearStart  = parseInt(document.getElementById('gif-year-start')?.value  ?? 1984);
  const yearEnd    = parseInt(document.getElementById('gif-year-end')?.value    ?? 2025);
  const interval   = parseInt(document.getElementById('gif-interval')?.value    ?? 1);
  const delay      = parseInt(document.getElementById('gif-delay')?.value       ?? 500);
  const resolution = parseFloat(document.getElementById('gif-resolution')?.value ?? 0.75);

  if (yearStart >= yearEnd) { alert('Tahun mulai harus lebih kecil dari tahun akhir.'); return; }

  const years = [];
  for (let y = yearStart; y <= yearEnd; y += interval) years.push(y);

  btn.disabled = true;
  progWrap.style.display = '';
  const setProgress = (pct, label) => {
    progFill.style.width = Math.min(100, pct) + '%';
    progLbl.textContent  = label;
  };

  let lastCanvas = null;

  try {
    setProgress(1, 'Memuat library...');

    // URUTAN PENTING: patch dulu SEBELUM loadScript gif.js
    _patchCanvasWillReadFrequently();
    await _loadScript(GIF_JS_CDN);
    const workerBlobUrl = await _getWorkerBlobUrl();

    const mapEl = document.getElementById('map');
    const W = Math.round(mapEl.offsetWidth  * resolution);
    const H = Math.round(mapEl.offsetHeight * resolution);

    const origFilter = { ...tileLoader._filter };

    const gif = new window.GIF({
      workers:      2,
      quality:      10,
      width:        W,
      height:       H,
      workerScript: workerBlobUrl,
      repeat:       0,
    });

    setProgress(5, `Menyiapkan ${years.length} frame...`);

    for (let i = 0; i < years.length; i++) {
      const year = years[i];
      setProgress(Math.round((i / years.length) * 72) + 5, `Frame ${i+1}/${years.length} — ${year}`);

      tileLoader.applyFilter({ ...origFilter, yearMax: year });
      await _waitFrames(100);

      // FIX #3: Capture ke canvas bersih (non-tainted) dengan willReadFrequently
      const snap = await _captureCleanCanvas(mapEl, W, H, resolution);
      _drawYearOverlay(snap, year, yearStart, yearEnd);
      gif.addFrame(snap, { delay, copy: true });
      lastCanvas = snap;
    }

    if (lastCanvas) gif.addFrame(lastCanvas, { delay: delay * 4, copy: true });

    tileLoader.applyFilter(origFilter);
    setProgress(79, 'Encoding GIF (harap tunggu)...');

    await new Promise((resolve, reject) => {
      gif.on('progress', p => setProgress(79 + Math.round(p * 19), `Encoding: ${Math.round(p*100)}%`));
      gif.on('finished', blob => {
        setProgress(100, '✓ Selesai! Mengunduh...');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `animasi-garis-pantai_${yearStart}-${yearEnd}.gif`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 15000);
        resolve();
      });
      gif.on('error', reject);
      gif.render();
    });

  } catch (err) {
    console.error('[GIF]', err);
    setProgress(0, '⚠ Gagal: ' + (err?.message ?? String(err)));
    try { tileLoader.applyFilter({ ...tileLoader._filter }); } catch(_) {}
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg> Buat Animasi GIF`;
    setTimeout(() => { progWrap.style.display = 'none'; }, 5000);
  }
}

// FIX #3: Canvas bersih non-tainted dengan willReadFrequently
async function _captureCleanCanvas(mapEl, W, H, resolution) {
  const out = document.createElement('canvas');
  out.width  = W;
  out.height = H;
  // willReadFrequently di sini — ini canvas yang gif.js akan baca
  const ctx = out.getContext('2d', { willReadFrequently: true });

  ctx.fillStyle = '#080f1e';
  ctx.fillRect(0, 0, W, H);

  const mapRect = mapEl.getBoundingClientRect();

  // Copy canvas Leaflet (tile layers)
  for (const c of mapEl.querySelectorAll('canvas')) {
    if (!c.width || !c.height) continue;
    const r = c.getBoundingClientRect();
    const dx = (r.left - mapRect.left) * resolution;
    const dy = (r.top  - mapRect.top)  * resolution;
    try {
      c.toDataURL(); // throws if tainted
      ctx.drawImage(c, dx, dy, c.width * resolution, c.height * resolution);
    } catch (_) { /* basemap cross-origin — skip, background sudah solid */ }
  }

  // Composite SVG vector overlay (garis pantai — tidak tainted)
  const overlayPane = mapEl.querySelector('.leaflet-overlay-pane');
  if (overlayPane) {
    for (const svg of overlayPane.querySelectorAll('svg')) {
      try {
        const r     = svg.getBoundingClientRect();
        const clone = svg.cloneNode(true);
        clone.setAttribute('width',  r.width);
        clone.setAttribute('height', r.height);
        const svgBlob = new Blob(
          [new XMLSerializer().serializeToString(clone)],
          { type: 'image/svg+xml;charset=utf-8' }
        );
        const svgUrl = URL.createObjectURL(svgBlob);
        await new Promise(resolve => {
          const img = new Image();
          img.onload = () => {
            const dx = (r.left - mapRect.left) * resolution;
            const dy = (r.top  - mapRect.top)  * resolution;
            ctx.drawImage(img, dx, dy, r.width * resolution, r.height * resolution);
            URL.revokeObjectURL(svgUrl);
            resolve();
          };
          img.onerror = () => { URL.revokeObjectURL(svgUrl); resolve(); };
          img.src = svgUrl;
        });
      } catch (e) { console.warn('[GIF] SVG skip:', e.message); }
    }
  }

  return out;
}

function _drawYearOverlay(canvas, year, yearStart, yearEnd) {
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const W = canvas.width, H = canvas.height;
  const pct = (year - yearStart) / Math.max(yearEnd - yearStart, 1);

  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(0, H - 30, W, 30);

  ctx.fillStyle = 'rgba(59,130,246,0.35)';
  ctx.fillRect(0, H - 3, W, 3);
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(0, H - 3, Math.round(W * pct), 3);

  const fs = Math.max(14, Math.round(W * 0.036));
  ctx.font = `bold ${fs}px Arial, sans-serif`;
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(0,0,0,0.85)';
  ctx.fillText(String(year), 16, H - 15);
  ctx.fillStyle = '#ffffff';
  ctx.fillText(String(year), 15, H - 16);
}

function _waitFrames(ms = 80) {
  return new Promise(resolve =>
    setTimeout(() => requestAnimationFrame(() => requestAnimationFrame(resolve)), ms)
  );
}

function _injectGifStyles() {
  if (document.getElementById('gif-export-styles')) return;
  const s = document.createElement('style');
  s.id = 'gif-export-styles';
  s.textContent = `
    .gif-section { padding:10px 14px 12px; border-top:1px solid rgba(255,255,255,0.05); border-bottom:1px solid rgba(255,255,255,0.05); }
    .gif-header { display:flex; align-items:center; gap:6px; font-size:9.5px; font-weight:600; text-transform:uppercase; letter-spacing:.08em; color:#a78bfa; margin-bottom:9px; font-family:'Inter',sans-serif; }
    .gif-row { display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:6px; }
    .gif-input { font-size:11px !important; padding:5px 8px !important; margin-bottom:0 !important; }
    .gif-progress-wrap { margin:8px 0 6px; }
    .gif-progress-bar { height:4px; background:rgba(255,255,255,0.08); border-radius:2px; overflow:hidden; margin-bottom:5px; }
    .gif-progress-fill { height:100%; width:0%; background:linear-gradient(90deg,#7c3aed,#a78bfa); border-radius:2px; transition:width .25s ease; }
    .gif-progress-label { font-size:10px; color:#6b7a99; font-family:'Inter',sans-serif; text-align:center; }
    .mlm-btn-gif { display:flex; align-items:center; justify-content:center; gap:6px; width:100%; padding:8px 12px; border-radius:7px; font-size:12px; font-weight:500; font-family:'Inter',sans-serif; cursor:pointer; transition:all .15s; margin-top:4px; background:rgba(167,139,250,0.15); color:#a78bfa; border:1px solid rgba(167,139,250,0.3); }
    .mlm-btn-gif:hover:not(:disabled) { background:rgba(167,139,250,0.28); }
    .mlm-btn-gif:disabled { opacity:.45; cursor:not-allowed; }
  `;
  document.head.appendChild(s);
}