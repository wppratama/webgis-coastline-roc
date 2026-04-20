/**
 * src/ui/sidebar.js — v2
 * Perubahan:
 *  - Semua panel TERTUTUP saat pertama kali load,
 *    kecuali "Data Overview" (stats-grid) yang tetap terbuka
 *  - setupSidebar() tetap sama API-nya
 */

export { setLayerStatus } from './stats.js';

export function setupSidebar({ onOpacityChange, onToggleShorelines, onToggleRates } = {}) {

  // ── Collapse semua panel kecuali Data Overview ──────────
  _initPanelStates();

  // ── Panel header click → toggle collapse ────────────────
  document.querySelectorAll('.panel-header').forEach(header => {
    header.addEventListener('click', () => {
      const body    = header.nextElementSibling;
      const chevron = header.querySelector('.ph-chev');
      if (!body) return;
      const isHidden = body.style.display === 'none';
      body.style.display = isHidden ? '' : 'none';
      chevron?.classList.toggle('open', isHidden);
    });
  });

  // ── Opacity slider ───────────────────────────────────────
  const slider = document.getElementById('opacity-slider');
  const label  = document.getElementById('opacity-val');
  slider?.addEventListener('input', () => {
    const val = parseInt(slider.value) / 100;
    if (label) label.textContent = slider.value + '%';
    onOpacityChange?.(val);
  });

  // ── Layer toggles ────────────────────────────────────────
  document.getElementById('toggle-shorelines')
    ?.addEventListener('change', e => onToggleShorelines?.(e.target.checked));
  document.getElementById('toggle-rates')
    ?.addEventListener('change', e => onToggleRates?.(e.target.checked));
}

// ── PRIVATE ──────────────────────────────────────────────

/**
 * Tutup semua panel-body saat init.
 * Panel yang TETAP TERBUKA: panel pertama (Data Overview / stats-grid).
 */
function _initPanelStates() {
  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel, index) => {
    const header  = panel.querySelector('.panel-header');
    const body    = header?.nextElementSibling;
    const chevron = header?.querySelector('.ph-chev');

    if (!body) return;

    // Panel index 0 = "Data Overview" → tetap buka
    if (index === 0) {
      body.style.display = '';
      chevron?.classList.add('open');
      return;
    }

    // Semua panel lain → tutup
    body.style.display = 'none';
    chevron?.classList.remove('open');
  });
}