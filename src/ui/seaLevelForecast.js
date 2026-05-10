/**
 * src/ui/seaLevelForecast.js — v2.0
 * ─────────────────────────────────────────────────────────────────────
 * Tab "SLR View" di sidebar — hanya mode proyeksi SLR.
 *
 * PERUBAHAN v2:
 *  ✔ Tab Historis dihapus — hanya proyeksi SLR
 *  ✔ Titik muncul saat tab aktif, HILANG saat keluar tab
 *  ✔ Hanya titik dalam VIEWPORT peta yang dirender & dihitung
 *  ✔ Re-render saat pan/zoom (debounce 300ms)
 *  ✔ Warna bulatan tegas: stroke weight 1.5, fillOpacity 0.45,
 *    border solid + glow effect via box-shadow pada legenda
 *  ✔ Layout rapi: padding konsisten, gap antar section, font hierarchy
 *  ✔ Disclaimer lengkap: IPCC AR6, SSP, sumber nilai SLR, formula risiko
 *  ✔ Tooltip ⓘ menjelaskan asal nilai kenaikan muka air
 * ─────────────────────────────────────────────────────────────────────
 */

// ── IPCC AR6 WGI Table 9.9 — Global Mean SLR median (meter dari 2005) ──
const SLR_SCENARIOS = {
  ssp126: {
    label: 'SSP1-2.6',
    short: 'SSP1-2.6',
    color: '#22c55e',
    curve: [[2025,0.08],[2030,0.10],[2040,0.14],[2050,0.18],
            [2060,0.23],[2070,0.28],[2080,0.33],[2090,0.38],[2100,0.44]],
  },
  ssp245: {
    label: 'SSP2-4.5',
    short: 'SSP2-4.5',
    color: '#f59e0b',
    curve: [[2025,0.09],[2030,0.12],[2040,0.17],[2050,0.24],
            [2060,0.31],[2070,0.39],[2080,0.47],[2090,0.56],[2100,0.65]],
  },
  ssp585: {
    label: 'SSP5-8',
    short: 'SSP5-8.5',
    color: '#ef4444',
    curve: [[2025,0.10],[2030,0.14],[2040,0.21],[2050,0.32],
            [2060,0.44],[2070,0.57],[2080,0.71],[2090,0.86],[2100,1.01]],
  },
};

function _slrAt(scenario, year) {
  const c = SLR_SCENARIOS[scenario].curve;
  if (year <= c[0][0])            return c[0][1];
  if (year >= c[c.length - 1][0]) return c[c.length - 1][1];
  for (let i = 0; i < c.length - 1; i++) {
    const [y0, v0] = c[i], [y1, v1] = c[i + 1];
    if (year >= y0 && year <= y1)
      return v0 + (v1 - v0) * ((year - y0) / (y1 - y0));
  }
  return 0;
}

// ── State ────────────────────────────────────────────────
const S = {
  active:        false,
  scenario:      'ssp245',
  fcYear:        2025,
  fcPlaying:     false,
  fcTimer:       null,
  fcSpeed:       800,
  ratesFeatures: [],
  overlayLayer:  null,
  mapInstance:   null,
  tileLoader:    null,
  _moveDebounce: null,
};

// ── PUBLIC API ────────────────────────────────────────────

export function setupSLRForecast(mapInstance, tileLoader) {
  if (!mapInstance || !tileLoader) return;
  S.mapInstance = mapInstance;
  S.tileLoader  = tileLoader;

  _injectStyles();
  _buildTabContent();
  _bindEvents();

  S.overlayLayer = window.L.layerGroup().addTo(mapInstance);

  // Re-render saat viewport berubah (debounce 300ms)
  mapInstance.on('moveend zoomend', () => {
    if (!S.active) return;
    clearTimeout(S._moveDebounce);
    S._moveDebounce = setTimeout(_renderOverlay, 300);
  });
}

/** Akumulasi data rates dari tileLoader */
export function updateSLRRatesData(features) {
  if (!Array.isArray(features)) return;
  const newCoords = new Set(features.map(f => f.geometry.coordinates.join(',')));
  S.ratesFeatures = [
    ...S.ratesFeatures.filter(f => !newCoords.has(f.geometry.coordinates.join(','))),
    ...features,
  ];
  if (S.active) _renderOverlay();
}

