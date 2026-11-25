'use client';
import { useEffect, useState } from 'react';
import { dell, borderplus } from '@/lib/data';
import Icon from './Icon';

function Seg({ options, value, onChange }) {
  return (
    <div className="seg">
      {options.map(([label, v]) => (
        <button key={label} type="button" aria-pressed={value === v} onClick={() => onChange(v)}>{label}</button>
      ))}
    </div>
  );
}

const fm = (x) => '$' + (x >= 100 ? Math.round(x) : x.toFixed(1)) + 'M';

function RoiCalc() {
  const [vk, setVk] = useState('m');
  const [fac, setFac] = useState(1);
  const v = dell.verticals[vk];
  const [n, setN] = useState(v.val);
  const u = n / v.per, lo = v.lo * u * fac, hi = v.hi * u * fac;
  return (
    <div className="box">
      <h4>Try the ROI logic</h4>
      <p className="hint">A simplified version of the calculator we built: pick where to land, set the scale, choose a scenario.</p>
      <Seg options={[['Manufacturing', 'm'], ['Retail', 'r']]} value={vk} onChange={(k) => { setVk(k); setN(dell.verticals[k].val); }} />
      <div className="range">
        <label htmlFor="scale"><span>{v.lbl}</span><b>{n.toLocaleString()}</b></label>
        <input type="range" id="scale" min={v.min} max={v.max} step={v.step} value={n} onChange={(e) => setN(+e.target.value)} />
      </div>
      <Seg options={dell.scenarios} value={fac} onChange={setFac} />
      <p className="big">{fm((lo + hi) / 2)}</p>
      <p className="sub">estimated annual value · range {fm(lo)} – {fm(hi)}</p>
      <p className="note">Uses the report&apos;s per-unit value ranges (predictive maintenance $2–5M per plant; loss prevention $2–6M per 100 stores) and its scenario factors. Illustrative only, not Dell pricing.</p>
    </div>
  );
}

function LandExpand() {
  const [i, setI] = useState(0);
  return (
    <div className="box">
      <h4>Land, then expand</h4>
      <p className="hint">Start each vertical with the use case that returns the most, then add more on the same infrastructure.</p>
      <Seg options={[['Manufacturing', 0], ['Retail', 1], ['Smart cities', 2]]} value={i} onChange={setI} />
      <div className="flow">
        {dell.landExpand[i].map((s, j) => (
          <span key={s} style={{ display: 'contents' }}>
            {j > 0 && <i>→</i>}
            <span className={j ? '' : 'land'}>{j ? s : `Land: ${s}`}</span>
          </span>
        ))}
      </div>
      <div className="two">
        <div><strong>15</strong><span>use cases prioritised</span></div>
        <div><strong>$50–150M</strong><span>annual P&amp;L potential</span></div>
        <div><strong>15</strong><span>partners profiled</span></div>
        <div><strong>22%</strong><span>edge AI spend CAGR to 2028</span></div>
      </div>
    </div>
  );
}

