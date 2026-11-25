import { steps, tools, education, also } from '@/lib/data';

export default function About() {
  return (
    <section className="band" id="about">
      <div className="wrap">
        <span className="kicker">How I work</span>
        <h2 style={{ marginTop: 12 }}>Four moves, every problem</h2>
        <div className="steps">
          {steps.map(([t, d], i) => (
            <div className="step" key={t}><span className="n">Step {i + 1}</span><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div>
      <div className="marquee" aria-label={`Tools: ${tools.join(', ')}`}>
        <div className="track" aria-hidden="true">
          {[...tools, ...tools].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
      <div className="wrap split">
        <div>
          <h3 style={{ fontSize: 28 }}>Education</h3>
          <div className="edu">{education.map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}</div>
        </div>
        <div>
          <h3 style={{ fontSize: 28 }}>Also</h3>
          <div className="edu">{also.map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
