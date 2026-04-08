import { useEffect } from 'react';

const SECTION_IDS = ['hero', 'about', 'products', 'services', 'contact'];

let statsAnimationRan = false;

export function useRevealObserver() {
  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);
}

export function useStatsObserver() {
  useEffect(() => {
    const statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return undefined;

    const statsObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || statsAnimationRan) return;
          statsAnimationRan = true;
          const nums = entry.target.querySelectorAll('.stat-num');
          nums.forEach((num) => {
            const target = +num.getAttribute('data-target');
            let current = 0;
            const step = target / 50;
            const interval = setInterval(() => {
              current += step;
              if (current >= target) {
                num.childNodes[0].textContent = String(target);
                clearInterval(interval);
              } else {
                num.childNodes[0].textContent = String(Math.floor(current));
              }
            }, 30);
          });
          statsObs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    statsObs.observe(statsBar);
    return () => statsObs.disconnect();
  }, []);
}

export function useProductGridModal(setModalData) {
  useEffect(() => {
    function openProductModal(card) {
      const img = card.querySelector('.pg-img img');
      const name = card.querySelector('.pg-info strong');
      const desc = card.querySelector('.pg-info span');
      const detail = card.closest('.pcat-detail');
      const catName = detail ? detail.querySelector('.pcd-header h2').textContent : '';

      setModalData({
        imgSrc: img.src,
        imgAlt: img.alt || name.textContent,
        name: name.textContent,
        desc: desc.textContent,
        catName,
        waHref: `https://wa.me/919865271371?text=${encodeURIComponent(
          `Hello, I would like to enquire about ${name.textContent} from ${catName}.`
        )}`,
      });
    }

    function onClick(e) {
      const card = e.target.closest('.pg-card');
      if (!card || !e.currentTarget.contains(card)) return;
      openProductModal(card);
    }

    const panel = document.querySelector('.pcat-panel');
    if (panel) panel.addEventListener('click', onClick);
    return () => {
      if (panel) panel.removeEventListener('click', onClick);
    };
  }, [setModalData]);
}

export function useNavLinkClose() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar__links a');
    const navLinksEl = document.getElementById('navLinks');
    const close = () => navLinksEl?.classList.remove('navbar__links--open');
    navLinks.forEach((a) => a.addEventListener('click', close));
    return () => navLinks.forEach((a) => a.removeEventListener('click', close));
  }, []);
}

export function useNavScrollAndActive() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar__links a');
    const sections = SECTION_IDS.map((id) => document.getElementById(id));

    function updateActiveNav() {
      const scrollPos = window.scrollY + 100;
      sections.forEach((sec, i) => {
        if (sec && scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          navLinks.forEach((link) => link.classList.remove('active'));
          if (navLinks[i]) navLinks[i].classList.add('active');
        }
      });
      const topnav = document.getElementById('topnav');
      if (topnav) topnav.classList.toggle('navbar--scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    return () => window.removeEventListener('scroll', updateActiveNav);
  }, []);
}