function Tiers() {
  const [open, setOpen] = useState(1);
  return (
    <div className="box">
      <h4>Pick the beachhead</h4>
      <p className="hint">Dubai&apos;s private market in three tiers. Tap a tier to see why it was or wasn&apos;t the entry point.</p>
      <div className="tiers">
        {borderplus.tiers.map(([t, tag, d], i) => (
          <button key={t} className="tier" type="button" aria-expanded={open === i} onClick={() => setOpen(i)}>
            <b>{t}<small>{tag}</small></b><p>{d}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function PayBars({ active }) {
  const [go, setGo] = useState(false);
  useEffect(() => { if (active) { const r = requestAnimationFrame(() => setGo(true)); return () => cancelAnimationFrame(r); } }, [active]);
  return (
    <div className="box">
      <h4>Real pay gain by source country</h4>
      <p className="hint">Gain against the AED 5,250 Dubai benchmark, and the role each country got.</p>
      <div className="bars">
        {borderplus.countries.map(([c, x, role]) => (
          <div className="bar" key={c}>
            <span>{c}</span>
            <div className="t"><div className={`f ${x > 3 ? 'hi' : ''}`} style={{ width: go ? `${(x / 4.7) * 100}%` : 0 }} /></div>
            <b>{x}×</b>
            <span className="role">{role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BpScenario() {
  const [s, setS] = useState(0);
  const sc = borderplus.scenarios[s];
  return (
    <div className="box">
      <h4>Scenario explorer</h4>
      <p className="hint">The two modelled cases from the 3-year model.</p>
      <Seg options={borderplus.scenarios.map((x, i) => [x.name, i])} value={s} onChange={setS} />
      <p className="big">{sc.top}</p>
      <p className="sub">top line</p>
      <div className="two"><div><strong>{sc.con}</strong><span>contribution</span></div><div><strong>{sc.pl}</strong><span>placements</span></div></div>
      <p className="note">{sc.trig}</p>
    </div>
  );
}

function Dell() {
  return (
    <article className="case" role="tabpanel" id="p-dell" aria-labelledby="t-dell">
      <div className="case-head">
        <div>
          <div className="ohead"><Icon name="D" /><Icon name="SPJ" /></div>
          <span className="kicker" style={{ marginTop: 14 }}>IIP industrial project · Dell Technologies</span>
          <h3 style={{ marginTop: 12 }}>Getting edge AI out of &quot;pilot purgatory&quot;: a business-first impact toolkit for Dell&apos;s presales teams</h3>
        </div>
        <div className="meta">
          <div><span>Team</span><b>3 MBA consultants</b></div><div><span>Regions</span><b>Middle East and APAC</b></div>
          <div><span>Verticals</span><b>Manufacturing, retail, smart cities</b></div><div><span>Outputs</span><b>Exec deck, ROI calculator, partner analysis</b></div>
        </div>
      </div>
      <div className="psa">
        <div><h4>Problem</h4><p>Dell has one of the broadest edge-to-cloud portfolios, but too few edge AI pilots become production revenue. Presales led with product specs, while buyers needed a business case they could defend.</p></div>
        <div><h4>Approach</h4><p>Narrowed 18 use cases to 15 with Dell technical experts, then scored each on four P&amp;L levers: cost, revenue, risk and productivity. Benchmarks came from Gartner, IDC, NRF and Deloitte, using conservative mid-points.</p></div>
        <div><h4>Insight</h4><p>The barrier is commercial, not technical. In a crowded market where buyers have a lot of power, the vendor that puts numbers in front of the buyer wins.</p></div>
      </div>
      <div className="fw">{["Porter's Five Forces", 'SWOT', 'Market attractiveness', 'Strategic positioning', 'Land-and-expand', 'Partner prioritisation matrix'].map((f) => <span key={f}>{f}</span>)}</div>
      <div className="lab"><RoiCalc /><LandExpand /></div>
      <div className="recs">
        <div><b>Outcome-led presales</b><p>Make the ROI calculator the opening artefact, so a business case that took days happens live in one meeting.</p></div>
        <div><b>Land and expand</b><p>Lead with predictive maintenance, loss prevention and traffic management, then grow on the same infrastructure.</p></div>
        <div><b>Tiered partner ecosystem</b><p>Pair large sovereign-scale integrators (Tahakom, Presight) with use-case specialists (Derq, Videonetics) rather than rely on one global partner.</p></div>
        <div><b>NativeEdge as the moat</b><p>Compete on total lifecycle value, not unit price.</p></div>
      </div>
    </article>
  );
}

function BorderPlus() {
  return (
    <article className="case" role="tabpanel" id="p-bp" aria-labelledby="t-bp">
      <div className="case-head">
        <div>
          <div className="ohead"><Icon name="BP" /><Icon name="SPJ" /></div>
          <span className="kicker" style={{ marginTop: 14 }}>IIP consulting project · BorderPlus</span>
          <h3 style={{ marginTop: 12 }}>Where to enter, what to sell and how to price it: BorderPlus&apos;s entry into Dubai private healthcare</h3>
        </div>
        <div className="meta">
          <div><span>Client</span><b>AI nurse-mobility platform</b></div><div><span>Market</span><b>Dubai private sector, nurses</b></div>
          <div><span>Research</span><b>76 sources, nurse and stakeholder interviews</b></div><div><span>Outputs</span><b>Report, 3-year Excel model</b></div>
        </div>
      </div>
      <div className="psa">
        <div><h4>Problem</h4><p>About 80% of Dubai&apos;s private-hospital nurses come from two countries, through agents BorderPlus doesn&apos;t work with. Placement fees alone were worth under AED 0.5M a year.</p></div>
        <div><h4>Approach</h4><p>Mixed methods: a screen of nine source countries, a purchasing-power comparison, a weighted scorecard, a CVM funnel, interviews and a live 3-year financial model. Every finding was tagged as evidenced, directional or open.</p></div>
        <div><h4>Insight</h4><p>Go for the nurses already working in Dubai, not just new arrivals. A licence paid by the hospital reaches all ~11,900 internationally recruited nurses there, and hospitals already have a CPD budget it can replace.</p></div>
      </div>
      <div className="fw">{['Segmentation, targeting and positioning', 'Weighted scorecard', 'CVM funnel', 'Value-based pricing', 'Scenario planning', 'Kraljic'].map((f) => <span key={f}>{f}</span>)}</div>
      <div className="lab">
        <Tiers /><PayBars active />
        <BpScenario />
        <div className="box">
          <h4>Pricing architecture</h4>
          <p className="hint">Price on value, then check it against the cost to serve.</p>
          <div className="two">
            <div><strong>AED 30</strong><span>per nurse per month, Learn + Ask</span></div>
            <div><strong>AED 8–14</strong><span>AI cost per nurse per month</span></div>
            <div><strong>AED 15,000</strong><span>per placement (assumed)</span></div>
            <div><strong>50–70%</strong><span>licence gross margin held</span></div>
          </div>
          <p className="note">Do (speech-based documentation) is priced and capped separately, at AED 30–45 per active user or AED 0.20–0.25 a minute.</p>
        </div>
      </div>
      <div className="recs">
        <div><b>Where</b><p>Start with Tier 2 single-site hospitals, piloting with India, Jordan and Lebanon. Add Ghana and Nigeria in year 2, but only after two gates are passed.</p></div>
        <div><b>What</b><p>Sell one platform (Learn, Ask and Do) as a per-nurse licence the hospital pays for, leading with CPD. It runs on hospital tablets through NABIDH standards.</p></div>
        <div><b>How much</b><p>Never discount the licence to win placements. Cap AI usage so margins stay healthy.</p></div>
        <div><b>How to scale</b><p>Expand a corridor only after its 90-day rating, 12-month retention and first-time pass rate are proven.</p></div>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  const [tab, setTab] = useState('dell');
  const tabs = [['dell', 'Dell Technologies · Edge AI'], ['bp', 'BorderPlus · Dubai entry']];
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = tab === 'dell' ? 'bp' : 'dell';
    setTab(next);
    document.getElementById(`t-${next}`)?.focus();
  };
  useEffect(() => {
    document.querySelectorAll('.case .rv').forEach((el) => el.classList.add('in'));
  }, [tab]);
  return (
    <section className="band gray" id="work">
      <div className="wrap">
        <span className="kicker">Case studies</span>
        <h2 style={{ marginTop: 12 }}>Consulting work, live</h2>
        <p className="lede">Two MBA consulting engagements. Each one includes a small working model built from the report&apos;s own numbers, so you can test the thinking yourself.</p>
        <div className="tabs" role="tablist" aria-label="Case studies" onKeyDown={onKey}>
          {tabs.map(([id, label]) => (
            <button key={id} id={`t-${id}`} className="tab" role="tab" aria-controls={`p-${id}`} aria-selected={tab === id} tabIndex={tab === id ? 0 : -1} onClick={() => setTab(id)}>{label}</button>
          ))}
        </div>
        {tab === 'dell' ? <Dell /> : <BorderPlus />}
      </div>
    </section>
  );
}
