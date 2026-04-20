export function updateStatCard(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = Number(value).toLocaleString('id-ID');
}

export function setLayerStatus(id, state) {
  const el = document.getElementById(id);
  if (!el) return;
  const colors = { loading:'#f5a623', done:'#00c9a7', error:'#ff4d4d' };
  el.style.background = colors[state] || '#4d6a94';
}