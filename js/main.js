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
   4. YEAR-WISE PHOTO GALLERY & FILTERING
   ========================================================================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const yearBtns = document.querySelectorAll('.year-btn');
  const cards = document.querySelectorAll('.gallery-photo-card');

  let activeCategory = 'all';
  let activeYear = 'all';

  function filterCards() {
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardYear = card.getAttribute('data-year');

      const matchesCat = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesYear = (activeYear === 'all' || cardYear === activeYear);

      if (matchesCat && matchesYear) {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (card.style.opacity === '0') {
            card.style.display = 'none';
          }
        }, 200);
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      filterCards();
    });
  });

  yearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      yearBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeYear = btn.getAttribute('data-year-filter');
      filterCards();
    });
  });
}

/* ==========================================================================
   5. LIGHTBOX MODAL
   ========================================================================== */
let currentLightboxIndex = 0;
let visibleGalleryCards = [];

function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption-text');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  function openLightbox(index) {
    visibleGalleryCards = Array.from(document.querySelectorAll('.gallery-photo-card'))
      .filter(card => window.getComputedStyle(card).display !== 'none');

    if (!visibleGalleryCards.length) return;
    currentLightboxIndex = index;

    const targetCard = visibleGalleryCards[currentLightboxIndex];
    const img = targetCard.querySelector('img');
    const caption = targetCard.querySelector('.photo-caption');
    const badge = targetCard.querySelector('.photo-badge');

    if (img && lightboxImg) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Sangathani Gallery Image';
    }

    if (lightboxCaption) {
      const tag = badge ? `[${badge.innerText}] ` : '';
      lightboxCaption.innerText = tag + (caption ? caption.innerText : '');
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextImage() {
    if (!visibleGalleryCards.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % visibleGalleryCards.length;
    openLightbox(currentLightboxIndex);
  }

  function prevImage() {
    if (!visibleGalleryCards.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + visibleGalleryCards.length) % visibleGalleryCards.length;
    openLightbox(currentLightboxIndex);
  }

  // Attach card click handlers
  const allCards = document.querySelectorAll('.gallery-photo-card');
  allCards.forEach((card) => {
    card.addEventListener('click', () => {
      visibleGalleryCards = Array.from(document.querySelectorAll('.gallery-photo-card'))
        .filter(c => window.getComputedStyle(c).display !== 'none');
      const idx = visibleGalleryCards.indexOf(card);
      if (idx !== -1) openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
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

