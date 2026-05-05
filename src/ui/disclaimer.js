/**
 * src/ui/disclaimer.js
 * ─────────────────────────────────────────────────────────
 * Popup disclaimer yang muncul sekali saat web pertama kali dibuka.
 * Setelah user klik "Saya Mengerti", disimpan ke localStorage
 * sehingga tidak muncul lagi di kunjungan berikutnya.
 *
 * Cara pakai di main.js:
 *   import { setupDisclaimer } from './src/ui/disclaimer.js';
 *   setupDisclaimer();
 */
const STORAGE_KEY = 'webgis_disclaimer_accepted';

// KUNCI PERBAIKAN: Tambahkan parameter "forceOpen"
export function setupDisclaimer(forceOpen = false) {
  // Jika TIDAK dipaksa buka, dan sudah pernah disetujui, maka keluar
  if (!forceOpen && localStorage.getItem(STORAGE_KEY) === 'true') {
    return;
  }

  _injectStyles();

  // Hapus popup lama jika masih nyangkut di sistem agar tidak ganda
  const existing = document.getElementById('disclaimer-overlay');
  if (existing) existing.remove();

  _buildPopup();
}

// ── TAMBAHKAN FUNGSI INI ─────────────────────────────────
export function openDisclaimer() {
  _injectStyles();
  
  // Hapus popup lama jika kebetulan masih nyangkut di DOM (mencegah dobel)
  const existing = document.getElementById('disclaimer-overlay');
  if (existing) existing.remove();
  
  _buildPopup();
}

// ── BUILD POPUP ──────────────────────────────────────────

function _buildPopup() {
  // Overlay backdrop
  const overlay = document.createElement('div');
  overlay.id = 'disclaimer-overlay';

  overlay.innerHTML = `
    <div class="disc-modal" role="dialog" aria-modal="true"
         aria-labelledby="disc-title">

      <!-- Header -->
      <div class="disc-header">
        <div class="disc-header-left">
          <div class="disc-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" width="18" height="18">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <div class="disc-title" id="disc-title">Informasi Data &amp; Metode</div>
            <div class="disc-subtitle">Baca sebelum menggunakan platform ini</div>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="disc-body">

        <div class="disc-section">
          <div class="disc-section-label">Sumber Data</div>
          <p class="disc-text">
            Data garis pantai dan laju perubahan pada platform ini diekstraksi dari
            citra satelit <strong>Landsat 5, 7, 8, dan 9</strong> (USGS/NASA) menggunakan
            metode <em>sub-pixel waterline extraction</em> yang diadaptasi dari
            <strong>Digital Earth Australia (DEA) Coastlines — Geoscience Australia.</strong>
          </p>
          <p class="disc-text" style="margin-top:8px;">
            Data mencakup wilayah Indonesia untuk periode
            <strong>1985–2025</strong> dengan resolusi spasial 30 meter.
          </p>
        </div>

        <div class="disc-divider"></div>

        <div class="disc-section">
          <div class="disc-section-label">Keterbatasan Data</div>
          <p class="disc-text">
            Hasil ekstraksi garis pantai dipengaruhi oleh kondisi atmosfer, tutupan awan, dan
            variasi pasang surut saat akuisisi citra. Data bersifat
            <strong>indikatif untuk keperluan riset dan monitoring</strong> dan tidak menggantikan
            data survey resmi seperti survei hidrografi, survei topografi terestris, pemetaan 
            menggunakan Unmanned Aerial Vehicle (UAV) / Drone, Light Detection and Ranging (LiDAR), Synthetic Aperture Radar (SAR), 
            serta survei lapangan langsung lainya.
          </p>
        </div>

        <div class="disc-divider"></div>

        <div class="disc-section">
          <div class="disc-section-label">Referensi</div>
          <div class="disc-ref-box">
            <div class="disc-ref-row">
              <span class="disc-ref-label">Citation</span>
              <span class="disc-ref-val">
                Bishop-Taylor, R., Nanson, R., Sagar, S., Lymburner, L. (2021).
                <em>Mapping Australia’s dynamic coastline at mean sea level using three decades of Landsat imagery</em>
                Geoscience Australia.
                <a href="https://doi.org/10.1016/j.rse.2021.112734"
                   target="_blank" rel="noopener"
                   class="disc-link">Publications</a>
              </span>
            </div>
            <div class="disc-ref-row">
              <span class="disc-ref-label">Method</span>
              <span class="disc-ref-val">
                Bishop-Taylor, R., Sagar, S., Lymburner, L., Alam, I., & Sixsmith, J. (2019).
                <em>Sub-pixel waterline extraction: Characterising accuracy and sensitivity to indices and spectra</em>
                Geoscience Australia.
                <a href="https://www.mdpi.com/2072-4292/11/24/2984"
                   target="_blank" rel="noopener"
                   class="disc-link">Publications</a>
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="disc-footer">
        <label class="disc-remember">
          <input type="checkbox" id="disc-no-show" class="disc-checkbox">
          <span class="disc-checkmark"></span>
          <span class="disc-remember-text">Jangan tampilkan lagi</span>
        </label>
        <button class="disc-btn" id="disc-accept">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2.5" width="14" height="14">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Saya Mengerti
        </button>
      </div>

    </div>`;

  document.body.appendChild(overlay);

  // Animasi masuk
  requestAnimationFrame(() => {
    overlay.classList.add('visible');
  });

  // Event tombol accept
  document.getElementById('disc-accept').addEventListener('click', () => {
    const noShow = document.getElementById('disc-no-show').checked;
    if (noShow) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    _closePopup(overlay);
  });

  // Tidak bisa tutup dengan klik overlay (paksa baca dulu)
  // Tapi bisa tekan Escape setelah 3 detik (UX friendly)
  setTimeout(() => {
    document.addEventListener('keydown', function onEsc(e) {
      if (e.key === 'Escape') {
        _closePopup(overlay);
        document.removeEventListener('keydown', onEsc);
      }
    });
  }, 3000);
}