/**
 * Dipanggil dari sidebar.js saat tab berganti.
 * tabId === 'forecast' → aktif dan render; selainnya → clear overlay
 */
export function onTabChange(tabId) {
  const nowActive = tabId === 'forecast';
  if (nowActive === S.active) return;
  S.active = nowActive;

  if (nowActive) {
    _renderOverlay();
  } else {
    _stopFc();
    S.overlayLayer?.clearLayers();
  }
}

// ── BUILD HTML ────────────────────────────────────────────
function _buildTabContent() {
  const panel = document.getElementById('tab-forecast');
  if (!panel) return;

  panel.innerHTML = `

    <!-- Header label -->
    <div class="slr-header-label">PROYEKSI SEA LEVEL RISE</div>

    <!-- Tahun besar -->
    <div class="slr-year-hero">
      <span class="slr-year-num" id="slr-fc-year">2025</span>
      <span class="slr-year-badge">PROYEKSI</span>
    </div>

    <!-- Slider tahun -->
    <input type="range" class="slr-slider" id="slr-fc-slider"
           min="2025" max="2100" value="2025" step="1"/>
    <div class="slr-slider-labels">
      <span>2025</span><span>2100</span>
    </div>

    <!-- Skenario -->
    <div class="slr-section-gap">
      <div class="slr-section-label">SKENARIO IPCC AR6</div>
      <div class="slr-scen-row">
        <button class="slr-scen-btn" data-scen="ssp126" style="--sc:#22c55e">
          <span class="slr-scen-dot"></span>SSP1-2.6
        </button>
        <button class="slr-scen-btn active" data-scen="ssp245" style="--sc:#f59e0b">
          <span class="slr-scen-dot"></span>SSP2-4.5
        </button>
        <button class="slr-scen-btn" data-scen="ssp585" style="--sc:#ef4444">
          <span class="slr-scen-dot"></span>SSP5-8.5
        </button>
      </div>
    </div>

    <!-- Play controls -->
    <div class="slr-controls">
      <button class="slr-ctrl-btn" id="slr-fc-prev" title="Mundur 1 tahun">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button class="slr-ctrl-btn slr-play-btn" id="slr-fc-play" title="Play / Pause">
        <svg id="slr-fc-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      </button>
      <button class="slr-ctrl-btn" id="slr-fc-next" title="Maju 1 tahun">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
      <select class="slr-speed-sel" id="slr-fc-speed">
        <option value="1500">Lambat</option>
        <option value="800" selected>Normal</option>
        <option value="400">Cepat</option>
        <option value="120">Sangat cepat</option>
      </select>
    </div>

    <!-- Metrik -->
    <div class="slr-info-box">
      <div class="slr-info-row">
        <span class="slr-info-lbl">Skenario</span>
        <span class="slr-info-val" id="slr-m-scen">–</span>
      </div>
      <div class="slr-info-row">
        <span class="slr-info-lbl">
          Kenaikan muka air
          <span class="slr-hint" title="Nilai median global IPCC AR6 WGI Table 9.9, baseline 2005. Bukan nilai lokal — subsidence tanah tidak diperhitungkan.">ⓘ</span>
        </span>
        <span class="slr-info-val" id="slr-m-slr" style="color:#f59e0b">–</span>
      </div>
      <div class="slr-info-row">
        <span class="slr-info-lbl">Delta dari sekarang</span>
        <span class="slr-info-val" id="slr-m-delta">–</span>
      </div>
      <div class="slr-divider-thin"></div>
      <div class="slr-info-row">
        <span class="slr-info-lbl slr-lbl-high">● Risiko Tinggi</span>
        <span class="slr-info-val slr-val-high" id="slr-m-high">–</span>
      </div>
      <div class="slr-info-row">
        <span class="slr-info-lbl slr-lbl-mid">● Risiko Sedang</span>
        <span class="slr-info-val slr-val-mid" id="slr-m-mid">–</span>
      </div>
      <div class="slr-info-row">
        <span class="slr-info-lbl slr-lbl-low">● Relatif Aman</span>
        <span class="slr-info-val slr-val-low" id="slr-m-low">–</span>
      </div>
    </div>

    <!-- Legenda -->
    <div class="slr-section-gap">
      <div class="slr-section-label">LEGENDA ZONA RISIKO</div>
      <div class="slr-legend">
        <div class="slr-leg-item">
          <div class="slr-leg-dot slr-dot-high"></div>
          <div>
            <div class="slr-leg-name">Risiko Tinggi</div>
            <div class="slr-leg-desc">Abrasi &gt; 2 m/thn atau efek SLR kumulatif &gt; 50 m</div>
          </div>
        </div>
        <div class="slr-leg-item">
          <div class="slr-leg-dot slr-dot-mid"></div>
          <div>
            <div class="slr-leg-name">Risiko Sedang</div>
            <div class="slr-leg-desc">Abrasi ringan atau SLR kumulatif 20–50 m</div>
          </div>
        </div>
        <div class="slr-leg-item">
          <div class="slr-leg-dot slr-dot-low"></div>
          <div>
            <div class="slr-leg-name">Relatif Aman</div>
            <div class="slr-leg-desc">Laju akresi aktif — garis pantai bergerak maju</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Disclaimer / Metodologi -->
    <div class="slr-section-gap">
      <div class="slr-section-label">TENTANG MODEL INI</div>
      <div class="slr-disclaimer">

        <div class="slr-disc-block">
          <div class="slr-disc-title">Apa itu IPCC AR6 &amp; Skenario SSP?</div>
          <div class="slr-disc-text">
            <a href="https://www.ipcc.ch/report/ar6/wg1/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent); padding-bottom: 1px;"><b>IPCC AR6</b></a> 
            (Sixth Assessment Report, 2021) adalah laporan ilmiah
            perubahan iklim global terkini. Proyeksi kenaikan muka air laut
            menggunakan skenario <a href="https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/#1.6" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent); padding-bottom: 1px;"><b>SSP</b></a> (Shared Socioeconomic Pathways) —
            jalur emisi gas rumah kaca yang berbeda hingga tahun 2100.
          </div>
        </div>

        <div class="slr-disc-block">
          <div class="slr-disc-scen-list">
            <div class="slr-disc-scen-item">
              <span class="slr-disc-dot" style="background:#22c55e"></span>
              <div class="slr-disc-text">
                <b>SSP1-2.6 — Optimis</b><br>
                Emisi turun drastis sesuai Paris Agreement (&lt;2°C).
                Kenaikan ~44 cm di 2100. Skenario terbaik yang masih realistis.
              </div>
            </div>
            <div class="slr-disc-scen-item">
              <span class="slr-disc-dot" style="background:#f59e0b"></span>
              <div class="slr-disc-text">
                <b>SSP2-4.5 — Moderat</b><br>
                Kebijakan iklim parsial, emisi memuncak sekitar 2040.
                Kenaikan ~65 cm di 2100. Skenario referensi umum.
              </div>
            </div>
            <div class="slr-disc-scen-item">
              <span class="slr-disc-dot" style="background:#ef4444"></span>
              <div class="slr-disc-text">
                <b>SSP5-8.5 — Pesimis</b><br>
                Emisi terus meningkat tanpa mitigasi berarti.
                Kenaikan ~101 cm di 2100. Digunakan sebagai batas atas perencanaan.
              </div>
            </div>
          </div>
        </div>

        <div class="slr-disc-block">
          <div class="slr-disc-title">Asal nilai kenaikan muka air</div>
          <div class="slr-disc-text">
            Nilai SLR diinterpolasi dari tabel median 
            <a href="https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-9/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent); padding-bottom: 1px;"><b>IPCC AR6 WG1 (Table 9.1)</b></a>,
            global mean sea level, baseline 2005. Khusus skenario SSP5-8.5 tahun 2100, permodelan menggunakan nilai ambang atas (1.01 m) untuk mencakup proyeksi risiko maksimal. Nilai ini <b>tidak memperhitungkan
            subsidence tanah lokal</b> — di beberapa wilayah pesisir Indonesia,
            penurunan tanah bisa 2–4× memperbesar dampak nyata di lapangan.
          </div>
        </div>

        <div class="slr-disc-block">
          <div class="slr-disc-title">Bagaimana zona risiko dihitung?</div>
          <div class="slr-disc-text">
            Model menggunakan <b>rates of change</b> (laju perubahan garis pantai,
            m/tahun per titik) sebagai input utama. Estimasi pergeseran horizontal:
          </div>
          <div class="slr-disc-formula">
            displacement = |abrasi/akresi| × ΔTahun + SLR × 20
          </div>
          <div class="slr-disc-text">
            Faktor ×20 = asumsi slope pantai 1:20 (1 m SLR ≈ 20 m mundur secara
            horizontal).
          </div>
        </div>

        <div class="slr-disc-warn">
          <strong style="display:block; margin-bottom:6px; color:var(--text-2);">⚠ Peringatan & Keterbatasan Model</strong>
          Model ini bersifat indikatif, disusun dari analisis <i>rates of change</i> hasil ekstraksi garis pantai multi-temporal (diadaptasi dari metode <b>Digital Earth Australia Coastlines</b> oleh Geoscience Australia).
          
          <div style="margin-top: 8px; font-weight: 600;">Akurasi hasil sangat dipengaruhi oleh:</div>
          <ul style="margin: 4px 0 8px 18px; padding: 0; line-height: 1.5;">
            <li>Kualitas & resolusi spasial-temporal citra satelit.</li>
            <li>Dinamika pasang surut laut dan tutupan awan.</li>
            <li>Performa algoritma proses ekstraksi garis pantai.</li>
          </ul>

          <span style="font-style: italic; opacity: 0.9;">
            Hasil pemodelan bukan representasi absolut posisi garis pantai. Tetap diperlukan validasi lapangan dan data referensi tambahan untuk pengambilan keputusan teknis.
          </span>
        </div>

      </div>
    </div>
  `;
}

