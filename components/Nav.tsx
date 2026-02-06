'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
<nav className="nav">
  <div className="nav-inner">
      {/* 로고 */}
      <div className="nav-logo">
        <Link href="/">Advanced Battery & Cathode Materials Lab</Link>
      </div>

      {/* 데스크탑 메뉴 */}
      <ul className="nav-menu desktop">
        <li><Link href="/research">Research</Link></li>
        <li><Link href="/professor">Professor</Link></li>
        <li><Link href="/members">Members</Link></li>
        <li><Link href="/publications">Publications</Link></li>
        <li><Link href="/#contact" className="hover:underline">
  Contact
</Link></li>
      </ul>

      {/* 모바일 햄버거 */}
      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* 모바일 드롭다운 */}
      {open && (
        <ul className="nav-menu mobile">
          <li onClick={() => setOpen(false)}><Link href="/research">Research</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/professor">Professor</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/members">Members</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/publications">Publications</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/contact">Contact</Link></li>
        </ul>
      )}
     </div>
</nav>
  );
}
