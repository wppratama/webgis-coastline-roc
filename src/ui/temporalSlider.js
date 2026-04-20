/**
 * src/ui/temporalSlider.js
 * ─────────────────────────────────────────────────────────────
 * Temporal slider untuk filter garis pantai berdasarkan tahun.
 * Membutuhkan noUiSlider (import via CDN atau npm).
 *
 * Tambahkan di index.html:
 *   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.7.1/nouislider.min.css">
 *   <script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.7.1/nouislider.min.js"></script>
 *
 * Tambahkan div di sidebar HTML:
 *   <div id="temporal-slider-wrap"></div>
 */

export function setupTemporalSlider({ container, yearMin, yearMax, onChange }) {
  if (!container || typeof noUiSlider === 'undefined') return;

  // ── Build HTML panel ──
  container.innerHTML = `
    <div class="panel" style="margin-top:0;">
      <div class="panel-header">
        <div class="ph-left">
          <div class="ph-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <span class="ph-title">Filter Tahun</span>
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          <span id="year-label-min" style="font-size:11px;font-family:var(--mono);color:var(--accent);">${yearMin}</span>
          <span style="font-size:10px;color:var(--text-3);">—</span>
          <span id="year-label-max" style="font-size:11px;font-family:var(--mono);color:var(--accent);">${yearMax}</span>
        </div>
      </div>
      <div class="panel-body">
        <div id="year-slider" style="margin: 8px 4px 4px;"></div>
        <div style="display:flex;justify-content:space-between;margin-top:6px;">
          <span style="font-size:10px;color:var(--text-3);">${yearMin}</span>
          <span style="font-size:10px;color:var(--text-3);">${yearMax}</span>
        </div>
        <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;" id="year-quick-btns">
          <button class="yr-btn" data-min="${yearMin}" data-max="${yearMax}" 
                  style="padding:3px 9px;border-radius:4px;border:1px solid var(--border);
                         background:transparent;color:var(--text-2);font-size:11px;cursor:pointer;">
            Semua
          </button>
          <button class="yr-btn" data-min="2000" data-max="${yearMax}"
                  style="padding:3px 9px;border-radius:4px;border:1px solid var(--border);
                         background:transparent;color:var(--text-2);font-size:11px;cursor:pointer;">
            2000–kini
          </button>
          <button class="yr-btn" data-min="2010" data-max="${yearMax}"
                  style="padding:3px 9px;border-radius:4px;border:1px solid var(--border);
                         background:transparent;color:var(--text-2);font-size:11px;cursor:pointer;">
            2010–kini
          </button>
        </div>
      </div>
    </div>
  `;

  // ── Init noUiSlider ──
  const sliderEl = document.getElementById('year-slider');
  noUiSlider.create(sliderEl, {
    start:   [yearMin, yearMax],
    connect: true,
    step:    1,
    range:   { min: yearMin, max: yearMax },
    tooltips: false,
  });

  // ── Styling slider ──
  sliderEl.querySelector('.noUi-connect').style.background = 'var(--accent)';

  // ── Update label & callback ──
  sliderEl.noUiSlider.on('update', (values) => {
    const [min, max] = values.map(Math.round);
    document.getElementById('year-label-min').textContent = min;
    document.getElementById('year-label-max').textContent = max;
  });

  sliderEl.noUiSlider.on('change', (values) => {
    const [min, max] = values.map(Math.round);
    onChange?.(min, max);
  });

  // ── Quick buttons ──
  container.querySelectorAll('.yr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const min = parseInt(btn.dataset.min);
      const max = parseInt(btn.dataset.max);
      sliderEl.noUiSlider.set([min, max]);
      onChange?.(min, max);
    });
  });
}
