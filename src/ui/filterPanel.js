/**
 * src/ui/filterPanel.js — v2
 * Perubahan dari v1:
 *  - Hapus preset "5 Thn Terakhir" & "2000–2010"
 *  - Tambah mode "Tahun Tunggal" — tampilkan 1 tahun saja
 *  - Toggle switch antara mode Range dan mode Tunggal
 */

export class FilterPanel {
  constructor({ container, yearMin = 1985, yearMax = 2025, onFilterChange }) {
    this.container      = container;
    this.yearMin        = yearMin;
    this.yearMax        = yearMax;
    this.currentMin     = yearMin;
    this.currentMax     = yearMax;
    this.singleYear     = yearMax;   // tahun tunggal aktif
    this.mode           = 'range';   // 'range' | 'single'
    this.onFilterChange = onFilterChange;
    this.activeTypes    = new Set(['abrasi', 'akresi', 'stabil']);
    this._animTimer     = null;
    this._animYear      = yearMin;
    this._build();
  }

  // ── PUBLIC ──────────────────────────────────────────────

  getFilter() {
    const yearMin = this.mode === 'single' ? this.singleYear : this.currentMin;
    const yearMax = this.mode === 'single' ? this.singleYear : this.currentMax;
    return {
      yearMin,
      yearMax,
      showAbrasi: this.activeTypes.has('abrasi'),
      showAkresi: this.activeTypes.has('akresi'),
      showStabil: this.activeTypes.has('stabil'),
      minRate:    parseInt(document.getElementById('fp-rate')?.value ?? 0),
    };
  }

  // ── BUILD ────────────────────────────────────────────────

  _build() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="panel" id="panel-filter">
        <div class="panel-header">
          <div class="ph-left">
            <div class="ph-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
            </div>
            <span class="ph-title">Filter Tampilan</span>
          </div>
          <svg class="ph-chev open" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

        <div class="panel-body" style="gap:12px;">

          <!-- ── MODE TOGGLE: Range vs Tunggal ── -->
          <div class="filter-section">
            <div class="mode-toggle-wrap">
              <button class="mode-btn active" id="fp-btn-range" data-mode="range">
                Rentang Tahun
              </button>
              <button class="mode-btn" id="fp-btn-single" data-mode="single">
                Tahun Tunggal
              </button>
            </div>
          </div>

          <!-- ── MODE RANGE ── -->
          <div class="filter-section" id="fp-section-range">
            <div class="filter-label-row">
              <span class="filter-label">Rentang Tahun</span>
              <span class="filter-year-display">
                <span id="fp-y1">${this.yearMin}</span>
                <span style="color:var(--text-3);margin:0 3px;">–</span>
                <span id="fp-y2">${this.yearMax}</span>
              </span>
            </div>
            <div class="dual-range-wrap">
              <div class="range-track">
                <div class="range-fill" id="fp-fill"></div>
              </div>
              <input type="range" class="range-input range-min" id="fp-min"
                     min="${this.yearMin}" max="${this.yearMax}"
                     value="${this.yearMin}" step="1">
              <input type="range" class="range-input range-max" id="fp-max"
                     min="${this.yearMin}" max="${this.yearMax}"
                     value="${this.yearMax}" step="1">
            </div>
            <div class="preset-row">
              <button class="preset-btn" data-min="${this.yearMin}" data-max="${this.yearMax}">
                Semua
              </button>
              <button class="preset-btn"
                      data-min="${Math.max(this.yearMin, this.yearMax - 9)}"
                      data-max="${this.yearMax}">
                10 Tahun Terakhir
              </button>
            </div>
          </div>

          <!-- ── MODE TUNGGAL ── -->
          <div class="filter-section" id="fp-section-single" style="display:none;">
            <div class="filter-label-row">
              <span class="filter-label">Pilih Tahun</span>
              <span class="filter-year-display">
                <span id="fp-single-display">${this.yearMax}</span>
              </span>
            </div>
            <!-- Slider tunggal -->
            <input type="range" class="gis-slider" id="fp-single-slider"
                   min="${this.yearMin}" max="${this.yearMax}"
                   value="${this.yearMax}" step="1">
            <div style="display:flex;justify-content:space-between;margin-top:3px;">
              <span style="font-size:10px;color:var(--text-3);">${this.yearMin}</span>
              <span style="font-size:10px;color:var(--text-3);">${this.yearMax}</span>
            </div>
            <!-- Quick jump: pilih tahun via select -->
            <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
              <span style="font-size:11px;color:var(--text-3);">Lompat ke:</span>
              <select id="fp-single-select" class="speed-select" style="flex:1;">
                ${Array.from(
                  { length: this.yearMax - this.yearMin + 1 },
                  (_, i) => this.yearMax - i
                ).map(y =>
                  `<option value="${y}"${y === this.yearMax ? ' selected' : ''}>${y}</option>`
                ).join('')}
              </select>
            </div>
          </div>