// ── EVENTS ────────────────────────────────────────────────
function _bindEvents() {
  document.getElementById('slr-fc-slider')?.addEventListener('input', e => {
    _stopFc(); _setFcYear(parseInt(e.target.value));
  });
  document.getElementById('slr-fc-prev')?.addEventListener('click', () => {
    _stopFc(); _setFcYear(Math.max(2025, S.fcYear - 1));
  });
  document.getElementById('slr-fc-next')?.addEventListener('click', () => {
    _stopFc(); _setFcYear(Math.min(2100, S.fcYear + 1));
  });
  document.getElementById('slr-fc-play')?.addEventListener('click', () => {
    S.fcPlaying ? _stopFc() : _startFc();
  });
  document.getElementById('slr-fc-speed')?.addEventListener('change', e => {
    S.fcSpeed = parseInt(e.target.value);
    if (S.fcPlaying) { _stopFc(); _startFc(); }
  });

  document.querySelectorAll('.slr-scen-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.slr-scen-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      S.scenario = btn.dataset.scen;
      _updateMetrics();
      _renderOverlay();
    });
  });
  document.querySelectorAll('.sb-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('.sb-tab');
      if (!targetBtn) return;

      const tabId = targetBtn.getAttribute('data-tab');
      const nowActive = (tabId === 'forecast');

      // Jika status aktif berubah, jalankan atau matikan render
      if (S.active !== nowActive) {
        S.active = nowActive;
        if (nowActive) {
          _renderOverlay();
        } else {
          _stopFc();
          S.overlayLayer?.clearLayers();
        }
      }
    });
  });
}

