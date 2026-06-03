const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__menu-btn');
const navLinks = document.querySelector('.nav__links');

const navItems = document.querySelectorAll('[data-nav]');
const scrollSections = document.querySelectorAll('[data-scrollspy]');
const specGroups = document.querySelectorAll('[data-spec-group]');
const specNavLinks = document.querySelectorAll('[data-spec-nav]');

let scrollTicking = false;
let userScrolling = false;
let scrollUnlockTimer = null;

function getScrollOffset() {
  return (nav?.offsetHeight ?? 56) + 16;
}

function getSectionTops() {
  const offset = getScrollOffset();
  return Array.from(scrollSections).map((el) => ({
    id: el.dataset.scrollspy,
    top: el.getBoundingClientRect().top + window.scrollY - offset,
  }));
}

function getActiveSectionId() {
  const scrollY = window.scrollY;
  const tops = getSectionTops().sort((a, b) => a.top - b.top);
  let active = tops[0]?.id ?? 'product';

  for (const item of tops) {
    if (scrollY >= item.top - 2) active = item.id;
  }
  return active;
}

function setNavActive(activeId) {
  navItems.forEach((el) => {
    el.classList.toggle('is-active', el.dataset.nav === activeId);
  });
}

function getActiveSpecGroup() {
  if (getActiveSectionId() !== 'specs') return null;

  const scrollY = window.scrollY + getScrollOffset() + 24;
  let active = 'all';
  specGroups.forEach((el) => {
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (scrollY >= top - 8) active = el.dataset.specGroup;
  });
  return active;
}

function setSpecSidebarActive(specId) {
  if (!specId) {
    specNavLinks.forEach((a) => a.classList.remove('is-active'));
    return;
  }
  specNavLinks.forEach((a) => {
    a.classList.toggle('is-active', a.dataset.specNav === specId);
  });
}

function updateScrollspy() {
  setNavActive(getActiveSectionId());
  setSpecSidebarActive(getActiveSpecGroup());
}

function updateNavTheme() {
  const hero = document.getElementById('product');
  if (!nav || !hero) return;
  const heroEnd = hero.offsetTop + hero.offsetHeight - (nav.offsetHeight + 48);
  const onHero = window.scrollY < heroEnd;
  nav.classList.toggle('nav--on-hero', onHero);
  nav.classList.toggle('nav--solid', !onHero && window.scrollY > 24);
}

function onScroll() {
  updateNavTheme();
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    if (!userScrolling) updateScrollspy();
    scrollTicking = false;
  });
}

function onMenuToggle() {
  navLinks?.classList.toggle('is-open');
  const open = navLinks?.classList.contains('is-open');
  menuBtn?.setAttribute('aria-expanded', String(open));
}

function initReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');
  if (reduced) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
  );
  items.forEach((el) => observer.observe(el));
}

function scrollToSection(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
  userScrolling = true;
  clearTimeout(scrollUnlockTimer);
  window.scrollTo({ top, behavior: 'smooth' });
  scrollUnlockTimer = setTimeout(() => {
    userScrolling = false;
    updateScrollspy();
  }, 700);
}

function initCarouselDots() {
  const carousel = document.querySelector('[data-carousel]');
  const dots = document.querySelectorAll('[data-carousel-dots] .carousel__dot');
  if (!carousel || !dots.length) return;

  const items = carousel.querySelectorAll('.carousel__item');

  function syncCarouselState() {
    const center = carousel.scrollLeft + carousel.clientWidth / 2;
    let active = 0;
    items.forEach((item, i) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      if (Math.abs(itemCenter - center) < item.offsetWidth / 2) active = i;
    });
    dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      items[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  });

  carousel.addEventListener('scroll', syncCarouselState, { passive: true });
  syncCarouselState();
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      navLinks?.classList.remove('is-open');
      scrollToSection(id);

      if (target.dataset.specGroup) {
        setNavActive('specs');
        setSpecSidebarActive(target.dataset.specGroup);
      } else if (target.dataset.scrollspy) {
        setNavActive(target.dataset.scrollspy);
      } else if (link.dataset.nav) {
        setNavActive(link.dataset.nav);
      }
    });
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', () => {
  updateNavTheme();
  updateScrollspy();
}, { passive: true });
menuBtn?.addEventListener('click', onMenuToggle);
updateNavTheme();
onScroll();
updateScrollspy();
initReveal();
initCarouselDots();
initSmoothAnchors();