          <div class="filter-divider"></div>

          <!-- ── ANIMASI ── -->
          <div class="filter-section">
            <div class="filter-label-row">
              <span class="filter-label">Animasi Perubahan</span>
              <span class="filter-anim-year" id="fp-anim-year" style="display:none;">
                <span id="fp-anim-val">${this.yearMin}</span>
              </span>
            </div>
            <div class="anim-controls">
              <button class="anim-btn" id="fp-play">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Play
              </button>
              <button class="anim-btn" id="fp-pause" style="display:none;">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <rect x="6" y="4" width="4" height="16"/>
                  <rect x="14" y="4" width="4" height="16"/>
                </svg>
                Pause
              </button>
              <button class="anim-btn" id="fp-reset">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" width="13" height="13">
                  <polyline points="1 4 1 10 7 10"/>
                  <path d="M3.51 15a9 9 0 1 0 .49-3.18"/>
                </svg>
                Reset
              </button>
              <div class="anim-speed">
                <span style="font-size:10px;color:var(--text-3);">Kecepatan</span>
                <select id="fp-speed" class="speed-select">
                  <option value="1200">Lambat</option>
                  <option value="700" selected>Normal</option>
                  <option value="300">Cepat</option>
                </select>
              </div>
            </div>
            <div class="anim-progress" id="fp-anim-bar" style="display:none;">
              <div class="anim-progress-fill" id="fp-anim-fill"></div>
            </div>
          </div>

          <div class="filter-divider"></div>

          <!-- ── TIPE PERUBAHAN ── -->
          <div class="filter-section">
            <div class="filter-label-row">
              <span class="filter-label">Tipe Perubahan Pantai</span>
            </div>
            <div class="type-chips">
              <button class="type-chip active" data-type="abrasi">
                <span class="chip-dot" style="background:#ff4d4d;"></span>
                Abrasi
              </button>
              <button class="type-chip active" data-type="akresi">
                <span class="chip-dot" style="background:#00c9a7;"></span>
                Akresi
              </button>
              <button class="type-chip active" data-type="stabil">
                <span class="chip-dot" style="background:#8ba3c7;"></span>
                Stabil
              </button>
            </div>
          </div>

          <div class="filter-divider"></div>

          <!-- ── LAJU MINIMUM ── -->
          <div class="filter-section">
            <div class="filter-label-row">
              <span class="filter-label">Min. Laju Perubahan</span>
              <span style="font-size:11px;font-family:var(--mono);color:var(--accent);">
                |rate| ≥ <span id="fp-rate-val">0</span> m/th
              </span>
            </div>
            <input type="range" class="gis-slider" id="fp-rate"
                   min="0" max="50" value="0" step="1">
            <div style="display:flex;justify-content:space-between;margin-top:3px;">
              <span style="font-size:10px;color:var(--text-3);">0 (semua)</span>
              <span style="font-size:10px;color:var(--text-3);">50 m/th</span>
            </div>
          </div>

