/**
 * src/ui/stats.js — v2
 * Tambah: updateStatCard support 'stat-length' dan 'stat-avg-rate'
 * (fungsi yang sudah ada tetap sama persis)
 */

export function updateStatCard(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  if (value === '—' || value === undefined || value === null) {
    el.textContent = '—';
    return;
  }
  el.textContent = Number(value).toLocaleString('id-ID');
}

export function setLayerStatus(id, state) {
  const el = document.getElementById(id);
  if (!el) return;
  const colors = { loading: '#f5a623', done: '#00c9a7', error: '#ff4d4d' };
  el.style.background = colors[state] ?? '#4d6a94';
}