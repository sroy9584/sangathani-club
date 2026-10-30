/**
 * Sangathani Club - Main Interactive Engine
 * iOS Liquid-Glass UI, Durga Puja Countdown, Gallery Lightbox,
 * Testimonial Slider, Modals & Interactive Forms
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initStickyHeader();
  initMobileDrawer();
  initCountdown();
  initGallery();
  initLightbox();
  initModals();
  initForms();
  initScrollSpy();
  initServiceSlideshow();
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
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
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
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   3. DURGA PUJA 2026 COUNTDOWN TIMER
   ========================================================================== */
function initCountdown() {
  // Durga Puja 2027 - Maha Shasthi: October 5, 2027
  const targetDate = new Date('October 5, 2027 06:00:00').getTime();

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
    "caption": "Durga Puja 2026 · Moment 01",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-hero"
  },
  {
    "id": 2,
    "filename": "sangathani-durga-puja-2026-02.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-02.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-02.jpg",
    "caption": "Durga Puja 2026 · Moment 02",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 3,
    "filename": "sangathani-durga-puja-2026-03.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-03.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-03.jpg",
    "caption": "Durga Puja 2026 · Moment 03",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 4,
    "filename": "sangathani-durga-puja-2026-04.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-04.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-04.jpg",
    "caption": "Durga Puja 2026 · Moment 04",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 5,
    "filename": "sangathani-durga-puja-2026-05.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-05.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-05.jpg",
    "caption": "Durga Puja 2026 · Moment 05",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 6,
    "filename": "sangathani-durga-puja-2026-06.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-06.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-06.jpg",
    "caption": "Durga Puja 2026 · Moment 06",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 7,
    "filename": "sangathani-durga-puja-2026-07.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-07.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-07.jpg",
    "caption": "Durga Puja 2026 · Moment 07",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 8,
    "filename": "sangathani-durga-puja-2026-08.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-08.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-08.jpg",
    "caption": "Durga Puja 2026 · Moment 08",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 9,
    "filename": "sangathani-durga-puja-2026-09.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-09.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-09.jpg",
    "caption": "Durga Puja 2026 · Moment 09",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 10,
    "filename": "sangathani-durga-puja-2026-10.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-10.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-10.jpg",
    "caption": "Durga Puja 2026 · Moment 10",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 11,
    "filename": "sangathani-durga-puja-2026-11.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-11.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-11.jpg",
    "caption": "Durga Puja 2026 · Moment 11",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-hero"
  },
  {
    "id": 12,
    "filename": "sangathani-durga-puja-2026-12.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-12.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-12.jpg",
    "caption": "Durga Puja 2026 · Moment 12",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 13,
    "filename": "sangathani-durga-puja-2026-13.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-13.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-13.jpg",
    "caption": "Durga Puja 2026 · Moment 13",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 14,
    "filename": "sangathani-durga-puja-2026-14.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-14.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-14.jpg",
    "caption": "Durga Puja 2026 · Moment 14",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 15,
    "filename": "sangathani-durga-puja-2026-15.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-15.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-15.jpg",
    "caption": "Durga Puja 2026 · Moment 15",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 16,
    "filename": "sangathani-durga-puja-2026-16.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-16.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-16.jpg",
    "caption": "Durga Puja 2026 · Moment 16",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 17,
    "filename": "sangathani-durga-puja-2026-17.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-17.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-17.jpg",
    "caption": "Durga Puja 2026 · Moment 17",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 18,
    "filename": "sangathani-durga-puja-2026-18.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-18.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-18.jpg",
    "caption": "Durga Puja 2026 · Moment 18",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-square"
  },
  {
    "id": 19,
    "filename": "sangathani-durga-puja-2026-19.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-19.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-19.jpg",
    "caption": "Durga Puja 2026 · Moment 19",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-tall"
  },
  {
    "id": 20,
    "filename": "sangathani-durga-puja-2026-20.jpg",
    "src": "Photos/gallery/sangathani-durga-puja-2026-20.jpg",
    "downloadName": "sangathani-club-durga-puja-2026-20.jpg",
    "caption": "Durga Puja 2026 · Moment 20",
    "category": "durga",
    "year": "2026",
    "tileType": "tile-wide"
  },
  {
    "id": 21,
    "filename": "sangathani-heritage-archives-01.jpg",
    "src": "Photos/gallery/sangathani-heritage-archives-01.jpg",
    "downloadName": "sangathani-club-heritage-archives-21.jpg",
    "caption": "Heritage Archives · Vintage Durga Puja Pratima Craftsmanship",
    "category": "durga",
    "year": "archives",
    "tileType": "tile-wide"
  },
  {
    "id": 22,
    "filename": "sangathani-heritage-archives-02.jpg",
    "src": "Photos/gallery/sangathani-heritage-archives-02.jpg",
    "downloadName": "sangathani-club-heritage-archives-22.jpg",
    "caption": "Heritage Archives · Handcrafted Golden Jute Durga Pratima",
    "category": "durga",
    "year": "archives",
    "tileType": "tile-wide"
  },
  {
    "id": 23,
    "filename": "sangathani-kali-puja-2025-01.jpg",
    "src": "Photos/gallery/sangathani-kali-puja-2025-01.jpg",
    "downloadName": "sangathani-club-kali-puja-2025-23.jpg",
    "caption": "Shyama Kali Puja 2025 · Divine Pratima & Mandap",
    "category": "kali",
    "year": "2025",
    "tileType": "tile-square"
  },
  {
    "id": 24,
    "filename": "sangathani-kali-puja-2025-02.jpg",
    "src": "Photos/gallery/sangathani-kali-puja-2025-02.jpg",
    "downloadName": "sangathani-club-kali-puja-2025-24.jpg",
    "caption": "Shyama Kali Puja 2025 · Deepavali Lighting & Mandap View",
    "category": "kali",
    "year": "2025",
    "tileType": "tile-tall"
  },
  {
    "id": 25,
    "filename": "sangathani-kali-puja-2025-03.jpg",
    "src": "Photos/gallery/sangathani-kali-puja-2025-03.jpg",
    "downloadName": "sangathani-club-kali-puja-2025-25.jpg",
    "caption": "Shyama Kali Puja 2025 · Deepavali Lighting & Mandap View",
    "category": "kali",
    "year": "2025",
    "tileType": "tile-wide"
  },
  {
    "id": 26,
    "filename": "sangathani-cultural-2025-01.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-01.jpg",
    "downloadName": "sangathani-club-cultural-2025-01.jpg",
    "caption": "Cultural Program 2025 · Daytime Stage Setup & Preparations",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-tall"
  },
  {
    "id": 27,
    "filename": "sangathani-cultural-2025-02.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-02.jpg",
    "downloadName": "sangathani-club-cultural-2025-02.jpg",
    "caption": "Cultural Program 2025 · Evening Lighting & Heritage Mandap Stage",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-wide"
  },
  {
    "id": 28,
    "filename": "sangathani-cultural-2025-03.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-03.jpg",
    "downloadName": "sangathani-club-cultural-2025-03.jpg",
    "caption": "Cultural Program 2025 · Vibrant Night Illumination & Stage Ambiance",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-wide"
  },
  {
    "id": 29,
    "filename": "sangathani-cultural-2025-04.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-04.jpg",
    "downloadName": "sangathani-club-cultural-2025-04.jpg",
    "caption": "Cultural Program 2025 · Drama & Theatrical Expression",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-square"
  },
  {
    "id": 30,
    "filename": "sangathani-cultural-2025-05.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-05.jpg",
    "downloadName": "sangathani-club-cultural-2025-05.jpg",
    "caption": "Cultural Program 2025 · Musical Performance & Stage Artistry",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-square"
  },
  {
    "id": 31,
    "filename": "sangathani-cultural-2025-06.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-06.jpg",
    "downloadName": "sangathani-club-cultural-2025-06.jpg",
    "caption": "Cultural Program 2025 · Grand Inaugural Classical Dance",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-hero"
  },
  {
    "id": 32,
    "filename": "sangathani-cultural-2025-07.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-07.jpg",
    "downloadName": "sangathani-club-cultural-2025-07.jpg",
    "caption": "Cultural Program 2025 · Rabindra Sangeet & Folk Harmony",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-wide"
  },
  {
    "id": 33,
    "filename": "sangathani-cultural-2025-08.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-08.jpg",
    "downloadName": "sangathani-club-cultural-2025-08.jpg",
    "caption": "Cultural Program 2025 · Youth Dance Troupe Performance",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-square"
  },
  {
    "id": 34,
    "filename": "sangathani-cultural-2025-09.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-09.jpg",
    "downloadName": "sangathani-club-cultural-2025-09.jpg",
    "caption": "Cultural Program 2025 · Instrumental Ensemble & Rhythms",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-wide"
  },
  {
    "id": 35,
    "filename": "sangathani-cultural-2025-10.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-10.jpg",
    "downloadName": "sangathani-club-cultural-2025-10.jpg",
    "caption": "Cultural Program 2025 · Community Chorus & Melodic Evening",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-square"
  },
  {
    "id": 36,
    "filename": "sangathani-cultural-2025-11.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-11.jpg",
    "downloadName": "sangathani-club-cultural-2025-11.jpg",
    "caption": "Cultural Program 2025 · Classical Bharatanatyam Recital",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-wide"
  },
  {
    "id": 37,
    "filename": "sangathani-cultural-2025-12.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-12.jpg",
    "downloadName": "sangathani-club-cultural-2025-12.jpg",
    "caption": "Cultural Program 2025 · Festive Drama & Character Spotlight",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-hero"
  },
  {
    "id": 38,
    "filename": "sangathani-cultural-2025-13.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-13.jpg",
    "downloadName": "sangathani-club-cultural-2025-13.jpg",
    "caption": "Cultural Program 2025 · Vibrant Stage Choreography",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-square"
  },
  {
    "id": 39,
    "filename": "sangathani-cultural-2025-14.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-14.jpg",
    "downloadName": "sangathani-club-cultural-2025-14.jpg",
    "caption": "Cultural Program 2025 · Ensemble Musical Tribute",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-wide"
  },
  {
    "id": 40,
    "filename": "sangathani-cultural-2025-15.jpg",
    "src": "Photos/gallery/sangathani-cultural-2025-15.jpg",
    "downloadName": "sangathani-club-cultural-2025-15.jpg",
    "caption": "Cultural Program 2025 · Grand Finale & Artist Felicitation",
    "category": "cultural",
    "year": "2025",
    "tileType": "tile-square"
  },
  {
    "id": 41,
    "filename": "sangathani-blood-2025-01.jpg",
    "src": "Photos/gallery/sangathani-blood-2025-01.jpg",
    "downloadName": "sangathani-club-blood-donation-2025-01.jpg",
    "caption": "Annual Blood Donation Camp 2025 · Youth Volunteer Registration & Health Screening",
    "category": "blood",
    "year": "2025",
    "tileType": "tile-tall"
  },
  {
    "id": 42,
    "filename": "sangathani-blood-2025-02.jpg",
    "src": "Photos/gallery/sangathani-blood-2025-02.jpg",
    "downloadName": "sangathani-club-blood-donation-2025-02.jpg",
    "caption": "Annual Blood Donation Camp 2025 · Certified Medical Supervisor Conducting Phlebotomy",
    "category": "blood",
    "year": "2025",
    "tileType": "tile-tall"
  },
  {
    "id": 43,
    "filename": "sangathani-blood-2025-03.jpg",
    "src": "Photos/gallery/sangathani-blood-2025-03.jpg",
    "downloadName": "sangathani-club-blood-donation-2025-03.jpg",
    "caption": "Annual Blood Donation Camp 2025 · Generous Community Donors Saving Lives",
    "category": "blood",
    "year": "2025",
    "tileType": "tile-square"
  },
  {
    "id": 44,
    "filename": "sangathani-blood-2025-04.jpg",
    "src": "Photos/gallery/sangathani-blood-2025-04.jpg",
    "downloadName": "sangathani-club-blood-donation-2025-04.jpg",
    "caption": "Annual Blood Donation Camp 2025 · Central Blood Bank Collaboration & Ward View",
    "category": "blood",
    "year": "2025",
    "tileType": "tile-wide"
  },
  {
    "id": 45,
    "filename": "sangathani-blood-2025-05.jpg",
    "src": "Photos/gallery/sangathani-blood-2025-05.jpg",
    "downloadName": "sangathani-club-blood-donation-2025-05.jpg",
    "caption": "Annual Blood Donation Camp 2025 · Donor Care & Post-Donation Refreshments",
    "category": "blood",
    "year": "2025",
    "tileType": "tile-tall"
  },
  {
    "id": 46,
    "filename": "sangathani-blood-2025-06.jpg",
    "src": "Photos/gallery/sangathani-blood-2025-06.jpg",
    "downloadName": "sangathani-club-blood-donation-2025-06.jpg",
    "caption": "Annual Blood Donation Camp 2025 · Volunteer Team & Community Health Drive",
    "category": "blood",
    "year": "2025",
    "tileType": "tile-square"
  }
];