        </div>
      </div>`;

    this._injectStyles();
    this._bindEvents();
    this._syncRangeUI();
  }

  // ── EVENTS ───────────────────────────────────────────────

  _bindEvents() {
    // Mode toggle
    this.container.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.mode = btn.dataset.mode;
        this.container.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.getElementById('fp-section-range').style.display =
          this.mode === 'range' ? '' : 'none';
        document.getElementById('fp-section-single').style.display =
          this.mode === 'single' ? '' : 'none';

        this._stopAnim();
        document.getElementById('fp-play').style.display  = '';
        document.getElementById('fp-pause').style.display = 'none';
        document.getElementById('fp-anim-year').style.display = 'none';
        document.getElementById('fp-anim-bar').style.display  = 'none';

        this._emitChange();
      });
    });

    // Range slider
    const minEl = document.getElementById('fp-min');
    const maxEl = document.getElementById('fp-max');
    [minEl, maxEl].forEach(el => {
      el?.addEventListener('input', () => {
        let min = parseInt(minEl.value);
        let max = parseInt(maxEl.value);
        if (min > max - 1) { min = max - 1; minEl.value = min; }
        if (max < min + 1) { max = min + 1; maxEl.value = max; }
        this.currentMin = min;
        this.currentMax = max;
        this._syncRangeUI();
        this._emitChange();
      });
    });

    // Preset range
    this.container.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const min = parseInt(btn.dataset.min);
        const max = parseInt(btn.dataset.max);
        document.getElementById('fp-min').value = min;
        document.getElementById('fp-max').value = max;
        this.currentMin = min;
        this.currentMax = max;
        this._syncRangeUI();
        this._emitChange();
      });
    });

    // Single slider
    const singleSlider = document.getElementById('fp-single-slider');
    const singleSelect = document.getElementById('fp-single-select');

    singleSlider?.addEventListener('input', () => {
      this.singleYear = parseInt(singleSlider.value);
      const disp = document.getElementById('fp-single-display');
      if (disp) disp.textContent = this.singleYear;
      if (singleSelect) singleSelect.value = this.singleYear;
      this._emitChange();
    });

    singleSelect?.addEventListener('change', () => {
      this.singleYear = parseInt(singleSelect.value);
      const disp = document.getElementById('fp-single-display');
      if (disp) disp.textContent = this.singleYear;
      if (singleSlider) singleSlider.value = this.singleYear;
      this._emitChange();
    });

    // Type chips
    this.container.querySelectorAll('.type-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        if (this.activeTypes.has(type)) {
          if (this.activeTypes.size > 1) {
            this.activeTypes.delete(type);
            btn.classList.remove('active');
          }
        } else {
          this.activeTypes.add(type);
          btn.classList.add('active');
        }
        this._emitChange();
      });
    });

    // Rate slider
    document.getElementById('fp-rate')?.addEventListener('input', (e) => {
      const val = document.getElementById('fp-rate-val');
      if (val) val.textContent = e.target.value;
      this._emitChange();
    });

    // Animasi
    document.getElementById('fp-play')?.addEventListener('click',  () => this._startAnim());
    document.getElementById('fp-pause')?.addEventListener('click', () => this._pauseAnim());
    document.getElementById('fp-reset')?.addEventListener('click', () => this._resetAnim());
  }

  // ── SLIDER UI SYNC ───────────────────────────────────────

  _syncRangeUI() {
    const minEl = document.getElementById('fp-min');
    const maxEl = document.getElementById('fp-max');
    const fill  = document.getElementById('fp-fill');
    const y1    = document.getElementById('fp-y1');
    const y2    = document.getElementById('fp-y2');
    if (!fill) return;

    if (minEl) minEl.value = this.currentMin;
    if (maxEl) maxEl.value = this.currentMax;
    if (y1)    y1.textContent = this.currentMin;
    if (y2)    y2.textContent = this.currentMax;

    const range = this.yearMax - this.yearMin;
    fill.style.left  = ((this.currentMin - this.yearMin) / range * 100) + '%';
    fill.style.right = ((this.yearMax - this.currentMax) / range * 100) + '%';
  }

  // ── ANIMASI ──────────────────────────────────────────────

  _startAnim() {
    this._stopAnim();
    // Animasi selalu per-tahun (mode single otomatis)
    const startYear = this.mode === 'range' ? this.currentMin : this.yearMin;
    const endYear   = this.mode === 'range' ? this.currentMax : this.yearMax;
    this._animYear  = startYear;

    document.getElementById('fp-play').style.display   = 'none';
    document.getElementById('fp-pause').style.display  = '';
    document.getElementById('fp-anim-year').style.display = '';
    document.getElementById('fp-anim-bar').style.display  = '';

    const speed = parseInt(document.getElementById('fp-speed')?.value ?? 700);

    const tick = () => {
      if (this._animYear > endYear) { this._stopAnim(); this._resetAnim(); return; }

      const animVal = document.getElementById('fp-anim-val');
      if (animVal) animVal.textContent = this._animYear;

      const pct  = ((this._animYear - startYear) / (endYear - startYear || 1)) * 100;
      const fill = document.getElementById('fp-anim-fill');
      if (fill) fill.style.width = pct + '%';

      this.onFilterChange?.({
        yearMin:    this._animYear,
        yearMax:    this._animYear,
        showAbrasi: this.activeTypes.has('abrasi'),
        showAkresi: this.activeTypes.has('akresi'),
        showStabil: this.activeTypes.has('stabil'),
        minRate:    parseInt(document.getElementById('fp-rate')?.value ?? 0),
        animMode:   true,
      });

      this._animYear++;
      this._animTimer = setTimeout(tick, speed);
    };

    tick();
  }

  _pauseAnim() {
    this._stopAnim();
    document.getElementById('fp-play').style.display  = '';
    document.getElementById('fp-pause').style.display = 'none';
  }

  _resetAnim() {
    this._stopAnim();
    document.getElementById('fp-play').style.display      = '';
    document.getElementById('fp-pause').style.display     = 'none';
    document.getElementById('fp-anim-year').style.display = 'none';
    document.getElementById('fp-anim-bar').style.display  = 'none';
    this._emitChange();
  }

  _stopAnim() {
    if (this._animTimer) { clearTimeout(this._animTimer); this._animTimer = null; }
  }

  // ── EMIT ─────────────────────────────────────────────────

  _emitChange() { this.onFilterChange?.(this.getFilter()); }

  // ── STYLES ───────────────────────────────────────────────

  _injectStyles() {
    if (document.getElementById('fp-styles')) return;
    const s = document.createElement('style');
    s.id = 'fp-styles';
    s.textContent = `
      .filter-section { display:flex; flex-direction:column; gap:7px; }
      .filter-divider { height:1px; background:var(--border); margin:2px 0; }
      .filter-label-row { display:flex; align-items:center; justify-content:space-between; }
      .filter-label { font-size:11px; font-weight:600; color:var(--text-2);
                      text-transform:uppercase; letter-spacing:.06em; }
      .filter-year-display { font-size:12px; font-family:var(--mono);
                             color:var(--accent); font-weight:500; }

