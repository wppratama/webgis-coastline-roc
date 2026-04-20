export function setupToolbar(map) {
  document.getElementById('btn-zoom-in')
    ?.addEventListener('click', () => map.zoomIn());
  document.getElementById('btn-zoom-out')
    ?.addEventListener('click', () => map.zoomOut());
  document.getElementById('btn-fitbounds')
    ?.addEventListener('click', () => map.setView([-2.5, 118.0], 5));
  document.getElementById('btn-locate')
    ?.addEventListener('click', () => map.locate({ setView:true, maxZoom:12 }));
  document.getElementById('btn-fullscreen')
    ?.addEventListener('click', () => {
      const el = document.getElementById('map');
      document.fullscreenElement
        ? document.exitFullscreen()
        : el.requestFullscreen?.();
    });
}