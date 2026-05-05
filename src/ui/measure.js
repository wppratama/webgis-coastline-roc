/**
 * src/ui/measure.js
 * Tool pengukur jarak & luas di peta Leaflet.
 * Tidak butuh plugin tambahan — murni Leaflet API.
 */

export function setupMeasure(map) {
  let active      = false;
  let mode        = 'distance'; // 'distance' | 'area'
  let points      = [];
  let polyline    = null;
  let polygon     = null;
  let markers     = [];
  let labelMarker = null;
  let tooltip     = null;

  const btn = document.getElementById('btn-measure');
  if (!btn) return;

  // ── Inject styles ──────────────────────────────────────
  if (!document.getElementById('measure-styles')) {
    const s = document.createElement('style');
    s.id = 'measure-styles';
    s.textContent = `
      #btn-measure.active { background: rgba(26,122,255,0.18); color: var(--accent); }

      .measure-panel {
        position: absolute; bottom: 52px; left: 14px; z-index: 600;
        background: var(--surface); border: 1px solid var(--border-md);
        border-radius: var(--r-md); padding: 10px 13px;
        font-family: var(--font); font-size: 12px; color: var(--text-2);
        backdrop-filter: blur(6px);
        display: none; flex-direction: column; gap: 8px;
        min-width: 220px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.4);
      }
      .measure-panel.visible { display: flex; }

      .mp-header { display:flex; align-items:center; justify-content:space-between; }
      .mp-title  { font-size:11px; font-weight:600; text-transform:uppercase;
                   letter-spacing:.07em; color:var(--accent); }
      .mp-close  { background:none; border:none; color:var(--text-3); cursor:pointer;
                   font-size:15px; line-height:1; padding:0 2px; }
      .mp-close:hover { color:var(--text-1); }

      .mp-mode { display:flex; gap:5px; }
      .mp-mode-btn { flex:1; padding:4px 8px; border-radius:4px; font-size:11px;
                     font-weight:500; cursor:pointer; border:1px solid var(--border);
                     background:transparent; color:var(--text-3); font-family:var(--font);
                     transition:all .15s; }
      .mp-mode-btn.active { background:var(--accent); color:#fff; border-color:var(--accent); }

      .mp-result { font-family:var(--mono); font-size:14px; font-weight:500;
                   color:var(--text-1); padding:6px 8px; background:var(--surface-2);
                   border-radius:var(--r-sm); border:1px solid var(--border); }
      .mp-result span { font-size:10px; color:var(--text-3); display:block;
                        font-family:var(--font); margin-bottom:2px; }

      .mp-hint { font-size:10px; color:var(--text-3); line-height:1.5; }
      .mp-actions { display:flex; gap:5px; }
      .mp-btn { flex:1; padding:5px 8px; border-radius:4px; font-size:11px;
                cursor:pointer; border:1px solid var(--border); background:transparent;
                color:var(--text-2); font-family:var(--font); transition:all .12s; }
      .mp-btn:hover { background:var(--surface-2); color:var(--text-1); }
      .mp-btn.primary { background:var(--accent); color:#fff; border-color:var(--accent); }
      .mp-btn.primary:hover { background:var(--accent-dim); }

      /* Dot marker pengukuran */
      .measure-dot {
        width:10px; height:10px; border-radius:50%;
        background:var(--accent); border:2px solid white;
        box-shadow:0 0 0 1px var(--accent);
      }
      .measure-label {
        background: rgba(10,22,40,0.88); border:1px solid var(--border-md);
        border-radius:4px; padding:3px 8px; font-family:var(--mono);
        font-size:11px; color:#fff; white-space:nowrap;
        box-shadow:0 2px 8px rgba(0,0,0,0.4);
      }
    `;
    document.head.appendChild(s);
  }

  // ── Build panel HTML ───────────────────────────────────
  const panel = document.createElement('div');
  panel.id        = 'measure-panel';
  panel.className = 'measure-panel';
  panel.innerHTML = `
    <div class="mp-header">
      <span class="mp-title">📐 Ukur</span>
      <button class="mp-close" id="mp-close">✕</button>
    </div>
    <div class="mp-mode">
      <button class="mp-mode-btn active" data-mode="distance">Jarak</button>
      <button class="mp-mode-btn" data-mode="area">Luas</button>
    </div>
    <div class="mp-result" id="mp-result">
      <span>Hasil</span>—
    </div>
    <div class="mp-hint" id="mp-hint">Klik peta untuk mulai mengukur</div>
    <div class="mp-actions">
      <button class="mp-btn" id="mp-undo">↩ Undo</button>
      <button class="mp-btn primary" id="mp-clear">Hapus</button>
    </div>
  `;
  document.getElementById('map').appendChild(panel);

  // ── Helpers ────────────────────────────────────────────
  function haversine(a, b) {
    const R = 6371000;
    const dLat = (b.lat - a.lat) * Math.PI / 180;
    const dLng = (b.lng - a.lng) * Math.PI / 180;
    const sin2 = Math.sin(dLat/2)**2 +
                 Math.cos(a.lat*Math.PI/180) * Math.cos(b.lat*Math.PI/180) *
                 Math.sin(dLng/2)**2;
    return R * 2 * Math.asin(Math.sqrt(sin2));
  }

  function totalDistance() {
    let d = 0;
    for (let i = 1; i < points.length; i++) d += haversine(points[i-1], points[i]);
    return d;
  }

  // Shoelace formula di koordinat geodetik (approx)
  function polygonArea() {
    const n = points.length;
    if (n < 3) return 0;
    const R = 6371000;
    let area = 0;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const xi = points[i].lng * Math.PI / 180;
      const yi = Math.log(Math.tan(Math.PI/4 + points[i].lat * Math.PI / 360));
      const xj = points[j].lng * Math.PI / 180;
      const yj = Math.log(Math.tan(Math.PI/4 + points[j].lat * Math.PI / 360));
      area += (xj - xi) * (yj + yi);
    }
    return Math.abs(area / 2) * R * R;
  }

  function fmtDistance(m) {
    return m < 1000 ? `${m.toFixed(1)} m` : `${(m/1000).toFixed(3)} km`;
  }
  function fmtArea(m2) {
    if (m2 < 10000)   return `${m2.toFixed(1)} m²`;
    if (m2 < 1e6)     return `${(m2/10000).toFixed(3)} ha`;
    return `${(m2/1e6).toFixed(4)} km²`;
  }

  function updateResult() {
    const el = document.getElementById('mp-result');
    if (!el) return;
    if (points.length < 2) {
      el.innerHTML = '<span>Hasil</span>—';
      return;
    }
    if (mode === 'distance') {
      el.innerHTML = `<span>Total Jarak</span>${fmtDistance(totalDistance())}`;
    } else {
      el.innerHTML = points.length >= 3
        ? `<span>Luas Area</span>${fmtArea(polygonArea())}`
        : `<span>Luas Area</span>— (min. 3 titik)`;
    }
  }

  function updateHint() {
    const el = document.getElementById('mp-hint');
    if (!el) return;
    if (points.length === 0)
      el.textContent = 'Klik peta untuk mulai mengukur';
    else if (mode === 'distance')
      el.textContent = `${points.length} titik · klik lanjutkan, Undo/Hapus untuk edit`;
    else
      el.textContent = `${points.length} titik · min 3 untuk luas · klik lanjutkan`;
  }

  // ── Draw layers ────────────────────────────────────────
  function redraw() {
    // Polyline
    polyline?.remove();
    polygon?.remove();
    if (points.length >= 2) {
      const style = { color:'#1a7aff', weight:2.5, dashArray:'6,4', opacity:.9 };
      polyline = L.polyline(points.map(p=>[p.lat,p.lng]), style).addTo(map);
      if (mode === 'area' && points.length >= 3) {
        polygon = L.polygon(points.map(p=>[p.lat,p.lng]),
          { color:'#1a7aff', weight:1.5, fillColor:'#1a7aff',
            fillOpacity:.12, dashArray:'5,4' }).addTo(map);
      }
    }

    // Label floating di midpoint terakhir
    labelMarker?.remove();
    if (points.length >= 2) {
      const last   = points[points.length - 1];
      const prev   = points[points.length - 2];
      const midLat = (last.lat + prev.lat) / 2;
      const midLng = (last.lng + prev.lng) / 2;
      const text   = mode === 'distance'
        ? fmtDistance(haversine(prev, last))
        : (points.length >= 3 ? fmtArea(polygonArea()) : '');
      if (text) {
        labelMarker = L.marker([midLat, midLng], {
          icon: L.divIcon({ className:'measure-label', html: text, iconAnchor:[0,0] }),
          interactive: false,
        }).addTo(map);
      }
    }

    updateResult();
    updateHint();
  }

  // ── Dot markers ────────────────────────────────────────
  function addDot(latlng, index) {
    const dot = L.marker(latlng, {
      icon: L.divIcon({ className:'measure-dot', iconSize:[10,10], iconAnchor:[5,5] }),
      draggable: true,
      autoPan:   true,
    }).addTo(map);

    // Update posisi di array points saat titik digeser
    dot.on('drag', (e) => {
      points[index] = e.target.getLatLng();
      redraw();
    });
    dot.on('dragend', () => redraw());

    // Cursor hint
    dot.on('mouseover', () => { map.getContainer().style.cursor = 'grab'; });
    dot.on('mouseout',  () => { map.getContainer().style.cursor = 'crosshair'; });

    markers.push(dot);
    return dot;
  }

  // ── Map click handler ──────────────────────────────────
  function onMapClick(e) {
    if (!active) return;
   const idx = points.length;
    points.push(e.latlng);
    addDot(e.latlng, idx);
    redraw();
  }

  // ── Clear all ──────────────────────────────────────────
  function clearAll() {
    points = [];
    polyline?.remove();  polyline = null;
    polygon?.remove();   polygon  = null;
    labelMarker?.remove(); labelMarker = null;
    markers.forEach(m => m.remove());
    markers = [];
    updateResult();
    updateHint();
  }

  // ── Activate / deactivate ──────────────────────────────
  function activate() {
    active = true;
    btn.classList.add('active');
    panel.classList.add('visible');
    map.getContainer().style.cursor = 'crosshair';
    map.on('click', onMapClick);
  }

  function deactivate() {
    active = false;
    btn.classList.remove('active');
    panel.classList.remove('visible');
    map.getContainer().style.cursor = '';
    map.off('click', onMapClick);
    clearAll();
  }

  // ── Event bindings ─────────────────────────────────────
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    active ? deactivate() : activate();
  });

  // 2. Cegah klik di dalam panel agar tidak terhitung sebagai titik ukur
  // Gunakan API bawaan Leaflet untuk menonaktifkan interaksi peta di atas panel
  L.DomEvent.disableClickPropagation(panel);

  document.getElementById('mp-close')?.addEventListener('click', (e) => {
    e.stopPropagation();
    deactivate();
  });

  document.getElementById('mp-clear')?.addEventListener('click', (e) => {
    e.stopPropagation();
    clearAll();
  });

  document.getElementById('mp-undo')?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (points.length === 0) return;
    points.pop();
    const dot = markers.pop();
    dot?.off();
    dot?.remove();
    labelMarker?.remove(); labelMarker = null;
    redraw();
  });

  panel.querySelectorAll('.mp-mode-btn').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      mode = b.dataset.mode;
      panel.querySelectorAll('.mp-mode-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      clearAll();
    });
  });

  // ESC untuk keluar
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && active) deactivate();
  });
}