      /* Mode toggle */
      .mode-toggle-wrap { display:flex; background:var(--surface-2);
                          border:1px solid var(--border); border-radius:var(--r-sm);
                          padding:2px; gap:2px; }
      .mode-btn { flex:1; padding:5px 8px; border-radius:4px; font-size:11px;
                  font-weight:500; cursor:pointer; border:none; background:transparent;
                  color:var(--text-3); font-family:var(--font); transition:all .15s; }
      .mode-btn.active { background:var(--accent); color:#fff; }

      /* Dual range */
      .dual-range-wrap { position:relative; height:28px; display:flex; align-items:center; }
      .range-track { position:absolute; left:0; right:0; height:4px;
                     background:var(--surface-2); border-radius:2px;
                     border:1px solid var(--border); }
      .range-fill  { position:absolute; top:0; bottom:0;
                     background:var(--accent); border-radius:2px; }
      .range-input { position:absolute; width:100%; pointer-events:none;
                     -webkit-appearance:none; appearance:none;
                     background:transparent; height:4px; }
      .range-input::-webkit-slider-thumb {
        -webkit-appearance:none; width:16px; height:16px; border-radius:50%;
        background:var(--accent); border:2px solid var(--navy-mid);
        box-shadow:0 0 0 1px var(--accent); cursor:pointer; pointer-events:all; }
      .range-input::-moz-range-thumb {
        width:16px; height:16px; border-radius:50%;
        background:var(--accent); border:2px solid var(--navy-mid);
        cursor:pointer; pointer-events:all; }

      /* Presets */
      .preset-row { display:flex; gap:5px; flex-wrap:wrap; }
      .preset-btn { padding:3px 9px; border-radius:4px; font-size:11px; cursor:pointer;
                    border:1px solid var(--border); background:transparent;
                    color:var(--text-2); font-family:var(--font); transition:all .12s; }
      .preset-btn:hover { background:var(--surface-2); color:var(--text-1); }

      /* Type chips */
      .type-chips { display:flex; gap:6px; flex-wrap:wrap; }
      .type-chip { display:flex; align-items:center; gap:5px; padding:4px 10px;
                   border-radius:20px; font-size:11px; font-weight:500; cursor:pointer;
                   border:1px solid var(--border); background:transparent;
                   color:var(--text-3); font-family:var(--font); transition:all .15s; }
      .type-chip.active { color:var(--text-1); border-color:var(--border-md);
                          background:var(--surface-2); }
      .chip-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }

      /* Animasi */
      .anim-controls { display:flex; align-items:center; gap:6px; flex-wrap:wrap; }
      .anim-btn { display:flex; align-items:center; gap:5px; padding:5px 11px;
                  border-radius:var(--r-sm); font-size:11px; font-weight:500;
                  cursor:pointer; border:1px solid var(--border); background:transparent;
                  color:var(--text-2); font-family:var(--font); transition:all .12s; }
      .anim-btn:hover { background:var(--surface-2); color:var(--text-1); }
      .anim-speed { display:flex; align-items:center; gap:5px; margin-left:auto; }
      .speed-select { background:var(--surface); border:1px solid var(--border);
                      color:var(--text-2); font-size:11px; border-radius:4px;
                      padding:2px 6px; font-family:var(--font); cursor:pointer; }
      .filter-anim-year { font-size:12px; font-family:var(--mono);
                          color:var(--amber); font-weight:600; }
      .anim-progress { height:3px; background:var(--surface-2); border-radius:2px;
                       overflow:hidden; margin-top:4px; }
      .anim-progress-fill { height:100%; background:var(--amber);
                            border-radius:2px; transition:width .25s; width:0%; }
    `;
    document.head.appendChild(s);
  }
}