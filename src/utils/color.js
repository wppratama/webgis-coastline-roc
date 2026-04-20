export function getWarnaTahun(tahun) {
  const t = parseInt(tahun);
  if (isNaN(t)) return '#ffffff';
  const hue = Math.max(0, Math.min(280, (t - 1984) * 7));
  return `hsl(${hue}, 100%, 55%)`;
}