import { useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/heroSlides';

export default function Hero() {
  const heroRef = useRef(null);
  const trackRef = useRef(null);
  const dotsWrapRef = useRef(null);
  const progressElRef = useRef(null);
  const catBadgeRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return undefined;

    const onMove = (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroSection.style.setProperty('--mouse-x', `${x}px`);
      heroSection.style.setProperty('--mouse-y', `${y}px`);
    };

    const onClick = (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const wave = document.createElement('div');
      wave.className = 'hero-ripple-wave';
      wave.style.setProperty('--x', `${x}px`);
      wave.style.setProperty('--y', `${y}px`);
      heroSection.appendChild(wave);

      let r = 0;
      const maxR = 500;
      const start = performance.now();
      const duration = 1500;

      function animateWave(time) {
        const elapsed = time - start;
        const progress = elapsed / duration;

        if (progress < 1) {
          r = progress * maxR;
          wave.style.setProperty('--r', `${r}px`);
          requestAnimationFrame(animateWave);
        } else {
          wave.remove();
        }
      }
      requestAnimationFrame(animateWave);
    };

    heroSection.addEventListener('mousemove', onMove);
    heroSection.addEventListener('click', onClick);

    return () => {
      heroSection.removeEventListener('mousemove', onMove);
      heroSection.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    const INTERVAL = 5000;
    const DURATION = 900;

    const isMobile = window.innerWidth < 768;
    const TRANSITIONS = isMobile ? ['slide-over', 'push'] : ['slide-over', 'push', 'wipe', 'zoom'];

    const SLIDES = HERO_SLIDES.map((s) => ({
      ...s,
      src: `${import.meta.env.BASE_URL}${s.src.replace(/^\//, '')}`,
    }));

    const track = trackRef.current;
    const dotsWrap = dotsWrapRef.current;
    const progressEl = progressElRef.current;
    const catBadge = catBadgeRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const slideshow = slideshowRef.current;

    if (!track) return undefined;

    let current = 0;
    let transitioning = false;
    let transIdx = 0;
    let timer = null;
    let paused = false;
    let touchStartX = 0;

    SLIDES.forEach((s, i) => {
      const el = document.createElement('div');
      el.className = `hs-slide${i === 0 ? ' active' : ''}`;
      el.dataset.index = String(i);
      const safeSrc = encodeURI(s.src);
      el.innerHTML = `
          <div class="hs-bg" 
               style="background-image:url('${safeSrc}')"></div>
          <div class="hs-overlay"></div>
          <div class="hs-content">
            <span class="hs-tag">${s.tag}</span>
            <h3 class="hs-name">${s.name}</h3>
            <p class="hs-desc">${s.desc}</p>
            <a href="#contact" class="hs-enquire">Enquire Now →</a>
          </div>`;
      track.appendChild(el);
    });

    if (dotsWrap) {
      SLIDES.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = `hs-dot${i === 0 ? ' active' : ''}`;
        d.setAttribute('aria-label', `Slide ${i + 1}`);
        d.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(d);
      });
    }

    const thumbsWrap = document.createElement('div');
    thumbsWrap.className = 'hs-thumbs';
    SLIDES.forEach((s, i) => {
      const thumb = document.createElement('div');
      thumb.className = `hs-thumb${i === 0 ? ' active' : ''}`;
      const safeSrc = encodeURI(s.src);
      thumb.innerHTML = `<img src="${safeSrc}" alt="${s.name}" loading="lazy"/>`;
      thumb.addEventListener('click', () => goTo(i));
      thumbsWrap.appendChild(thumb);
    });
    if (slideshow) slideshow.appendChild(thumbsWrap);

    function updateThumbs(idx) {
      const thumbs = thumbsWrap.querySelectorAll('.hs-thumb');
      thumbs.forEach((t, i) => {
        t.classList.toggle('active', i === idx);
        const diff = Math.abs(i - idx);
        t.style.display = diff <= 1 ? 'block' : 'none';
      });
    }

    function resetProgress() {
      if (!progressEl) return;
      progressEl.classList.remove('running');
      progressEl.style.transition = 'none';
      progressEl.style.width = '0%';
      void progressEl.offsetWidth;
      requestAnimationFrame(() => progressEl.classList.add('running'));
    }

    function cleanClasses(el) {
      el.classList.remove(
        'enter-slide-over',
        'exit-slide-over',
        'enter-push',
        'exit-push',
        'enter-wipe',
        'exit-wipe',
        'enter-zoom',
        'exit-zoom',
        'active'
      );
      el.style.opacity = '';
      el.style.filter = '';
      el.style.transform = '';
      el.style.clipPath = '';
      el.style.zIndex = '';
    }

    function goTo(nextIdx) {
      if (transitioning) return;
      if (nextIdx === current) return;

      const slides = Array.from(track.querySelectorAll('.hs-slide'));
      const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.hs-dot')) : [];

      const oldSlide = slides[current];
      const newIdx = ((nextIdx % SLIDES.length) + SLIDES.length) % SLIDES.length;
      const newSlide = slides[newIdx];
      const type = TRANSITIONS[transIdx % TRANSITIONS.length];

      transitioning = true;
      transIdx += 1;

      cleanClasses(newSlide);
      newSlide.style.opacity = '1';

      if (type === 'slide-over') {
        newSlide.classList.add('enter-slide-over');
        oldSlide.classList.add('exit-slide-over');
      } else if (type === 'push') {
        oldSlide.classList.add('exit-push');
        newSlide.classList.add('enter-push');
      } else if (type === 'wipe') {
        newSlide.classList.add('enter-wipe');
        oldSlide.classList.add('exit-wipe');
      } else if (type === 'zoom') {
        newSlide.classList.add('enter-zoom');
        oldSlide.classList.add('exit-zoom');
      }

      setTimeout(() => {
        cleanClasses(oldSlide);
        oldSlide.style.opacity = '0';

        cleanClasses(newSlide);
        newSlide.classList.add('active');
        newSlide.style.opacity = '1';

        current = newIdx;
        transitioning = false;

        dots.forEach((d, i) => d.classList.toggle('active', i === current));
        updateThumbs(current);
        if (catBadge) {
          catBadge.style.opacity = '0';
          setTimeout(() => {
            catBadge.textContent = SLIDES[current].tag;
            catBadge.style.opacity = '1';
          }, 150);
        }

        resetProgress();
        clearInterval(timer);
        if (!paused) timer = setInterval(() => goTo(current + 1), INTERVAL);

        const nxt = (current + 1) % SLIDES.length;
        const img = new Image();
        img.src = SLIDES[nxt].src;
      }, DURATION);
    }

    const onPrev = () => goTo(current - 1);
    const onNext = () => goTo(current + 1);

    if (prevBtn) prevBtn.addEventListener('click', onPrev);
    if (nextBtn) nextBtn.addEventListener('click', onNext);

    const onKey = (e) => {
      if (!slideshow) return;
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    };
    document.addEventListener('keydown', onKey);

    const onTouchStart = (e) => {
      touchStartX = e.changedTouches[0].clientX;
    };
    const onTouchEnd = (e) => {
      const dx = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) goTo(current + (dx > 0 ? 1 : -1));
    };

    if (slideshow) {
      slideshow.addEventListener('touchstart', onTouchStart, { passive: true });
      slideshow.addEventListener('touchend', onTouchEnd, { passive: true });
    }

    const onEnter = () => {
      paused = true;
      clearInterval(timer);
    };
    const onLeave = () => {
      paused = false;
      resetProgress();
      timer = setInterval(() => goTo(current + 1), INTERVAL);
    };

    if (slideshow) {
      slideshow.addEventListener('mouseenter', onEnter);
      slideshow.addEventListener('mouseleave', onLeave);
    }

    updateThumbs(0);
    resetProgress();
    timer = setInterval(() => goTo(current + 1), INTERVAL);

    return () => {
      clearInterval(timer);
      if (prevBtn) prevBtn.removeEventListener('click', onPrev);
      if (nextBtn) nextBtn.removeEventListener('click', onNext);
      document.removeEventListener('keydown', onKey);
      if (slideshow) {
        slideshow.removeEventListener('touchstart', onTouchStart);
        slideshow.removeEventListener('touchend', onTouchEnd);
        slideshow.removeEventListener('mouseenter', onEnter);
        slideshow.removeEventListener('mouseleave', onLeave);
        thumbsWrap.remove();
      }
      track.innerHTML = '';
      if (dotsWrap) dotsWrap.innerHTML = '';
    };
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="#ffffff">
          <path d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
      <div className="hero-inner">
        <div className="hero-col-left">
          <div className="hero-badge reveal reveal-up">Verified Wholesale Supply</div>
          <h1 className="hero-title-line reveal reveal-up" style={{ transitionDelay: '0.1s' }}>
            Your Trusted Partner
          </h1>
          <h1 className="hero-title-line reveal reveal-up" style={{ marginTop: '-15px', transitionDelay: '0.2s' }}>
            for <em>Surgical & Pharma</em>
          </h1>
          <p className="hero-sub reveal reveal-up" style={{ transitionDelay: '0.3s' }}>
            Perundurai Surgicals supplies government hospitals, private clinics, and retail pharmacies across Erode
            district with 500+ genuine, licensed medical products at the most competitive wholesale prices.
          </p>

          <div className="hero-value-props">
            <div className="hero-vp-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Drug Licensed
            </div>
            <div className="hero-vp-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              GST Compliant
            </div>
            <div className="hero-vp-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Genuine Stock Only
            </div>
          </div>

          <div className="hero-btns">
            <a href="#products" className="btn-primary">
              Explore Products
            </a>
            <a href="https://wa.me/919865271371" target="_blank" rel="noreferrer" className="btn-secondary">
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-col-right">
          <div className="hero-slideshow" id="heroSlideshow" ref={slideshowRef}>
            <div className="hs-track" id="hsTrack" ref={trackRef} />

            <div className="hs-progress">
              <div className="hs-progress-fill" id="hsProgress" ref={progressElRef} />
            </div>

            <button type="button" className="hs-arrow hs-prev" id="hsPrev" ref={prevBtnRef} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button type="button" className="hs-arrow hs-next" id="hsNext" ref={nextBtnRef} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="hs-dots" id="hsDots" ref={dotsWrapRef} />

            <div className="hs-cat-badge" id="hsCatBadge" ref={catBadgeRef}>
              IV & INFUSION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
