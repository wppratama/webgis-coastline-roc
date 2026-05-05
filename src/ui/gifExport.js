/**
 * src/ui/gifExport.js
 * Export animasi GIF — garis pantai bergerak tahun per tahun.
 * Dipanggil dari mapLayout.js.
 *
 * Dependensi: gif.js (di-load otomatis via CDN)
 */

const GIF_JS_CDN    = 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js';
const GIF_WORKER    = 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js';
const HTML2CANVAS   = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';

async function _loadScript(src) {
  if (document.querySelector(`script[src="${src}"]`)?.dataset.loaded) return;
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload  = () => { s.dataset.loaded = '1'; res(); };
    s.onerror = rej;
    document.head.appendChild(s);
  });
}

// ── Inject UI di sidebar modal ───────────────────────────
export function setupGifExport(mapInstance, tileLoader) {
  if (!mapInstance || !tileLoader) return;

  _injectGifStyles();

  // Cari .mlm-actions dan tambahkan seksi GIF sebelumnya
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

  // Sisipkan sebelum .mlm-actions
  actions.parentNode.insertBefore(section, actions);

  document.getElementById('btn-export-gif')
    .addEventListener('click', () => _startGifExport(mapInstance, tileLoader));
}

// ── Core export logic ────────────────────────────────────
async function _startGifExport(mapInstance, tileLoader) {
  const btn      = document.getElementById('btn-export-gif');
  const progWrap = document.getElementById('gif-progress-wrap');
  const progFill = document.getElementById('gif-progress-fill');
  const progLbl  = document.getElementById('gif-progress-label');

  const yearStart  = parseInt(document.getElementById('gif-year-start')?.value  ?? 1984);
  const yearEnd    = parseInt(document.getElementById('gif-year-end')?.value    ?? 2025);
  const interval   = parseInt(document.getElementById('gif-interval')?.value   ?? 1);
  const delay      = parseInt(document.getElementById('gif-delay')?.value      ?? 500);
  const resolution = parseFloat(document.getElementById('gif-resolution')?.value ?? 0.75);

  if (yearStart >= yearEnd) {
    alert('Tahun mulai harus lebih kecil dari tahun akhir.');
    return;
  }

  // Kumpulkan daftar tahun yang akan dianimasikan
  const years = [];
  for (let y = yearStart; y <= yearEnd; y += interval) years.push(y);

  btn.disabled    = true;
  btn.textContent = 'Sedang proses...';
  progWrap.style.display = '';

  const setProgress = (pct, label) => {
    progFill.style.width  = pct + '%';
    progLbl.textContent   = label;
  };

  try {
    await _loadScript(HTML2CANVAS);
    await _loadScript(GIF_JS_CDN);

    const mapEl = document.getElementById('map');
    const W     = Math.round(mapEl.offsetWidth  * resolution);
    const H     = Math.round(mapEl.offsetHeight * resolution);

    // Simpan state filter asli
    const origFilter = { ...tileLoader._filter };

    // Inisialisasi GIF encoder
    const gif = new window.GIF({
      workers:    2,
      quality:    8,          // 1=best, 20=fastest
      width:      W,
      height:     H,
      workerScript: GIF_WORKER,
      repeat:     0,          // 0 = loop selamanya
    });

    setProgress(2, `Menyiapkan ${years.length} frame...`);

    // ── Render tiap frame ────────────────────────────────
    for (let i = 0; i < years.length; i++) {
      const year = years[i];
      const pct  = Math.round((i / years.length) * 75) + 2;
      setProgress(pct, `Frame ${i + 1}/${years.length} — tahun ${year}`);

      // Terapkan filter: hanya tampilkan garis pantai s/d tahun ini
      tileLoader.applyFilter({
        ...origFilter,
        yearMin: origFilter.yearMin,
        yearMax: year,
      });

      // Tunggu canvas leaflet selesai render
      await _waitFrame(80);

      // Ambil snapshot
      const snap = await window.html2canvas(mapEl, {
        useCORS:         true,
        allowTaint:      true,
        scale:           resolution,
        backgroundColor: '#080f1e',
        logging:         false,
      });

      // Tambahkan overlay tahun di sudut kiri bawah
      _drawYearOverlay(snap, year, yearStart, yearEnd);

      gif.addFrame(snap, { delay, copy: true });
    }

    // Tambah frame terakhir yang lebih lama (pause di akhir)
    gif.addFrame(gif.frames[gif.frames.length - 1]?.data ?? gif.frames[0]?.data, {
      delay: delay * 4,
      copy:  true,
    });

    // Kembalikan filter ke semula
    tileLoader.applyFilter(origFilter);

    // ── Encode GIF ──────────────────────────────────────
    setProgress(80, 'Mengompres & encoding GIF...');

    await new Promise((resolve, reject) => {
      gif.on('progress', p => {
        setProgress(80 + Math.round(p * 18), `Encoding GIF: ${Math.round(p * 100)}%`);
      });

      gif.on('finished', blob => {
        setProgress(100, 'Selesai! Mengunduh...');

        // Download otomatis
        const url = URL.createObjectURL(blob);
        const a   = document.createElement('a');
        a.href     = url;
        a.download = `animasi-garis-pantai_${yearStart}-${yearEnd}.gif`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 5000);

        resolve();
      });

      gif.on('error', reject);
      gif.render();
    });

  } catch (err) {
    console.error('GIF export error:', err);
    setProgress(0, '⚠ Gagal: ' + err.message);
    tileLoader.applyFilter({ ...tileLoader._filter }); // restore
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Buat Animasi GIF';
    setTimeout(() => { progWrap.style.display = 'none'; }, 3000);
  }
}

