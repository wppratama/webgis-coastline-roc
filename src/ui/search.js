/**
 * src/ui/search.js
 * Geocoder Nominatim — search lokasi di Indonesia.
 * Ekstrak langsung dari main.js lama, dibungkus jadi fungsi export.
 */

import L from 'leaflet';

export function setupSearch(map) {
  const searchInput    = document.getElementById('search-input');
  const searchDropdown = document.getElementById('search-dropdown');
  if (!searchInput || !searchDropdown) return;

  let searchTimeout = null;
  let searchMarker  = null;

  function clearMarker() {
    if (searchMarker) { map.removeLayer(searchMarker); searchMarker = null; }
  }

  function renderDropdown(items) {
    searchDropdown.innerHTML = '';
    if (!items?.length) {
      searchDropdown.innerHTML = '<div class="search-empty">Lokasi tidak ditemukan</div>';
      searchDropdown.classList.add('visible');
      return;
    }

    const typeIcon = {
      city:'🏙️', town:'🏘️', village:'🏡', administrative:'📍',
      island:'🏝️', bay:'🌊', river:'🏞️', peak:'⛰️', suburb:'🏘️',
    };

    items.forEach(item => {
      const row  = document.createElement('div');
      row.className = 'search-item';
      const icon = typeIcon[item.type] ?? typeIcon[item.addresstype] ?? '📍';
      const name = item.name || item.display_name.split(',')[0];

      row.innerHTML = `
        <div class="search-item-icon">${icon}</div>
        <div class="search-item-text">
          <span class="search-item-name">${name}</span>
          <span class="search-item-sub">${item.display_name}</span>
        </div>`;

      row.addEventListener('click', () => {
        const lat = parseFloat(item.lat);
        const lon = parseFloat(item.lon);
        clearMarker();

        searchMarker = L.circleMarker([lat, lon], {
          radius: 8, fillColor: '#1a7aff', color: '#fff',
          weight: 2, opacity: 1, fillOpacity: 1,
        }).addTo(map);

        searchMarker.bindPopup(
          `<div class="gis-popup">
            <div class="popup-header" style="border-color:#1a7aff">
              <span class="popup-icon">${icon}</span>
              <span class="popup-title">${name}</span>
            </div>
            <table class="popup-table">
              <tr><td class="pt-label">Tipe</td><td class="pt-val">${item.type ?? '-'}</td></tr>
              <tr><td class="pt-label">Koordinat</td>
                  <td class="pt-val">${lat.toFixed(5)}, ${lon.toFixed(5)}</td></tr>
            </table>
          </div>`
        ).openPopup();

        if (item.boundingbox) {
          const bb = item.boundingbox.map(Number);
          map.fitBounds([[bb[0], bb[2]], [bb[1], bb[3]]], { maxZoom: 13 });
        } else {
          map.flyTo([lat, lon], 12, { duration: 1.2 });
        }

        searchInput.value = name;
        searchDropdown.innerHTML = '';
        searchDropdown.classList.remove('visible');
      });

      searchDropdown.appendChild(row);
    });

    searchDropdown.classList.add('visible');
  }

  async function doSearch(query) {
    if (query.length < 4) {
      searchDropdown.innerHTML = '';
      searchDropdown.classList.remove('visible');
      return;
    }
    searchDropdown.innerHTML = '<div class="search-loading">🔍 Mencari...</div>';
    searchDropdown.classList.add('visible');

    try {
      const url = new URL('https://nominatim.openstreetmap.org/search');
      url.searchParams.set('q', query);
      url.searchParams.set('format', 'jsonv2');
      url.searchParams.set('addressdetails', '1');
      url.searchParams.set('limit', '7');
      url.searchParams.set('countrycodes', 'id');

      const res  = await fetch(url.toString(), { headers: { 'Accept-Language': 'id' } });
      const data = await res.json();
      renderDropdown(data);
    } catch {
      searchDropdown.innerHTML = '<div class="search-empty">⚠️ Gagal menghubungi server pencarian</div>';
    }
  }

  // Event listeners
  searchInput.addEventListener('input', e => {
    clearTimeout(searchTimeout);
    const q = e.target.value.trim();
    if (!q) { searchDropdown.innerHTML = ''; searchDropdown.classList.remove('visible'); clearMarker(); return; }
    searchTimeout = setTimeout(() => doSearch(q), 600);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) {
      searchDropdown.innerHTML = '';
      searchDropdown.classList.remove('visible');
    }
  });

  searchInput.addEventListener('keydown', e => {
    const items  = [...searchDropdown.querySelectorAll('.search-item')];
    const active = searchDropdown.querySelector('.search-item.active');
    const idx    = items.indexOf(active);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      active?.classList.remove('active');
      items[Math.min(idx + 1, items.length - 1)]?.classList.add('active');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      active?.classList.remove('active');
      items[Math.max(idx - 1, 0)]?.classList.add('active');
    } else if (e.key === 'Enter') {
      active?.click();
    } else if (e.key === 'Escape') {
      searchDropdown.innerHTML = '';
      searchDropdown.classList.remove('visible');
      searchInput.blur();
    }
  });
}