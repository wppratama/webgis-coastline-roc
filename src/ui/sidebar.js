/**
 * src/ui/sidebar.js — Tab System
 * Ganti seluruh isi sidebar.js yang lama dengan ini.
 */

export { setLayerStatus } from './stats.js';

export function setupSidebar({
  onOpacityChange,
  onToggleShorelines,
  onToggleRates,
} = {}) {

  // ── Tab switching ─────────────────────────────────────
  document.querySelectorAll('.sb-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Update tab aktif
      document.querySelectorAll('.sb-tab').forEach(t =>
        t.classList.toggle('active', t.dataset.tab === target)
      );

      // Update panel aktif
      document.querySelectorAll('.sb-panel').forEach(p =>
        p.classList.toggle('active', p.id === `tab-${target}`)
      );
    });
  });

  // ── Panel collapse (header click) ────────────────────
  document.querySelectorAll('.panel-header').forEach(header => {
    header.addEventListener('click', () => {
      const body    = header.nextElementSibling;
      const chevron = header.querySelector('.ph-chev');
      if (!body) return;
      const hidden = body.style.display === 'none';
      body.style.display = hidden ? '' : 'none';
      chevron?.classList.toggle('open', hidden);
    });
  });

  // ── Opacity slider ────────────────────────────────────
  const slider = document.getElementById('opacity-slider');
  const label  = document.getElementById('opacity-val');
  slider?.addEventListener('input', () => {
    const val = parseInt(slider.value) / 100;
    if (label) label.textContent = slider.value + '%';
    onOpacityChange?.(val);
  });

  // ── Layer toggles ─────────────────────────────────────
  document.getElementById('toggle-shorelines')
    ?.addEventListener('change', e => onToggleShorelines?.(e.target.checked));
  document.getElementById('toggle-rates')
    ?.addEventListener('change', e => onToggleRates?.(e.target.checked));
}