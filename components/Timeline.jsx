'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { stops } from '@/lib/data';
import Icon from './Icon';

function Stop({ x, i }) {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`item ${i % 2 ? 'l' : 'r'}${seen ? ' in' : ''}`}>
      <div className="spot"><span className="dot" /><span className="when">{x.when}</span></div>
      <article className="card">
        <div className="ohead">
          <Icon name={x.icon} />
          <div><p className="org" data-when={x.when}>{x.org}</p><h3>{x.title}</h3></div>
        </div>
        <p className="d">{x.d}</p>
        <div className="chips">
          {x.chips.map(([n, l]) => <div className="chip" key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
        <button className="more" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Hide details −' : 'Show details +'}
        </button>
        {open && <ul>{x.li.map((l) => <li key={l}>{l}</li>)}</ul>}
      </article>
    </div>
  );
}

export default function Timeline() {
  const tl = useRef(null);
  const [geo, setGeo] = useState({ d: '', w: 0, h: 0 });
  const mask = useRef(null);
  const len = useRef(0);

  const draw = useCallback(() => {
    const box = tl.current; if (!box) return;
    const r = box.getBoundingClientRect();
    const pts = [...box.querySelectorAll('.dot')].map((d) => { const b = d.getBoundingClientRect(); return [b.left + b.width / 2 - r.left, b.top + b.height / 2 - r.top]; });
    if (pts.length < 2) return;
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) { const [a, b] = pts[i - 1], [c, e] = pts[i], k = (e - b) * 0.55; d += ` C${a} ${b + k} ${c} ${e - k} ${c} ${e}`; }
    setGeo({ d, w: r.width, h: r.height });
  }, []);

  const progress = useCallback(() => {
    const m = mask.current, box = tl.current; if (!m || !box) return;
    if (!len.current) len.current = m.getTotalLength();
    const r = box.getBoundingClientRect();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let p = reduce ? 1 : (window.innerHeight * 0.65 - r.top) / r.height;
    p = Math.max(0, Math.min(1, p));
    m.style.strokeDasharray = len.current;
    m.style.strokeDashoffset = len.current * (1 - p);
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(draw); if (tl.current) ro.observe(tl.current);
    document.fonts?.ready.then(draw);
    window.addEventListener('scroll', progress, { passive: true });
    return () => { ro.disconnect(); window.removeEventListener('scroll', progress); };
  }, [draw, progress]);

  useEffect(() => { len.current = 0; progress(); }, [geo, progress]);

  return (
    <section className="band" id="journey" style={{ paddingTop: 'clamp(24px,4vw,48px)' }}>
      <div className="wrap">
        <span className="kicker">Journey</span>
        <h2 style={{ marginTop: 12 }}>The trail so far</h2>
        <p className="lede">From funnel analytics to growth strategy, across ed-tech, US healthcare, my own brand and a global MBA. Scroll and the trail fills in; open any stop for the detail.</p>
        <div className="tl" ref={tl}>
          <svg aria-hidden="true" viewBox={`0 0 ${geo.w || 1} ${geo.h || 1}`}>
            {geo.d && (
              <>
                <defs>
                  <mask id="tm" maskUnits="userSpaceOnUse" x="-20" y="-20" width={geo.w + 40} height={geo.h + 40}>
                    <path ref={mask} d={geo.d} fill="none" stroke="#fff" strokeWidth="10" />
                  </mask>
                </defs>
                <path className="base" d={geo.d} />
                <path className="prog" d={geo.d} mask="url(#tm)" />
              </>
            )}
          </svg>
          <div>{stops.map((x, i) => <Stop key={x.org} x={x} i={i} />)}</div>
        </div>
      </div>
    </section>
  );
}