function _closePopup(overlay) {
  overlay.classList.remove('visible');
  overlay.classList.add('hiding');
  setTimeout(() => overlay.remove(), 350);
}

// ── STYLES ───────────────────────────────────────────────

function _injectStyles() {
  if (document.getElementById('disc-styles')) return;
  const s = document.createElement('style');
  s.id = 'disc-styles';
  s.textContent = `
    /* ── Overlay ── */
    #disclaimer-overlay {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(5, 12, 28, 0.75);
      backdrop-filter: blur(4px);
      padding: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    #disclaimer-overlay.visible  { opacity: 1; }
    #disclaimer-overlay.hiding   { opacity: 0; pointer-events: none; }

    /* ── Modal ── */
    .disc-modal {
      background: var(--navy-mid, #0f2040);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 14px;
      width: 100%;
      max-width: 560px;
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform: translateY(20px) scale(0.97);
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 24px 60px rgba(0,0,0,0.5);
    }
    #disclaimer-overlay.visible .disc-modal {
      transform: translateY(0) scale(1);
    }

    /* ── Header ── */
    .disc-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 22px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      flex-shrink: 0;
    }
    .disc-header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .disc-icon-wrap {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: rgba(26,122,255,0.15);
      border: 1px solid rgba(26,122,255,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1a7aff;
      flex-shrink: 0;
    }
    .disc-title {
      font-size: 15px;
      font-weight: 600;
      color: #eef2ff;
      font-family: 'DM Sans', sans-serif;
    }
    .disc-subtitle {
      font-size: 11px;
      color: #4d6a94;
      margin-top: 2px;
      font-family: 'DM Sans', sans-serif;
    }

    /* ── Body (scrollable) ── */
    .disc-body {
      flex: 1;
      overflow-y: auto;
      padding: 20px 22px;
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .disc-body::-webkit-scrollbar { width: 4px; }
    .disc-body::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.1);
      border-radius: 2px;
    }

    .disc-section { padding: 4px 0 12px; }
    .disc-section-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #1a7aff;
      margin-bottom: 8px;
      font-family: 'DM Sans', sans-serif;
    }
    .disc-text {
      font-size: 13px;
      color: #8ba3c7;
      line-height: 1.75;
      font-family: 'DM Sans', sans-serif;
    }
    .disc-text strong { color: #c8d8f0; font-weight: 600; }
    .disc-text em     { color: #a0b8d8; font-style: italic; }

    .disc-divider {
      height: 1px;
      background: rgba(255,255,255,0.07);
      margin: 4px 0 16px;
    }

    /* ── Referensi box ── */
    .disc-ref-box {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px;
      overflow: hidden;
    }
    .disc-ref-row {
      display: flex;
      gap: 12px;
      padding: 10px 14px;
      font-size: 12px;
      font-family: 'DM Sans', sans-serif;
    }
    .disc-ref-row:not(:last-child) {
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .disc-ref-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #4d6a94;
      flex-shrink: 0;
      width: 48px;
      padding-top: 2px;
    }
    .disc-ref-val {
      color: #8ba3c7;
      line-height: 1.65;
      font-size: 12px;
    }
    .disc-ref-val em { color: #a0b8d8; font-style: italic; }
    .disc-link {
      color: #1a7aff;
      text-decoration: none;
      border-bottom: 1px solid rgba(26,122,255,0.3);
      transition: border-color 0.15s;
    }
    .disc-link:hover { border-color: #1a7aff; }

    /* ── Footer ── */
    .disc-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 22px 18px;
      border-top: 1px solid rgba(255,255,255,0.08);
      flex-shrink: 0;
      gap: 12px;
    }

    /* Checkbox custom */
    .disc-remember {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .disc-checkbox { display: none; }
    .disc-checkmark {
      width: 16px;
      height: 16px;
      border-radius: 4px;
      border: 1.5px solid rgba(255,255,255,0.2);
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.15s;
    }
    .disc-checkbox:checked + .disc-checkmark {
      background: #1a7aff;
      border-color: #1a7aff;
    }
    .disc-checkbox:checked + .disc-checkmark::after {
      content: '';
      display: block;
      width: 8px;
      height: 5px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg) translateY(-1px);
    }
    .disc-remember-text {
      font-size: 12px;
      color: #4d6a94;
      font-family: 'DM Sans', sans-serif;
    }

    /* Tombol accept */
    .disc-btn {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 9px 20px;
      background: #1a7aff;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 13px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
      flex-shrink: 0;
    }
    .disc-btn:hover  { background: #1a5ec4; }
    .disc-btn:active { transform: scale(0.97); }
  `;
  document.head.appendChild(s);
}