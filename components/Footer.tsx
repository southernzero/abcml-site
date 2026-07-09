'use client';
export default function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-white">
      <div className="max-w-6xl mx-auto px-5 py-12 text-sm text-muted">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/abcml-logo-compact.png" alt="ABCML" className="h-8 w-auto" />
            <p className="mt-3">Advanced Battery &amp; Cathode Materials Lab</p>
            <p className="mt-1">인하대학교 이차전지융합학과 · 화학공학과</p>
            <p className="mt-1">인천 미추홀구 인하로 100, 인하대학교 2북관 591호</p>
          </div>
          <div>
            <p className="eyebrow" style={{ color: 'var(--color-navy)' }}>Contact</p>
            <ul className="mt-4 space-y-1.5">
              <li><span className="mono text-muted/70 mr-2">E</span> nypark@inha.ac.kr</li>
              <li><span className="mono text-muted/70 mr-2">T</span> +82 32-860-8821</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow" style={{ color: 'var(--color-navy)' }}>Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-1.5">
              {[
                ['/research', 'Research'],
                ['/professor', 'Professor'],
                ['/members', 'Members'],
                ['/publications', 'Publications'],
                ['/gallery', 'Gallery'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-teal transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mono mt-10 text-xs text-muted/80">
          © {new Date().getFullYear()} ABCML · Inha University
        </p>
      </div>
    </footer>
  );
}
