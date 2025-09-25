'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg md:text-xl">
          Advanced Battery & Cathode Materials Lab
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className={isActive('/') ? 'opacity-60' : 'hover:opacity-70'}>Home</Link>
          <Link href="/research" className={isActive('/research') ? 'opacity-60' : 'hover:opacity-70'}>Research</Link>
          <Link href="/professor" className={isActive('/professor') ? 'opacity-60' : 'hover:opacity-70'}>Professor</Link>
          <Link href="/members" className={isActive('/members') ? 'opacity-60' : 'hover:opacity-70'}>Member</Link>
          <Link href="/publications" className={isActive('/publications') ? 'opacity-60' : 'hover:opacity-70'}>Publication</Link>
          <Link href="/gallery" className={isActive('/gallery') ? 'opacity-60' : 'hover:opacity-70'}>Gallery</Link>
        </nav>
        <a href="/#contact" className="md:inline-flex hidden rounded-xl border px-3 py-1.5 text-sm">문의</a>
      </div>
    </header>
  );
}