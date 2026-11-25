'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { profile, counters } from '@/lib/data';

function Counter({ to, pre = '', suf = '', dec = 0, label, run }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!run || !ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t0 = performance.now();
    let raf;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / 1200);
      const v = to * (1 - Math.pow(1 - k, 3));
      ref.current.textContent = pre + v.toFixed(dec) + suf;
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to, pre, suf, dec]);
  return (
    <div className="ctr">
      <strong ref={ref}>{pre + to.toFixed(dec) + suf}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="band" id="top">
      <svg className="datafield" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="var(--data)">
          <path d="M-20 620 C140 560 260 600 380 520 C500 440 600 500 720 420 C840 340 960 380 1080 280 C1140 230 1180 220 1220 200" strokeOpacity=".18" strokeWidth="2.5" />
          <path d="M-20 700 C160 680 300 640 460 650 C620 660 760 560 920 560 C1060 560 1140 470 1220 450" strokeOpacity=".12" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M600 0V800M900 0V800M300 0V800M0 200H1200M0 400H1200M0 600H1200" strokeOpacity=".07" />
        </g>
        <g fill="var(--data)" fillOpacity=".07">
          <rect x="40" y="680" width="40" height="120" /><rect x="92" y="640" width="40" height="160" /><rect x="144" y="700" width="40" height="100" /><rect x="196" y="610" width="40" height="190" />
          <rect x="1060" y="560" width="40" height="240" /><rect x="1112" y="500" width="40" height="300" />
        </g>
        <g fill="var(--data)" fillOpacity=".4"><circle cx="380" cy="520" r="5" /><circle cx="720" cy="420" r="5" /><circle cx="1080" cy="280" r="5" /></g>
      </svg>
      <div className="wrap">
        <div className="hero">
          <div>
            <span className="kicker">{profile.kicker}</span>
            <h1 style={{ marginTop: 18 }}>I turn messy data into <em>decisions</em>.</h1>
            <p className="lede">{profile.intro}</p>
            <div className="cta">
              <a className="btn solid" href="#work">See my case studies <span className="ar">→</span></a>
              <a className="btn" href="#contact">Let&apos;s talk</a>
            </div>
          </div>
          <div className="portrait" id="portrait">
            <div className="ph">
              <svg viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
                <g stroke="#E0663F" strokeOpacity=".12" strokeWidth="1"><path d="M0 100H400M0 200H400M0 300H400M0 400H400M80 0V500M160 0V500M240 0V500M320 0V500" /></g>
                <g fill="#E0663F" fillOpacity=".14"><rect x="20" y="330" width="34" height="170" rx="4" /><rect x="66" y="280" width="34" height="220" rx="4" /><rect x="300" y="250" width="34" height="250" rx="4" /><rect x="346" y="190" width="34" height="310" rx="4" /></g>
                <path d="M0 240 C60 220 90 170 140 180 C200 192 230 120 280 110 C330 100 360 60 400 40" fill="none" stroke="#E0663F" strokeOpacity=".35" strokeWidth="3" />
                <g fill="#E0663F" fillOpacity=".5"><circle cx="140" cy="180" r="5" /><circle cx="280" cy="110" r="5" /><circle cx="400" cy="40" r="5" /></g>
                <path d="M0 320 C80 300 120 330 200 290 C280 250 330 280 400 230" fill="none" stroke="#E0663F" strokeOpacity=".2" strokeWidth="2" strokeDasharray="6 6" />
              </svg>
              <Image src="/photo.jpg" alt="Subha Chandran" fill priority sizes="250px" />
            </div>
          </div>
        </div>
        <Counters />
      </div>
    </header>
  );
}

function Counters() {
  const box = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setRun(true); io.disconnect(); }
    }, { threshold: 0.4 });
    if (box.current) io.observe(box.current);
    return () => io.disconnect();
  }, []);
  return (
    <div className="counters" ref={box}>
      {counters.map((c) => <Counter key={c.label} {...c} run={run} />)}
    </div>
  );
}
