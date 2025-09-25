'use client';
export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-semibold">Advanced Battery & Cathode Materials Lab</p>
            <p className="mt-2">인하대학교 이차전지융합학과 & 화학공학과</p>
            <p className="mt-1">인천 미추홀구 인하로 100 인하대학교 2북관 585호</p>
          </div>
          <div>
            <p className="font-semibold">연락처</p>
            <ul className="mt-2 space-y-1">
              <li>E-mail: nypark@inha.ac.kr</li>
              <li>TEL: +82) 32-860-8821</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">바로가기</p>
            <ul className="mt-2 space-y-1 underline">
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/professor">Professor</Link></li>
              <li><Link href="/members">Member</Link></li>
              <li><Link href="/publications">Publication</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} Advanced Battery & Cathode Materials Lab</p>
      </div>
    </footer>
  );
}