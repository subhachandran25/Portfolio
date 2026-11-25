'use client';
import { useState } from 'react';
import { profile } from '@/lib/data';

export default function Contact() {
  const [label, setLabel] = useState('Copy email');
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setLabel('Copied'); }
    catch { setLabel('Select the email to copy'); }
    setTimeout(() => setLabel('Copy email'), 2500);
  };
  return (
    <section className="contact" id="contact">
      <h2>Let&apos;s talk.</h2>
      <p className="lede">{profile.lookingFor}</p>
      <div className="cgrid">
        <div>
          <small>Email</small>
          <b><a href={`mailto:${profile.email}`} style={{ textDecoration: 'none' }}>{profile.email}</a></b><br />
          <button className="copy" type="button" onClick={copy}>{label}</button>
        </div>
        <div>
          <small>Phone (UAE)</small>
          <b><a href={`tel:${profile.phone.replace(/\s/g, '')}`} style={{ textDecoration: 'none' }}>{profile.phone}</a></b>
        </div>
      </div>
    </section>
  );
}
