'use client';
import { useEffect, useState } from 'react';

const links = [['journey', 'Journey'], ['work', 'Case studies'], ['about', 'About'], ['contact', 'Contact']];

export default function Nav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top">Subha<i>.</i></a>
        <div className="links">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