let currentLightboxIndex = 0;
let lastActiveGalleryTrigger = null;
let activeLightboxList = [];
const TOTAL_PHOTOS = DEFAULT_GALLERY_PHOTOS.length;
const PREVIEW_LIMIT = 10;

/* ==========================================================================
   4. DYNAMIC MASONRY GALLERY & FILTERING
   ========================================================================== */
function initGallery() {
  const masonryGrid = document.getElementById('gallery-masonry');
  const expandContainer = document.getElementById('gallery-expand-container');
  const expandBtn = document.getElementById('gallery-expand-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const yearBtns = document.querySelectorAll('.year-btn');

  if (!masonryGrid) return;

  let activeCategory = 'all';
  let activeYear = 'all';
  let isExpanded = false;
  let currentFilteredTiles = [];

  // Bind click & keydown handlers to all gallery tiles
  function bindTileHandlers() {
    const tiles = masonryGrid.querySelectorAll('.gallery-tile');
    tiles.forEach(tile => {
      tile.onclick = (e) => {
        e.preventDefault();
        lastActiveGalleryTrigger = tile;
        const currentList = currentFilteredTiles.length > 0 ? currentFilteredTiles : Array.from(masonryGrid.querySelectorAll('.gallery-tile'));
        const targetIdx = currentList.indexOf(tile);
        openLightbox(targetIdx !== -1 ? targetIdx : 0, currentList);
      };

      tile.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          lastActiveGalleryTrigger = tile;
          const currentList = currentFilteredTiles.length > 0 ? currentFilteredTiles : Array.from(masonryGrid.querySelectorAll('.gallery-tile'));
          const targetIdx = currentList.indexOf(tile);
          openLightbox(targetIdx !== -1 ? targetIdx : 0, currentList);
        }
      };
    });
  }

  // Interleave / Shuffle all memories so photos from all categories appear mixed and random
  function shuffleAllMemories(tiles) {
    if (tiles.length <= 1) return tiles;

    // Group tiles by category
    const groups = {};
    tiles.forEach(tile => {
      const cat = tile.dataset.category || 'other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(tile);
    });

    // Shuffle each category list internally with Fisher-Yates
    Object.values(groups).forEach(arr => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    });

    // Interleave across categories so all categories appear distributed throughout
    const result = [];
    const keys = Object.keys(groups);
    let totalRemaining = tiles.length;

    while (totalRemaining > 0) {
      const available = keys.filter(k => groups[k].length > 0);
      available.sort(() => Math.random() - 0.5);
      for (const k of available) {
        if (groups[k].length > 0) {
          result.push(groups[k].pop());
          totalRemaining--;
        }
      }
    }

    // Local random swaps for natural non-rigid randomness
    for (let i = 0; i < result.length - 1; i++) {
      if (Math.random() < 0.45) {
        const j = i + 1;
        [result[i], result[j]] = [result[j], result[i]];
      }
    }

    return result;
  }

  // Filter application function
  function applyFilters() {
    const allTiles = Array.from(masonryGrid.querySelectorAll('.gallery-tile'));

    // Filter strictly by activeCategory AND activeYear
    let matchedTiles = allTiles.filter(tile => {
      const cat = tile.dataset.category || 'durga';
      const yr = tile.dataset.year || '2026';

      const catMatch = (activeCategory === 'all') || 
                       (cat === activeCategory) || 
                       (activeCategory === 'durga' && cat.includes('durga'));

      const yrMatch = (activeYear === 'all') || (yr === activeYear);

      return catMatch && yrMatch;
    });

    // Hide all tiles initially
    allTiles.forEach(tile => {
      tile.classList.add('tile-hidden');
      tile.style.display = 'none';
    });

    // If All Memories is selected (with all years or filtered), shuffle items across sections!
    if (activeCategory === 'all') {
      matchedTiles = shuffleAllMemories(matchedTiles);
    } else {
      // For a specific section/category, keep natural sequential order
      matchedTiles.sort((a, b) => {
        const idxA = parseInt(a.dataset.index, 10);
        const idxB = parseInt(b.dataset.index, 10);
        return idxA - idxB;
      });
    }

    // Re-append to DOM in the new order so CSS grid flows in the desired order
    matchedTiles.forEach(tile => masonryGrid.appendChild(tile));

    currentFilteredTiles = matchedTiles;

    // Show matched tiles with preview pagination limit
    matchedTiles.forEach((tile, idx) => {
      tile.style.display = '';
      if (isExpanded || idx < PREVIEW_LIMIT) {
        tile.classList.remove('tile-hidden');
      } else {
        tile.classList.add('tile-hidden');
      }
    });

    // Empty state message handling
    let emptyEl = masonryGrid.querySelector('.gallery-empty-state');
    if (matchedTiles.length === 0) {
      if (!emptyEl) {
        emptyEl = document.createElement('div');
        emptyEl.className = 'gallery-empty-state';
        emptyEl.innerHTML = `
          <i class="fa-solid fa-camera-retro empty-icon"></i>
          <h4 class="empty-title">No Memories Found</h4>
          <p class="empty-desc">No photos uploaded for this category in the selected year yet. Try selecting another year or <strong>Archives</strong>.</p>
        `;
        masonryGrid.appendChild(emptyEl);
      }
      emptyEl.style.display = 'block';
    } else if (emptyEl) {
      emptyEl.style.display = 'none';
    }

    // Expand button handling
    if (expandContainer) {
      if (matchedTiles.length > PREVIEW_LIMIT) {
        expandContainer.style.display = 'flex';
        if (expandBtn) {
          const btnText = expandBtn.querySelector('.expand-btn-text');
          if (btnText) {
            btnText.textContent = isExpanded 
              ? 'Back to Highlights (Show Less)' 
              : `Show All Photos (${matchedTiles.length} Photos)`;
          }
        }
      } else {
        expandContainer.style.display = 'none';
      }
    }
  }

  // Initial binding
  bindTileHandlers();

  // If for any reason DOM was empty, generate tiles
  if (masonryGrid.children.length === 0) {
    DEFAULT_GALLERY_PHOTOS.forEach((item, index) => {
      const tile = document.createElement('div');
      const patternClass = item.tileType || 'tile-square';
      const isHidden = index >= PREVIEW_LIMIT;

      tile.className = `gallery-tile ${patternClass} ${isHidden ? 'tile-hidden' : ''}`;
      tile.setAttribute('role', 'button');
      tile.setAttribute('tabindex', '0');
      tile.setAttribute('aria-label', `View photo: ${item.caption}`);
      tile.dataset.index = index;
      tile.dataset.category = item.category || 'durga';
      tile.dataset.year = item.year || '2026';
      tile.dataset.src = item.src;
      tile.dataset.download = item.downloadName;
      tile.dataset.caption = item.caption;

      let badgeText = 'Durga Puja 2026';
      let badgeStyle = '';
      if (item.year === 'archives') {
        badgeText = 'Heritage Archives';
        badgeStyle = 'style="background: rgba(184, 134, 11, 0.95);"';
      } else if (item.category === 'kali') {
        badgeText = 'Kali Puja 2025';
        badgeStyle = 'style="background: rgba(230, 57, 70, 0.9);"';
      }

      tile.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
        <div class="gallery-tile-overlay">
          <div class="tile-top-bar">
            <span class="tile-view-pill">
              <i class="fa-solid fa-expand"></i> View photo
            </span>
          </div>
          <div class="tile-bottom-bar">
            <span class="tile-badge" ${badgeStyle}>${badgeText}</span>
            <div class="tile-caption">${item.caption}</div>
          </div>
        </div>
      `;

      masonryGrid.appendChild(tile);
    });

    bindTileHandlers();
  }

  // Setup Expand / Collapse toggle
  if (expandBtn) {
    const btnText = expandBtn.querySelector('.expand-btn-text');

    expandBtn.onclick = (e) => {
      e.preventDefault();
      isExpanded = !isExpanded;

      currentFilteredTiles.forEach((tile, idx) => {
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
        if (btnText) btnText.textContent = `Show All Photos (${currentFilteredTiles.length} Photos)`;
        expandBtn.classList.remove('expanded');
        expandBtn.setAttribute('aria-expanded', 'false');
        masonryGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }

  // Category filter handlers (STRICT: NO AUTO-SWITCHING YEAR)
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      activeCategory = btn.getAttribute('data-filter') || 'all';

      // If user clicks All Memories, show all years as well
      if (activeCategory === 'all') {
        activeYear = 'all';
        yearBtns.forEach(b => b.classList.remove('active'));
      }

      // Reset expand state on filter change
      isExpanded = false;
      if (expandBtn) {
        expandBtn.classList.remove('expanded');
        expandBtn.setAttribute('aria-expanded', 'false');
      }

      applyFilters();
    };
  });

  // Year filter handlers (STRICT: NO AUTO-SWITCHING CATEGORY)
  yearBtns.forEach(btn => {
    btn.onclick = () => {
      const yr = btn.getAttribute('data-year-filter');

      // If clicking an already active year button, toggle back to all years
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        activeYear = 'all';
      } else {
        yearBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeYear = yr;
      }

      // Reset expand state on filter change
      isExpanded = false;
      if (expandBtn) {
        expandBtn.classList.remove('expanded');
        expandBtn.setAttribute('aria-expanded', 'false');
      }

      applyFilters();
    };
  });

  // Initial filter run on page load
  applyFilters();
}

/* ==========================================================================
   5. FULLSCREEN IMMERSIVE LIGHTBOX & DOWNLOAD ACTIONS
   ========================================================================== */
function openLightbox(index, list) {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  activeLightboxList = (list && list.length > 0) ? list : Array.from(document.querySelectorAll('.gallery-tile:not([style*="display: none"])'));
  const total = activeLightboxList.length;
  if (total === 0) return;

  currentLightboxIndex = ((index % total) + total) % total;
  const tile = activeLightboxList[currentLightboxIndex];

  const src = tile.dataset.src;
  const caption = tile.dataset.caption || 'Sangathani Club Photo';
  const downloadName = tile.dataset.download || 'sangathani-photo.jpg';

  const mainImg = document.getElementById('lightbox-main-img');
  const counter = document.getElementById('lightbox-counter');
  const captionText = document.getElementById('lightbox-caption-text');
  const downloadBtn = document.getElementById('lightbox-download-btn');

  const currentNumStr = String(currentLightboxIndex + 1).padStart(2, '0');
  const totalNumStr = String(total).padStart(2, '0');

  if (counter) {
    counter.textContent = `${currentNumStr} / ${totalNumStr}`;
  }

  if (mainImg) {
    mainImg.style.opacity = '0.4';
    mainImg.src = src;
    mainImg.alt = caption;
    mainImg.onload = () => {
      mainImg.style.opacity = '1';
    };
  }

  if (captionText) {
    captionText.textContent = caption;
  }

  if (downloadBtn) {
    downloadBtn.href = src;
    downloadBtn.download = downloadName;
    downloadBtn.style.display = 'inline-flex';
  }

  lightbox.classList.add('active');
  document.body.classList.add('lightbox-open');

  const closeBtn = document.getElementById('lightbox-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  document.body.classList.remove('lightbox-open');

  if (lastActiveGalleryTrigger && typeof lastActiveGalleryTrigger.focus === 'function') {
    lastActiveGalleryTrigger.focus();
  }
}

function nextLightboxImage() {
  openLightbox(currentLightboxIndex + 1, activeLightboxList);
}

function prevLightboxImage() {
  openLightbox(currentLightboxIndex - 1, activeLightboxList);
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

  lightbox.onclick = (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-viewport') || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  };

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
        nextLightboxImage();
      } else {
        prevLightboxImage();
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
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link[href^="#"]');

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

    mobileNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}


/* ==========================================================================
   10. SOCIAL SERVICE BLOOD DONATION PHOTO SLIDESHOW
   - Auto cross-dissolve every 2 seconds with smooth zoom
   - Touch swipe & mouse drag navigation
   ========================================================================== */
function initServiceSlideshow() {
  const container = document.getElementById('serviceSlideshow');
  if (!container) return;

  const slides = container.querySelectorAll('.service-slide');
  const dots = container.querySelectorAll('.service-slide-indicators .dot');
  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  let timer = null;
  const slideInterval = 2000; // 2 seconds per slide

  function goToSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    currentIndex = index;
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(nextSlide, slideInterval);
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Dot navigation click
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(idx);
      startAutoPlay();
    });
  });

  // Touch Swipe Support (finger swipe on mobile / touchscreens)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchActive = false;

  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchActive = true;
      stopAutoPlay();
    }
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    if (!touchActive) return;
    touchActive = false;

    if (e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Threshold: 35px horizontal swipe
      if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextSlide(); // Swiped left -> next
        } else {
          prevSlide(); // Swiped right -> prev
        }
      }
    }
    startAutoPlay();
  }, { passive: true });

  // Mouse drag support for desktop
  let mouseStartX = 0;
  let isMouseDown = false;

  container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    mouseStartX = e.clientX;
    stopAutoPlay();
  });

  window.addEventListener('mouseup', (e) => {
    if (!isMouseDown) return;
    isMouseDown = false;
    const diffX = e.clientX - mouseStartX;
    if (Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    startAutoPlay();
  });

  // Pause when browser tab is inactive to preserve performance
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Start initial auto-play
  startAutoPlay();
}


/* ==========================================================================
   THEME TOGGLE — Dark / Light Mode with localStorage Persistence
   ========================================================================== */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  // Read stored theme or fall back to light
  const getTheme = () => {
    try { return localStorage.getItem('sg-theme') || 'light'; } catch(e) { return 'light'; }
  };

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem('sg-theme', theme); } catch(e) {}
    // Update icon visibility
    btn.classList.toggle('is-dark', theme === 'dark');
  };

  // Apply on load (in case inline script didn't run)
  applyTheme(getTheme());

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}