// ── PLAY / STOP ───────────────────────────────────────────
function _startFc() {
  S.fcPlaying = true;
  _setIcon(true);
  const step = () => {
    if (!S.fcPlaying) return;
    const next = S.fcYear >= 2100 ? 2025 : S.fcYear + 1;
    _setFcYear(next);
    S.fcTimer = setTimeout(step, S.fcSpeed);
  };
  S.fcTimer = setTimeout(step, S.fcSpeed);
}

function _stopFc() {
  S.fcPlaying = false;
  clearTimeout(S.fcTimer);
  _setIcon(false);
}

function _setIcon(playing) {
  const el = document.getElementById('slr-fc-icon');
  if (!el) return;
  el.innerHTML = playing
    ? `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`
    : `<polygon points="5 3 19 12 5 21 5 3"/>`;
}

// ── SET TAHUN ─────────────────────────────────────────────
function _setFcYear(year) {
  S.fcYear = year;
  const el = document.getElementById('slr-fc-year');
  if (el) el.textContent = year;
  const sl = document.getElementById('slr-fc-slider');
  if (sl) sl.value = year;
  _updateMetrics();
  _renderOverlay();
}

// ── METRICS ───────────────────────────────────────────────
function _updateMetrics() {
  const year    = S.fcYear;
  const scen    = S.scenario;
  const slr     = _slrAt(scen, year);
  const delta   = year - 2025;
  const scenObj = SLR_SCENARIOS[scen];

  const q = id => document.getElementById(id);
  if (q('slr-m-scen')) {
    q('slr-m-scen').textContent  = scenObj.label;
    q('slr-m-scen').style.color  = scenObj.color;
  }
  if (q('slr-m-slr'))   q('slr-m-slr').textContent   = `+${slr.toFixed(2)} m`;
  if (q('slr-m-delta')) q('slr-m-delta').textContent  = `+${delta} tahun`;

  // Hitung hanya titik di viewport
  const viewport = _getFeaturesInViewport();
  const { high, mid, low } = _countRisk(viewport, slr, delta);
  if (q('slr-m-high')) q('slr-m-high').textContent = `${high.toLocaleString('id-ID')} titik`;
  if (q('slr-m-mid'))  q('slr-m-mid').textContent  = `${mid.toLocaleString('id-ID')} titik`;
  if (q('slr-m-low'))  q('slr-m-low').textContent  = `${low.toLocaleString('id-ID')} titik`;
}

