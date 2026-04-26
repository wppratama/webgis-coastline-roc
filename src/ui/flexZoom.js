/**
 * src/ui/flexZoom.js
 * ─────────────────────────────────────────────────────────
 * Zoom Fleksibel Toggle — saat aktif, semua garis pantai
 * ditampilkan di zoom berapapun (abaikan batas ZOOM_FULL).
 *
 * Cara pakai di main.js:
 *   import { setupFlexZoom } from './src/ui/flexZoom.js';
 *   setupFlexZoom(tileLoader);  // atau maplibreCtrl
 */

export function setupFlexZoom(layerCtrl) {
  _injectStyles();
  _buildButton(layerCtrl);
}

// ── STATE ────────────────────────────────────────────────────

let _flexActive = false;

export function isFlexZoomActive() {
  return _flexActive;
}

// ── BUILD BUTTON ─────────────────────────────────────────────

function _buildButton(layerCtrl) {
  const toolbar = document.querySelector('.map-toolbar');
  if (!toolbar || document.getElementById('btn-flex-zoom')) return;

  // Sisipkan group baru sebelum layout button (atau di akhir)
  const group = document.createElement('div');
  group.className  = 'tool-group';
  group.id         = 'flex-zoom-group';
  group.innerHTML  = `
    <button class="map-tool" id="btn-flex-zoom"
            title="Tampilkan Garis Pantai Semua Tahun">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" width="15" height="15">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    </button>`;

  // Sisipkan sebelum tool-group terakhir (layout button)
  const groups = toolbar.querySelectorAll('.tool-group');
  const last   = groups[groups.length - 1];
  toolbar.insertBefore(group, last);

  const btn = document.getElementById('btn-flex-zoom');
  btn.addEventListener('click', () => _toggle(btn, layerCtrl));
}

// ── TOGGLE ───────────────────────────────────────────────────

function _toggle(btn, layerCtrl) {
  _flexActive = !_flexActive;

  btn.classList.toggle('flex-zoom-active', _flexActive);

  // Update tooltip
  btn.title = _flexActive
    ? 'Tampilkan Garis Pantai Semua Tahun — klik untuk nonaktifkan'
    : 'Tampilkan Semua Tahun';

  const tooltip = document.getElementById('flex-zoom-tooltip');
  if (tooltip) {
    tooltip.textContent = _flexActive
      ? '✓ Semua Tahun Ditampilkan'
      : 'Tampilkan Semua Tahun';
    tooltip.classList.toggle('active', _flexActive);
  }

  // Terapkan ke layer controller
  // Interface: layerCtrl harus punya method setFlexZoom(bool)
  if (layerCtrl?.setFlexZoom) {
    layerCtrl.setFlexZoom(_flexActive);
  }

  // Dispatch event agar modul lain bisa listen
  window.dispatchEvent(new CustomEvent('flexzoomchange', {
    detail: { active: _flexActive }
  }));
}

// ── STYLES ───────────────────────────────────────────────────

function _injectStyles() {
  if (document.getElementById('flex-zoom-styles')) return;
  const s = document.createElement('style');
  s.id = 'flex-zoom-styles';
  s.textContent = `
    /* Tombol aktif — glow biru */
    #btn-flex-zoom.flex-zoom-active {
      background: rgba(59,130,246,0.2) !important;
      color: #3b82f6 !important;
      box-shadow: inset 0 0 0 1px rgba(59,130,246,0.4);
    }

    /* Pulse ring saat aktif */
    #btn-flex-zoom.flex-zoom-active::after {
      content: '';
      position: absolute;
      inset: 2px;
      border-radius: 4px;
      border: 1.5px solid rgba(59,130,246,0.5);
      animation: flex-pulse 2s ease-in-out infinite;
      pointer-events: none;
    }
    @keyframes flex-pulse {
      0%,100% { opacity: 1; }
      50%      { opacity: 0.3; }
    }

    /* Badge kecil di pojok tombol saat aktif */
    #flex-zoom-group { position: relative; }
    #btn-flex-zoom.flex-zoom-active::before {
      content: '●';
      position: absolute;
      top: 4px; right: 4px;
      font-size: 6px;
      color: #3b82f6;
      line-height: 1;
    }

    /* Chip status di bottom bar (ditambahkan saat aktif) */
    #flex-zoom-chip {
      display: flex; align-items: center; gap: 6px;
      padding: 5px 12px;
      background: rgba(59,130,246,0.15);
      border: 1px solid rgba(59,130,246,0.35);
      border-radius: 20px;
      font-size: 11px;
      color: #3b82f6;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      pointer-events: none;
      animation: fadeIn .2s ease;
    }
    #flex-zoom-chip .chip-dot { background: #3b82f6; animation: pulse 2s infinite; }
    @keyframes fadeIn { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:none; } }

    /* Custom tooltip */
    #flex-zoom-tooltip {
      position: fixed;
      background: rgba(8,15,30,0.9);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 6px;
      padding: 5px 10px;
      font-size: 11px;
      color: #94afc8;
      font-family: 'Inter', sans-serif;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transform: translateX(-50%) translateY(4px);
      transition: opacity .15s, transform .15s;
      white-space: nowrap;
    }
    #flex-zoom-tooltip.active { color: #3b82f6; border-color: rgba(59,130,246,0.3); }
  `;
  document.head.appendChild(s);
}