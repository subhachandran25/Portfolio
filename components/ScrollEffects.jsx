'use client';
import { useEffect, useState } from 'react';

// Page-wide scroll interactions: progress bar, zoom-in reveals, background parallax,
// floating portrait and a back-to-top button.
const REVEAL = 'section h2, section .lede, .case-head, .psa>div, .fw, .recs>div, .step, .box, .edu>div, .split h3, .ctr, .contact .cgrid>div, .tabs';

export default function ScrollEffects() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    const tag = () => {
      document.querySelectorAll(REVEAL).forEach((el) => {
        if (el.classList.contains('rv')) return;
        el.classList.add('rv');
        const sib = [...el.parentElement.children].filter((x) => x.matches(REVEAL));
        el.style.transitionDelay = `${(sib.indexOf(el) % 6) * 90}ms`;
        io.observe(el);
      });
    };
    tag();
    const mo = new MutationObserver(tag);
    mo.observe(document.body, { childList: true, subtree: true });

    let tick = false;
    const onScroll = () => {
      const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
      setShowTop(y > 700);
      if (!reduce) {
        document.getElementById('bgviz')?.style.setProperty('--py', `${-y * 0.07}px`);
        const p = document.getElementById('portrait');
        if (p && y < 1000) p.style.transform = `translateY(${y * 0.08}px) rotate(${y * 0.004}deg)`;
      }
      tick = false;
    };
    const handler = () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } };
    window.addEventListener('scroll', handler, { passive: true });
    onScroll();
    return () => { io.disconnect(); mo.disconnect(); window.removeEventListener('scroll', handler); };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <button className={`top ${showTop ? 'show' : ''}`} type="button" aria-label="Back to top" onClick={toTop}>↑</button>
    </>
  );
}