// ── VIEWPORT FILTER ───────────────────────────────────────
function _getFeaturesInViewport() {
  if (!S.mapInstance) return S.ratesFeatures;
  const bounds = S.mapInstance.getBounds();
  const expanded = bounds.pad(0.05);
  return S.ratesFeatures.filter(f => {
    const [lng, lat] = f.geometry.coordinates;
    // Gunakan L.latLng agar Leaflet tidak bingung membedakan array LngLat vs LatLng
    return expanded.contains(window.L.latLng(lat, lng)); 
  });
}

// ── RISK MODEL ────────────────────────────────────────────
function _riskStyle(rate, slr_m, deltaYears) {
  const abrasiDispl = Math.abs(Math.min(0, rate)) * deltaYears;
  const slrDispl    = slr_m * 20;
  const total       = abrasiDispl + slrDispl;
  
  // PERBAIKAN: Gunakan ukuran dasar (50) ditambah efek pembesaran (total * 1.5)
  // Dengan cara ini, berapapun pertambahan nilainya di setiap tahun,
  // lingkaran akan selalu terlihat membesar secara perlahan dan responsif.
  const radius      = Math.min(1200, 50 + (total * 1.5)); 

  // Transparansi tegas (0.35 dan 0.30)
  if (rate < -2 || total > 50)
    return { cat:'high', color:'#ef4444', fill:'rgba(239,68,68,0.35)',  radius };
  if (rate < 0  || total > 20)
    return { cat:'mid',  color:'#f59e0b', fill:'rgba(245,158,11,0.35)', radius };
  
  // PERBAIKAN UNTUK AKRESI (Titik Hijau) agar juga ikut membesar perlahan
  const accR = Math.min(500, 50 + (rate * deltaYears * 0.8));
  return { cat:'low', color:'#22c55e', fill:'rgba(34,197,94,0.30)', radius: accR };
}

function _countRisk(features, slr_m, delta) {
  let high = 0, mid = 0, low = 0;
  features.forEach(f => {
    const r = f.properties?.rate_time ?? 0;
    const s = _riskStyle(r, slr_m, delta);
    if (s.cat === 'high') high++;
    else if (s.cat === 'mid') mid++;
    else low++;
  });
  return { high, mid, low };
}