// ── Overlay tahun di canvas frame ───────────────────────
function _drawYearOverlay(canvas, year, yearStart, yearEnd) {
  const ctx  = canvas.getContext('2d');
  const W    = canvas.width;
  const H    = canvas.height;

  // Progress bar tipis di bawah
  const pct = (year - yearStart) / Math.max(yearEnd - yearStart, 1);
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(0, H - 22, W, 22);

  // Bar progress
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(0, H - 3, Math.round(W * pct), 3);

  // Label tahun
  ctx.font         = `bold ${Math.round(W * 0.038)}px 'Inter', 'Arial', sans-serif`;
  ctx.textBaseline = 'middle';

  // Shadow
  ctx.fillStyle    = 'rgba(0,0,0,0.7)';
  ctx.fillText(String(year), 14 + 1, H - 11 + 1);

  // Teks putih
  ctx.fillStyle = '#ffffff';
  ctx.fillText(String(year), 14, H - 11);
}

// ── Utility: tunggu N ms + animationFrame ───────────────
function _waitFrame(ms = 60) {
  return new Promise(resolve => {
    setTimeout(() => requestAnimationFrame(resolve), ms);
  });
}

// ── CSS ──────────────────────────────────────────────────
function _injectGifStyles() {
  if (document.getElementById('gif-export-styles')) return;
  const s = document.createElement('style');
  s.id = 'gif-export-styles';
  s.textContent = `
    .gif-section {
      padding: 10px 14px 12px;
      border-top: 1px solid rgba(255,255,255,0.05);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .gif-header {
      display: flex; align-items: center; gap: 6px;
      font-size: 9.5px; font-weight: 600; text-transform: uppercase;
      letter-spacing: .08em; color: #a78bfa; margin-bottom: 9px;
      font-family: 'Inter', sans-serif;
    }
    .gif-row {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 6px; margin-bottom: 6px;
    }
    .gif-input { font-size: 11px !important; padding: 5px 8px !important; margin-bottom: 0 !important; }

    .gif-progress-wrap { margin: 8px 0 6px; }
    .gif-progress-bar {
      height: 4px; background: rgba(255,255,255,0.08);
      border-radius: 2px; overflow: hidden; margin-bottom: 5px;
    }
    .gif-progress-fill {
      height: 100%; width: 0%; background: #a78bfa;
      border-radius: 2px; transition: width .3s ease;
    }
    .gif-progress-label {
      font-size: 10px; color: #6b7a99; font-family: 'Inter', sans-serif;
      text-align: center;
    }

    .mlm-btn-gif {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      width: 100%; padding: 8px 12px; border-radius: 7px; border: none;
      font-size: 12px; font-weight: 500; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all .15s; margin-top: 4px;
      background: rgba(167,139,250,0.15);
      color: #a78bfa;
      border: 1px solid rgba(167,139,250,0.3);
    }
    .mlm-btn-gif:hover { background: rgba(167,139,250,0.25); }
    .mlm-btn-gif:disabled { opacity: .4; cursor: not-allowed; }
  `;
  document.head.appendChild(s);
}