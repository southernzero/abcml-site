"use client";

import React, { useState, useEffect } from "react";
import { Battery, Recycle, FlaskConical } from "lucide-react";

/* 공통 섹션 래퍼 */
const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="scroll-mt-24 py-16" aria-labelledby={`${id}-title`}>
    <div className="max-w-6xl mx-auto px-4">
      <h2 id={`${id}-title`} className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-sm md:text-base text-gray-600">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

/* 상단 네비게이션 */
const Nav = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="#home" className="font-semibold text-lg md:text-xl">Advanced Battery & Cathode Materials Lab (ABCML)</Link>
      <nav className="hidden md:flex gap-6 text-sm">
        <Link href="#overview" className="hover:opacity-70">연구소개</Link>
        <Link href="#research" className="hover:opacity-70">연구내용</Link>
        <Link href="#professor" className="hover:opacity-70">교수소개</Link>
        <Link href="#members" className="hover:opacity-70">구성원</Link>
        <Link href="#publications" className="hover:opacity-70">논문</Link>
        <Link href="#contact" className="hover:opacity-70">문의</Link>
      </nav>
      <Link href="#contact" className="md:inline-flex hidden rounded-xl border px-3 py-1.5 text-sm">지원 안내</Link>
    </div>
  </header>
);

/* 첫 화면 히어로 */
const Hero = () => (
  <div id="home" className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50" />
    <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">맞춤형 양극 소재 개발을 통한 전지 성능 혁신</h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            ABCML은 리튬이온전지, 소듐이온전지, 전고체전지 등 다양한 전지 시스템에 최적화된 맞춤형 양극 소재 개발을 수행하고 있습니다.
            소재 합성부터 전주기 리사이클링까지 산업 현장에 기여할 수 있는 융합 연구를 지향하고 있습니다.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="#overview" className="rounded-xl bg-black text-white px-4 py-2 text-sm">연구실 소개 보기</Link>
            <Link href="#contact" className="rounded-xl border px-4 py-2 text-sm">지원 문의</Link>
          </div>
        </div>
        <div className="aspect-[4/3] bg-white rounded-2xl border shadow-sm p-4 flex items-center justify-center">
          {/* 3단계에서 /abcml-logo.png 파일을 public 폴더에 넣습니다 */}
          <img src="/abcml-logo.png" alt="ABCML Logo" className="max-h-full max-w-full object-contain" />
        </div>
      </div>
    </div>
  </div>
);

/* 연구 카드 */
const ResearchCard = ({ title, body, icon: Icon }: any) => (
  <div className="rounded-2xl border p-5 shadow-sm bg-white flex flex-col items-start">
    {Icon && <Icon className="w-8 h-8 text-sky-600 mb-3" />}
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{body}</p>
  </div>
);

/* 교수 소개 */
const Professor = () => (
  <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
    <div className="rounded-2xl border overflow-hidden bg-white shadow-sm">
      {/* 3단계에서 /professor.png 파일을 public 폴더에 넣습니다 */}
      <img src="/professor.png" alt="Professor Nam-Yung Park" className="aspect-[3/4] object-cover w-full" />
      <div className="p-4 text-sm">
        <p className="font-semibold">박남영 교수</p>
        <p className="text-gray-600 mt-1">인하대학교 이차전지융합학과</p>
        <div className="mt-3 space-y-1">
          <p>E-mail nypark@inha.ac.kr</p>
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold">연구 및 교육</h3>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        저희 연구실은 다양한 전지 시스템의 근본적인 문제를 해결하기 위한 맞춤형 양극 소재 개발을 중심으로 연구를 수행하고 있습니다.
        프리미엄, 볼륨, 엔트리 시장 수요에 맞춤 대응할 수 있는 합성 플랫폼 기술을 기반으로, 산업 적용성과 지속 가능성을 동시에 추구하고 있습니다.
      </p>
      <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>입자 균열·구조 붕괴 억제를 위한 결정구조·형상 제어</li>
        <li>전고체전지용 양극 소재 개발</li>
        <li>폐배터리 리사이클링 및 업사이클링 기술</li>
      </ul>
      <div className="mt-6">
        <h4 className="font-semibold">학력</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
          <li>Ph.D. in Energy Engineering, Hanyang University (2018–2024)</li>
          <li>B.E. in Energy Engineering, Hanyang University (2014–2018)</li>
        </ul>
        <h4 className="font-semibold mt-4">경력</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
          <li>Assistant Professor, Inha University (2025–현재)</li>
          <li>Postdoctoral Researcher, Hanyang University (2024–2025)</li>
        </ul>
      </div>
    </div>
  </div>
);

/* 구성원 카드 */
const MemberCard = ({ name, role }: any) => (
  <div className="rounded-2xl border p-4 bg-white shadow-sm">
    <p className="font-medium">{name}</p>
    <p className="text-gray-600 text-sm mt-1">{role}</p>
  </div>
);