// ── RENDER OVERLAY ────────────────────────────────────────
function _renderOverlay() {
  S.overlayLayer?.clearLayers();
  if (!S.active) return;

  const slr_m      = _slrAt(S.scenario, S.fcYear);
  const deltaYears = S.fcYear - 2025;
  const L          = window.L;

  // 1. Ambil HANYA titik-titik yang masuk di dalam kotak layar saat ini
  const inView = _getFeaturesInViewport();
  if (!inView.length) return;

  // 2. LOGIKA KERENGGANGAN DINAMIS: 
  // Hitung saringan berdasarkan jumlah titik di layar, bukan total memori.
  // Semakin Anda zoom in (data di layar sedikit), step akan otomatis menjadi 1 (tampil semua).
  // Semakin Anda zoom out (data di layar menumpuk), step akan membesar agar tidak lag.
  const MAX_ON_SCREEN = 50; // Anda bisa ubah angka ini untuk mengatur seberapa rapat standarnya
  const step = inView.length > MAX_ON_SCREEN ? Math.ceil(inView.length / MAX_ON_SCREEN) : 1;

  inView.forEach((f, i) => {
    // Terapkan saringan kerenggangan
    if (i % step !== 0) return;

    const [lng, lat] = f.geometry.coordinates;
    const rate = f.properties?.rate_time ?? 0;

    // Menggunakan fungsi _riskStyle "menggemuk" yang sudah kita perbaiki
    const s = _riskStyle(rate, slr_m, deltaYears);

    const abrasiDispl = Math.abs(Math.min(0, rate)) * deltaYears;
    const totalDispl  = (abrasiDispl + slr_m * 20).toFixed(0);

    L.circle([lat, lng], {
      radius:      s.radius,
      color:       s.color,
      fillColor:   s.fill,
      weight:      0.8,
      opacity:     0.8,
      fillOpacity: 1, // Transparansi mengambil dari rgb(a) di fungsi _riskStyle
    })
    .bindTooltip(
      `<b>Rate:</b> ${rate >= 0 ? '+' : ''}${rate.toFixed(2)} m/thn<br>` +
      `<b>SLR ${S.fcYear}:</b> +${slr_m.toFixed(2)} m<br>` +
      `<b>Est. mundur:</b> ~${totalDispl} m`,
      { sticky: true, className: 'slr-tip' }
    )
    .addTo(S.overlayLayer);
  });

  _updateMetrics();
}

