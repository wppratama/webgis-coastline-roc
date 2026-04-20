export function showToast(msg, bgColor = '#1a1a2e') {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed;bottom:20px;right:20px;
    background:${bgColor};color:#fff;
    padding:8px 14px;border-radius:8px;
    font-size:13px;z-index:9999;
    font-family:'DM Sans',sans-serif;
    opacity:0;transition:opacity .2s;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.style.opacity = '1', 10);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 200);
  }, 2500);
}