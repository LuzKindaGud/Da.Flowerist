import React, { useEffect, useRef } from 'react';
import './pages-style/home.css';
import vid1 from '../../assets/video/vid1.webm';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // respect reduced-motion
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.style.setProperty('--scroll-p', '0');
      return;
    }

    let ticking = false;
    let heroTop = 0;
    let heroHeight = 1;

    const recalc = () => {
      const rect = el.getBoundingClientRect();
      // offsetTop relative to document
      heroTop = window.scrollY + rect.top;
      heroHeight = rect.height || 1;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        // progress 0 when page at top (scrollY == heroTop), 1 when scrolled past hero height
        let p = (scrollY - heroTop) / heroHeight;
        p = Math.min(Math.max(p, 0), 1);
        el.style.setProperty('--scroll-p', String(p));
        ticking = false;
      });
    };

    const onResize = () => {
      recalc();
      onScroll();
    };

    recalc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    // initial set
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <main className="home-hero" role="main" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-left">ELEGANT</h1>

        <div className="hero-media" aria-hidden="true">
          <video
            className="hero-video"
            src={vid1}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <h1 className="hero-right">MEANINGFUL</h1>
      </div>
    </main>
  );
};

export default Home;