// ── CSS ───────────────────────────────────────────────────
function _injectStyles() {
  if (document.getElementById('slr-styles')) return;
  const s = document.createElement('style');
  s.id = 'slr-styles';
  s.textContent = `

    /* ── Struktur tab ──────────────────────────────────── */
    #tab-forecast {
      padding: 16px 14px 24px;
      display: flex;
      flex-direction: column;
      gap: 0;
      overflow-y: auto;
    }

    /* Header label */
    .slr-header-label {
      font-size: 9px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; color: var(--text-3);
      margin-bottom: 8px;
    }

    /* Tahun besar */
    .slr-year-hero {
      display: flex; align-items: baseline; gap: 10px;
      margin-bottom: 14px;
    }
    .slr-year-num {
      font-size: 46px; font-weight: 800; line-height: 1;
      letter-spacing: -.02em;
      color: var(--text-1); font-family: var(--mono, monospace);
    }
    .slr-year-badge {
      font-size: 9px; font-weight: 700; letter-spacing: .1em;
      text-transform: uppercase;
      color: #f59e0b;
      padding: 3px 7px; border-radius: 4px;
      background: rgba(245,158,11,0.10);
      border: 1px solid rgba(245,158,11,0.22);
    }

    /* Slider */
    .slr-slider {
      display: block; width: 100%; height: 4px;
      accent-color: #f59e0b;
      margin-bottom: 5px; cursor: pointer;
    }
    .slr-slider-labels {
      display: flex; justify-content: space-between;
      font-size: 9px; color: var(--text-3);
    }

    /* Section gap */
    .slr-section-gap { margin-top: 18px; }
    .slr-section-label {
      font-size: 9px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; color: var(--text-3);
      margin-bottom: 9px;
    }

    /* Skenario */
    .slr-scen-row {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;
    }
    .slr-scen-btn {
      display: flex; align-items: center; justify-content: center; gap: 5px;
      padding: 7px 4px; border-radius: 7px; font-size: 10px; font-weight: 600;
      border: 1px solid var(--border); background: transparent;
      color: var(--text-3); cursor: pointer; transition: all .15s;
      font-family: var(--font); white-space: nowrap;
    }
    .slr-scen-btn:hover:not(.active) {
      background: var(--surface); color: var(--text-2);
    }
    .slr-scen-btn.active {
      background: color-mix(in srgb, var(--sc) 16%, transparent);
      border-color: color-mix(in srgb, var(--sc) 48%, transparent);
      color: var(--sc);
    }
    .slr-scen-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: var(--sc); flex-shrink: 0;
    }

    /* Controls */
    .slr-controls {
      display: flex; align-items: center; gap: 8px;
      margin-top: 14px; margin-bottom: 14px;
    }
    .slr-ctrl-btn {
      display: flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 7px; flex-shrink: 0;
      border: 1px solid var(--border); background: var(--surface);
      color: var(--text-2); cursor: pointer; transition: all .12s;
    }
    .slr-ctrl-btn:hover { background: var(--surface-2); color: var(--text-1); }
    .slr-play-btn {
      background: rgba(245,158,11,0.14);
      color: #f59e0b;
      border-color: rgba(245,158,11,0.35);
    }
    .slr-play-btn:hover { background: rgba(245,158,11,0.26); }
    .slr-speed-sel {
      flex: 1; padding: 7px 8px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 7px; color: var(--text-2);
      font-size: 11px; font-family: var(--font);
      cursor: pointer; outline: none;
    }

    /* Info box */
    .slr-info-box {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 9px; padding: 12px 13px;
      display: flex; flex-direction: column; gap: 8px;
    }
    .slr-info-row {
      display: flex; justify-content: space-between;
      align-items: center; gap: 8px;
    }
    .slr-info-lbl {
      font-size: 10px; color: var(--text-3);
      display: flex; align-items: center; gap: 4px;
      line-height: 1.4;
    }
    .slr-info-val {
      font-size: 11px; color: var(--text-1); font-weight: 600;
      white-space: nowrap;
    }
    .slr-hint {
      font-size: 9px; color: var(--text-3);
      cursor: help; opacity: .7;
    }
    .slr-divider-thin {
      height: 1px; background: var(--border); margin: 2px 0;
    }
    .slr-lbl-high { color: #ef4444 !important; }
    .slr-lbl-mid  { color: #f59e0b !important; }
    .slr-lbl-low  { color: #22c55e !important; }
    .slr-val-high { color: #ef4444 !important; }
    .slr-val-mid  { color: #f59e0b !important; }
    .slr-val-low  { color: #22c55e !important; }

    /* Legenda */
    .slr-legend { display: flex; flex-direction: column; gap: 10px; }
    .slr-leg-item { display: flex; align-items: flex-start; gap: 10px; }
    .slr-leg-dot {
      width: 14px; height: 14px; border-radius: 50%;
      flex-shrink: 0; margin-top: 2px;
    }
    .slr-dot-high { background:#ef4444; box-shadow: 0 0 8px rgba(239,68,68,0.7); }
    .slr-dot-mid  { background:#f59e0b; box-shadow: 0 0 8px rgba(245,158,11,0.7); }
    .slr-dot-low  { background:#22c55e; box-shadow: 0 0 8px rgba(34,197,94,0.7); }
    .slr-leg-name {
      font-size: 11px; font-weight: 600; color: var(--text-1);
      margin-bottom: 3px;
    }
    .slr-leg-desc { font-size: 9px; color: var(--text-3); line-height: 1.5; }

    /* Disclaimer */
    .slr-disclaimer {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 9px; padding: 13px 13px;
      display: flex; flex-direction: column; gap: 14px;
    }
    .slr-disc-block { display: flex; flex-direction: column; gap: 6px; }
    .slr-disc-title {
      font-size: 10px; font-weight: 700; color: var(--text-2);
      text-transform: uppercase; letter-spacing: .04em;
    }
    .slr-disc-text {
      font-size: 10px; color: var(--text-3); line-height: 1.7;
    }
    .slr-disc-scen-list { display: flex; flex-direction: column; gap: 10px; }
    .slr-disc-scen-item {
      display: flex; gap: 8px; align-items: flex-start;
    }
    .slr-disc-dot {
      width: 8px; height: 8px; border-radius: 50%;
      flex-shrink: 0; margin-top: 4px;
    }
    .slr-disc-formula {
      padding: 7px 10px; border-radius: 6px;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--border);
      font-family: var(--mono, monospace);
      font-size: 10px; color: var(--text-2);
      margin: 4px 0;
    }
    .slr-disc-warn {
      font-size: 9px; color: var(--text-3); line-height: 1.6;
      padding: 8px 10px; border-radius: 6px;
      background: rgba(245,158,11,0.06);
      border: 1px solid rgba(245,158,11,0.18);
    }

    /* Leaflet tooltip */
    .slr-tip {
      background: #0c1526 !important;
      border: 1px solid rgba(255,255,255,0.14) !important;
      color: #eef2ff !important;
      font-size: 11px !important; line-height: 1.7 !important;
      border-radius: 7px !important; padding: 7px 10px !important;
      box-shadow: 0 4px 16px rgba(0,0,0,0.5) !important;
    }
    .slr-tip::before { display: none !important; }
  `;
  document.head.appendChild(s);
}