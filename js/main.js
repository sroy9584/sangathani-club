/**
 * Sangathani Club - Main Interactive Engine
 * iOS Liquid-Glass UI, Durga Puja Countdown, Gallery Lightbox,
 * Testimonial Slider, Modals & Interactive Forms
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initCountdown();
  initGallery();
  initLightbox();
  initModals();
  initForms();
  initScrollSpy();
});

/* ==========================================================================
   1. STICKY HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   2. MOBILE GLASS DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const menuToggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerClose = document.querySelector('.drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   3. DURGA PUJA 2026 COUNTDOWN TIMER
   ========================================================================== */
function initCountdown() {
  // Durga Puja 2026 - Maha Shasthi is typically mid-October 2026 (Oct 16, 2026)
  const targetDate = new Date('October 16, 2026 06:00:00').getTime();

  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-mins');
  const secsEl = document.getElementById('count-secs');
  const heroBadgeEl = document.getElementById('hero-countdown-num');

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      if (daysEl) daysEl.innerText = '00';
      if (hoursEl) hoursEl.innerText = '00';
      if (minsEl) minsEl.innerText = '00';
      if (secsEl) secsEl.innerText = '00';
      if (heroBadgeEl) heroBadgeEl.innerText = 'Puja Live!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = n => (n < 10 ? '0' + n : n);

    if (daysEl) daysEl.innerText = pad(days);
    if (hoursEl) hoursEl.innerText = pad(hours);
    if (minsEl) minsEl.innerText = pad(mins);
    if (secsEl) secsEl.innerText = pad(secs);

    if (heroBadgeEl) {
      heroBadgeEl.innerText = `${days} Days to Utsav`;
    }
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   4. YEAR-WISE PHOTO GALLERY & EDITORIAL MASONRY (Durga Puja 2026)
   ========================================================================== */
const DEFAULT_GALLERY_PHOTOS = [
  {
    "id": 1,
    "filename": "sangathani-durga-puja-2026-01.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-01.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-01.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 01",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-hero"
  },
  {
    "id": 2,
    "filename": "sangathani-durga-puja-2026-02.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-02.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-02.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 02",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 3,
    "filename": "sangathani-durga-puja-2026-03.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-03.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-03.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 03",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 4,
    "filename": "sangathani-durga-puja-2026-04.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-04.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-04.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 04",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 5,
    "filename": "sangathani-durga-puja-2026-05.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-05.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-05.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 05",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 6,
    "filename": "sangathani-durga-puja-2026-06.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-06.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-06.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 06",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 7,
    "filename": "sangathani-durga-puja-2026-07.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-07.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-07.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 07",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 8,
    "filename": "sangathani-durga-puja-2026-08.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-08.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-08.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 08",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 9,
    "filename": "sangathani-durga-puja-2026-09.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-09.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-09.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 09",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 10,
    "filename": "sangathani-durga-puja-2026-10.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-10.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-10.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 10",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 11,
    "filename": "sangathani-durga-puja-2026-11.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-11.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-11.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 11",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-hero"
  },
  {
    "id": 12,
    "filename": "sangathani-durga-puja-2026-12.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-12.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-12.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 12",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 13,
    "filename": "sangathani-durga-puja-2026-13.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-13.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-13.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 13",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 14,
    "filename": "sangathani-durga-puja-2026-14.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-14.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-14.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 14",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 15,
    "filename": "sangathani-durga-puja-2026-15.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-15.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-15.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 15",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 16,
    "filename": "sangathani-durga-puja-2026-16.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-16.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-16.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 16",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 17,
    "filename": "sangathani-durga-puja-2026-17.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-17.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-17.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 17",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 18,
    "filename": "sangathani-durga-puja-2026-18.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-18.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-18.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 18",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 19,
    "filename": "sangathani-durga-puja-2026-19.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-19.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-19.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 19",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 20,
    "filename": "sangathani-durga-puja-2026-20.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-20.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-20.jpg",
    "caption": "Durga Puja 2026 \u00b7 Moment 20",
    "category": "durga-2026",
    "year": "2026",
    "tileType": "tile-wide"
  }
];

let currentLightboxIndex = 0;
let lastActiveGalleryTrigger = null;
const TOTAL_PHOTOS = DEFAULT_GALLERY_PHOTOS.length;
const PREVIEW_LIMIT = 10;

function initGallery() {
  const masonryGrid = document.getElementById('gallery-masonry');
  const expandContainer = document.getElementById('gallery-expand-container');
  const expandBtn = document.getElementById('gallery-expand-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const yearBtns = document.querySelectorAll('.year-btn');

  if (!masonryGrid) return;

  let isExpanded = false;

  // Bind click & keydown handlers to all gallery tiles
  function bindTileHandlers() {
    const tiles = masonryGrid.querySelectorAll('.gallery-tile');
    tiles.forEach(tile => {{
      const idx = parseInt(tile.dataset.index, 10);

      tile.onclick = (e) => {{
        e.preventDefault();
        lastActiveGalleryTrigger = tile;
        openLightbox(idx);
      }};

      tile.onkeydown = (e) => {{
        if (e.key === 'Enter' || e.key === ' ') {{
          e.preventDefault();
          lastActiveGalleryTrigger = tile;
          openLightbox(idx);
        }}
      }};
    }});
  }

  // Initial binding for pre-rendered tiles in index.html
  bindTileHandlers();

  // If for any reason DOM was empty, generate tiles
  if (masonryGrid.children.length === 0) {
    const rhythms = [
      'tile-hero', 'tile-tall', 'tile-square', 'tile-tall', 'tile-wide',
      'tile-square', 'tile-wide', 'tile-tall', 'tile-square', 'tile-wide',
      'tile-hero', 'tile-tall', 'tile-wide', 'tile-square', 'tile-tall',
      'tile-wide', 'tile-square', 'tile-square', 'tile-tall', 'tile-wide'
    ];

    DEFAULT_GALLERY_PHOTOS.forEach((item, index) => {
      const tile = document.createElement('div');
      const patternClass = item.tileType || rhythms[index % rhythms.length];
      const isHidden = index >= PREVIEW_LIMIT;

      tile.className = `gallery-tile ${patternClass} ${isHidden ? 'tile-hidden' : ''}`;
      tile.setAttribute('role', 'button');
      tile.setAttribute('tabindex', '0');
      tile.setAttribute('aria-label', `View photo: ${item.caption}`);
      tile.dataset.index = index;
      tile.dataset.src = item.src;
      tile.dataset.download = item.downloadName;
      tile.dataset.caption = item.caption;

      tile.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
        <div class="gallery-tile-overlay">
          <div class="tile-top-bar">
            <span class="tile-view-pill">
              <i class="fa-solid fa-expand"></i> View photo
            </span>
          </div>
          <div class="tile-bottom-bar">
            <span class="tile-badge">Durga Puja 2026</span>
            <div class="tile-caption">${item.caption}</div>
          </div>
        </div>
      `;

      masonryGrid.appendChild(tile);
    });

    bindTileHandlers();
  }

  // Ensure expand button container is visible
  if (expandContainer) {
    expandContainer.style.display = 'flex';
  }

  // Setup Expand / Collapse toggle
  if (expandBtn) {
    const btnText = expandBtn.querySelector('.expand-btn-text');

    expandBtn.onclick = (e) => {
      e.preventDefault();
      isExpanded = !isExpanded;

      const allTiles = masonryGrid.querySelectorAll('.gallery-tile');
      allTiles.forEach((tile, idx) => {
        if (idx >= PREVIEW_LIMIT) {
          if (isExpanded) {
            tile.classList.remove('tile-hidden');
            tile.classList.add('tile-revealed');
          } else {
            tile.classList.add('tile-hidden');
            tile.classList.remove('tile-revealed');
          }
        }
      });

      if (isExpanded) {
        if (btnText) btnText.textContent = 'Back to Highlights (Show Less)';
        expandBtn.classList.add('expanded');
        expandBtn.setAttribute('aria-expanded', 'true');
      } else {
        if (btnText) btnText.textContent = `Show All Photos (${TOTAL_PHOTOS} Photos)`;
        expandBtn.classList.remove('expanded');
        expandBtn.setAttribute('aria-expanded', 'false');
        masonryGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }

  // Category filter handlers
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');
      const allTiles = masonryGrid.querySelectorAll('.gallery-tile');

      if (filter === 'durga-2026' || filter === 'durga' || filter === 'all') {
        allTiles.forEach((tile, idx) => {
          if (isExpanded || idx < PREVIEW_LIMIT) {
            tile.classList.remove('tile-hidden');
          } else {
            tile.classList.add('tile-hidden');
          }
        });
        if (expandContainer) expandContainer.style.display = 'flex';
      } else {
        allTiles.forEach(tile => tile.classList.add('tile-hidden'));
        if (expandContainer) expandContainer.style.display = 'none';
      }
    };
  });

  // Year filter handlers
  yearBtns.forEach(btn => {
    btn.onclick = () => {
      yearBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const yr = btn.getAttribute('data-year-filter');
      const allTiles = masonryGrid.querySelectorAll('.gallery-tile');

      if (yr === '2026' || yr === 'all' || yr === 'archives') {
        allTiles.forEach((tile, idx) => {
          if (isExpanded || idx < PREVIEW_LIMIT) {
            tile.classList.remove('tile-hidden');
          } else {
            tile.classList.add('tile-hidden');
          }
        });
        if (expandContainer) expandContainer.style.display = 'flex';
      } else {
        allTiles.forEach(tile => tile.classList.add('tile-hidden'));
        if (expandContainer) expandContainer.style.display = 'none';
      }
    };
  });
}

/* ==========================================================================
   5. FULLSCREEN IMMERSIVE LIGHTBOX & DOWNLOAD ACTIONS
   ========================================================================== */
function openLightbox(index) {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  currentLightboxIndex = (index + TOTAL_PHOTOS) % TOTAL_PHOTOS;
  const currentItem = DEFAULT_GALLERY_PHOTOS[currentLightboxIndex];

  const mainImg = document.getElementById('lightbox-main-img');
  const counter = document.getElementById('lightbox-counter');
  const captionText = document.getElementById('lightbox-caption-text');
  const downloadBtn = document.getElementById('lightbox-download-btn');

  // Format index string (e.g. 07 / 20)
  const currentNumStr = String(currentLightboxIndex + 1).padStart(2, '0');
  const totalNumStr = String(TOTAL_PHOTOS).padStart(2, '0');

  if (counter) {
    counter.textContent = `${currentNumStr} / ${totalNumStr}`;
  }

  if (mainImg) {
    mainImg.style.opacity = '0.4';
    mainImg.src = currentItem.src;
    mainImg.alt = currentItem.caption || 'Sangathani Club Durga Puja 2026';
    mainImg.onload = () => {
      mainImg.style.opacity = '1';
    };
  }

  if (captionText) {
    captionText.textContent = currentItem.caption || `Durga Puja 2026 · Moment ${currentNumStr}`;
  }

  // Download Action - Direct file download with safe filename
  if (downloadBtn) {
    const safeFilename = currentItem.downloadName || `sangathani-club-durga-puja-2026-${currentNumStr}.jpg`;
    downloadBtn.href = currentItem.src;
    downloadBtn.download = safeFilename;
    downloadBtn.style.display = 'inline-flex';
  }

  lightbox.classList.add('active');
  document.body.classList.add('lightbox-open');

  // Focus close button inside lightbox for keyboard navigation
  const closeBtn = document.getElementById('lightbox-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  document.body.classList.remove('lightbox-open');

  // Return focus to previously active gallery trigger element
  if (lastActiveGalleryTrigger && typeof lastActiveGalleryTrigger.focus === 'function') {
    lastActiveGalleryTrigger.focus();
  }
}

function nextLightboxImage() {
  openLightbox(currentLightboxIndex + 1);
}

function prevLightboxImage() {
  openLightbox(currentLightboxIndex - 1);
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (closeBtn) closeBtn.onclick = closeLightbox;
  if (nextBtn) nextBtn.onclick = nextLightboxImage;
  if (prevBtn) prevBtn.onclick = prevLightboxImage;

  // Click outside image stage to close
  lightbox.onclick = (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-viewport') || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  };

  // Keyboard navigation: Escape closes, Left/Right arrow keys navigate
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextLightboxImage();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevLightboxImage();
    }
  });

  // Touch Swipe navigation for mobile
  let touchStartX = 0;
  let touchStartY = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        nextLightboxImage(); // Swipe left to see next
      } else {
        prevLightboxImage(); // Swipe right to see previous
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   6. INTERACTIVE MODALS
   ========================================================================== */
function initModals() {
  // Cultural Modal
  const culturalModal = document.getElementById('cultural-modal');
  const openCulturalBtns = document.querySelectorAll('.open-cultural-modal');
  const closeCulturalBtn = document.getElementById('close-cultural-modal');

  // Donor Modal
  const donorModal = document.getElementById('donor-modal');
  const openDonorBtns = document.querySelectorAll('.open-donor-modal');
  const closeDonorBtn = document.getElementById('close-donor-modal');

  // Theme Teaser Modal
  const teaserModal = document.getElementById('teaser-modal');
  const openTeaserBtns = document.querySelectorAll('.open-teaser-modal');
  const closeTeaserBtn = document.getElementById('close-teaser-modal');

  function bindModal(modal, openTriggers, closeTrigger) {
    if (!modal) return;
    openTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (closeTrigger) {
      closeTrigger.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  bindModal(culturalModal, openCulturalBtns, closeCulturalBtn);
  bindModal(donorModal, openDonorBtns, closeDonorBtn);
  bindModal(teaserModal, openTeaserBtns, closeTeaserBtn);
}

/* ==========================================================================
   8. FORM VALIDATIONS & TOAST SYSTEM
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

function initForms() {
  // Contact Inquiry Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('input[name="name"]')?.value || 'Friend';
      showToast(`Thank you, ${name}! Your inquiry has been received. Our committee will get back to you shortly.`);
      contactForm.reset();
    });
  }

  // Cultural Registration Form
  const culturalForm = document.getElementById('cultural-registration-form');
  if (culturalForm) {
    culturalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = culturalForm.querySelector('input[name="perf_name"]')?.value || 'Performer';
      showToast(`Shubho Agomoni, ${name}! Your cultural audition entry has been logged. We will contact you with rehearsal dates.`);
      culturalForm.reset();
      const modal = document.getElementById('cultural-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Blood Donor Form
  const donorForm = document.getElementById('donor-registration-form');
  if (donorForm) {
    donorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = donorForm.querySelector('input[name="donor_name"]')?.value || 'Donor';
      showToast(`Salute to your noble spirit, ${name}! You are registered for the annual blood donation drive.`);
      donorForm.reset();
      const modal = document.getElementById('donor-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Newsletter Form in Footer
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(`Welcome to the Sangathani family! You will receive festival newsletters and event invitations.`);
      newsForm.reset();
    });
  }
}

/* ==========================================================================
   9. SCROLL SPY & ACTIVE NAV HIGHLIGHTING
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