/* 논문 (JSON 파일에서 불러오기) */
function Publications() {
  const [year, setYear] = useState<string | null>(null);
  const [items, setItems] = useState<Record<string, any[]>>({});

  useEffect(() => {
    // 4단계에서 public/publications.json 파일을 넣습니다.
    fetch("/publications.json")
      .then(res => res.json())
      .then((data) => {
        setItems(data);
        const years = Object.keys(data);
        // 문자 비교 기준 최신 연도 선택(예: "2025"가 "2018-2024"보다 앞서게)
        const latest = years.sort((a,b)=> (a > b ? -1 : 1))[0] ?? null;
        setYear(latest);
      })
      .catch(() => setItems({}));
  }, []);

  if (!year) return <p className="text-sm text-gray-500">논문 로딩 중…</p>;

  const years = Object.keys(items);
  const filtered = items[year] ?? [];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm">연도 선택</span>
        <div className="flex gap-2">
          {years.map((y) => (
            <button key={y} onClick={() => setYear(y)}
              className={`px-3 py-1.5 rounded-xl border text-sm ${year===y ? "bg-black text-white":"bg-white"}`}>
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">제목</th>
              <th className="py-2 pr-4">저자</th>
              <th className="py-2 pr-4">저널</th>
              <th className="py-2">링크</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2 pr-4 font-medium">{p.title}</td>
                <td className="py-2 pr-4 text-gray-700">{p.authors}</td>
                <td className="py-2 pr-4">{p.journal}</td>
                <td className="py-2">
                  {p.link ? <a className="underline" href={p.link} target="_blank" rel="noreferrer">View</a> : "-"}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td className="py-6 text-gray-500" colSpan={4}>해당 연도 데이터가 없습니다.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* 하단 */
const Footer = () => (
  <footer className="mt-20 border-t">
    <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold">Advanced Battery & Cathode Materials Lab (ABCML)</p>
          <p className="mt-2">인하대학교 이차전지융합학과</p>
          <p className="mt-1">인천광역시 미추홀구 인하로 100</p>
        </div>
        <div>
          <p className="font-semibold">연락처</p>
          <ul className="mt-2 space-y-1">
            <li>이메일 nypark@inha.ac.kr</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">바로가기</p>
          <ul className="mt-2 space-y-1 underline">
            <li><Link href="#publications">논문</Link></li>
            <li><Link href="#members">구성원</Link></li>
            <li><Link href="#contact">지원 문의</Link></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-xs">© {new Date().getFullYear()} Advanced Battery & Cathode Materials Lab (ABCML)</p>
    </div>
  </footer>
);

export default function Page() {
  const research = [
    {
      title: "리튬·소듐이온전지 맞춤형 소재",
      body: "전구체 및 양극재 합성 기술을 바탕으로 고용량, 장수명, 고안정성을 동시에 갖춘 차세대 리튬·소듐이온전지용 양극 소재 기술을 개발하고 있습니다.",
      icon: Battery
    },
    {
      title: "전고체전지용 양극 소재",
      body: "차세대 전고체전지 시스템에 맞춤화 된 양극 소재 기술을 개발하고 있습니다.",
      icon: FlaskConical
    },
    {
      title: "폐배터리 리사이클링 및 업사이클링",
      body: "양극 소재의 합성-사용-열화-회수-재합성까지 이어지는 전주기 연구를 통해 경제성과 지속 가능성을 동시에 추구하고 있습니다.",
      icon: Recycle
    }
  ];

  const members = [
    { name: "모집중", role: "박사후연구원" },
    { name: "모집중", role: "박사과정" },
    { name: "모집중", role: "석사과정" },
    { name: "모집중", role: "학부연구생" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Hero />

      <Section id="overview" title="연구실 소개" subtitle="맞춤형 양극 소재 플랫폼 기술 구축과 전주기 연구">
        <div className="prose max-w-none prose-slate">
          <p>
            본 연구실은 다양한 전지 시스템에서 발생하는 문제를 근본적으로 해결하기 위한 맞춤형 양극 소재 개발에 주력하고 있습니다.
            합성–분석–응용이 연계된 융합 연구 체계를 바탕으로 산업 현장과 환경 문제 해결에 기여하고 있습니다.
          </p>
        </div>
      </Section>

      <Section id="research" title="연구내용">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {research.map((r, i) => <ResearchCard key={i} title={r.title} body={r.body} icon={r.icon} />)}
        </div>
      </Section>

      <Section id="professor" title="교수 소개">
        <Professor />
      </Section>

      <Section id="members" title="구성원">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {members.map((m, i) => <MemberCard key={i} {...m} />)}
        </div>
      </Section>

      <Section id="publications" title="논문">
        <Publications />
      </Section>

      <Section id="contact" title="문의">
        <div className="rounded-2xl border bg-white shadow-sm p-5">
          <h3 className="font-semibold">지원 및 방문</h3>
          <p className="mt-2 text-sm text-gray-700">입학을 희망하거나 연구 협력을 원하시면 이메일로 문의해 주세요.</p>
          <ul className="mt-4 text-sm space-y-1">
            <li>이메일 nypark@inha.ac.kr</li>
            <li>주소 인천광역시 미추홀구 인하로 100 인하대학교</li>
          </ul>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
