'use client';

import Link from 'next/link';
import { useState } from 'react';

const LINKS = [
  ['/research', 'Research'],
  ['/professor', 'Professor'],
  ['/members', 'Members'],
  ['/publications', 'Publications'],
  ['/gallery', 'Gallery'],
  ['/#contact', 'Contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          <Link href="/" aria-label="ABCML — Advanced Battery & Cathode Materials Lab, 홈">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/abcml-logo-compact.png" alt="ABCML" />
          </Link>
        </div>

        <ul className="nav-menu desktop">
          {LINKS.map(([href, label]) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>

        {open && (
          <ul className="nav-menu mobile">
            {LINKS.map(([href, label]) => (
              <li key={href} onClick={() => setOpen(false)}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
