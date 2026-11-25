'use client';
import { useEffect, useState } from 'react';

// Decorative background charts. The numbers are illustrative only, not real results.
const A = 'var(--acc)', S = 'var(--soft)';

function Bars({ v }) {
  return (
    <svg viewBox="0 0 220 160">
      {[0, 40, 80, 120].map((y) => <line key={y} x1="30" x2="215" y1={y + 10} y2={y + 10} stroke={A} strokeOpacity=".35" />)}
      {['100', '75', '50', '25'].map((t, i) => <text key={t} x="0" y={i * 40 + 14}>{t}</text>)}
      {v.map((x, i) => <rect key={i} x={38 + i * 30} y={130 - x} width="20" height={x} rx="3" fill={i % 2 ? S : A} />)}
      {v.map((_, i) => <text key={'q' + i} x={38 + i * 30} y="152">{'Q' + (i + 1)}</text>)}
    </svg>
  );
}
function Line({ v }) {
  const pts = v.map((y, i) => [20 + i * (190 / (v.length - 1)), 130 - y]);
  const d = 'M' + pts.map((p) => p.join(' ')).join(' L');
  return (
    <svg viewBox="0 0 220 160">
      <path d="M20 130 H215 M20 10 V130" stroke={A} fill="none" />
      <path d={`${d} L210 130 L20 130Z`} fill={S} fillOpacity=".5" />
      <path d={d} stroke={A} strokeWidth="3" fill="none" />
      {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="4" fill={A} />)}
      <text x="150" y={pts[pts.length - 1][1] - 10}>+18.4%</text>
    </svg>
  );
}
function Donut({ a, lbl }) {
  const r = 52, c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 160 160">
      <circle cx="80" cy="80" r={r} fill="none" stroke={S} strokeWidth="18" />
      <circle cx="80" cy="80" r={r} fill="none" stroke={A} strokeWidth="18" strokeDasharray={`${c * a} ${c}`} transform="rotate(-90 80 80)" />
      <text x="80" y="86" textAnchor="middle" style={{ fontSize: 22 }}>{lbl}</text>
    </svg>
  );
}
function Scatter() {
  const dots = Array.from({ length: 26 }, (_, i) => {
    const x = 20 + ((i * 37) % 180), y = 140 - (x * 0.5 + ((i * 53) % 40));
    return <circle key={i} cx={x} cy={y} r={3 + (i % 3)} fill={i % 3 ? S : A} />;
  });
  return (
    <svg viewBox="0 0 220 160">
      <path d="M20 145 H215 M20 10 V145" stroke={A} fill="none" />{dots}
      <path d="M20 140 L210 40" stroke={A} strokeDasharray="5 5" />
    </svg>
  );
}
function HBars() {
  return (
    <svg viewBox="0 0 220 150">
      {[180, 140, 110, 80, 50].map((w, i) => (
        <g key={i}>
          <text x="0" y={i * 28 + 20}>{'ABCDE'[i]}</text>
          <rect x="20" y={i * 28 + 8} width={w} height="16" rx="3" fill={i ? S : A} />
          <text x={w + 26} y={i * 28 + 20}>{Math.round(w / 1.8)}%</text>
        </g>
      ))}
    </svg>
  );
}
function Kpi({ n, l }) {
  return (
    <svg viewBox="0 0 200 90">
      <text x="0" y="50" style={{ fontSize: 44, fontWeight: 800 }}>{n}</text>
      <text x="2" y="76" style={{ fontSize: 13 }}>{l}</text>
      <path d="M120 60 L140 48 L155 54 L175 30 L195 22" stroke={A} strokeWidth="3" fill="none" />
    </svg>
  );
}

const gens = [
  () => <Bars v={[60, 85, 70, 110, 95]} />, () => <Kpi n="72%" l="retention" />, () => <Line v={[20, 35, 30, 60, 55, 85, 100]} />,
  () => <Donut a={0.68} lbl="68%" />, () => <Scatter />, () => <HBars />, () => <Kpi n="3.4×" l="return" />,
  () => <Bars v={[40, 70, 55, 90, 120, 100]} />, () => <Donut a={0.42} lbl="42%" />, () => <Line v={[30, 25, 50, 45, 70, 65, 95]} />,
  () => <Kpi n="+24%" l="growth" />, () => <Donut a={0.81} lbl="81%" />, () => <Bars v={[90, 60, 100, 75, 115]} />,
  () => <Kpi n="87" l="index" />, () => <Line v={[50, 40, 65, 60, 80, 75, 110]} />,
];

function layout(mobile) {
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const C = mobile ? 2 : 4, R = mobile ? 12 : 14, out = [];
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    const off = (r % 2) * (0.5 / C);
    const top = ((r + 0.1 + rnd() * 0.7) / R) * 97;
    const left = Math.max(-4, Math.min(90, ((c + rnd() * 0.75) / C + off - 0.1) * 100));
    const sz = 0.6 + rnd() * 0.7, rot = (rnd() - 0.5) * 12, k = 0.3 + rnd() * 1.1;
    out.push({
      key: `${r}-${c}`, gen: gens[((r * C + c) * 7 + 3) % gens.length],
      style: { top: `${top}%`, left: `${left.toFixed(1)}%`, width: `clamp(${Math.round(140 * sz)}px, ${(18 * sz).toFixed(1)}vw, ${Math.round(280 * sz)}px)`, '--r': `${rot.toFixed(1)}deg`, '--k': k.toFixed(2) },
    });
  }
  return out;
}

export default function BackgroundViz() {
  const [items, setItems] = useState([]);
  useEffect(() => { setItems(layout(window.matchMedia('(max-width:760px)').matches)); }, []);
  return (
    <div className="bgviz" id="bgviz" aria-hidden="true">
      {items.map(({ key, gen, style }) => <div key={key} className="vz" style={style}>{gen()}</div>)}
    </div>
  );
}
