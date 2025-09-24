'use client';
import React, { useMemo, useState } from "react";
import { Battery, Recycle, FlaskConical } from "lucide-react";

// ---- Advanced Battery & Cathode Materials Lab (ABCML), Inha University ----
// TailwindCSS is assumed in the environment.

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Section = ({ id, title, subtitle, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24 py-16" aria-labelledby={`${id}-title`}>
    <div className="max-w-6xl mx-auto px-4">
      <h2
        id={`${id}-title`}
        className="text-2xl md:text-3xl font-bold tracking-tight"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
      {children}
    </div>
  </section>
);

const Nav = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="#home" className="font-semibold text-lg md:text-xl">Advanced Battery & Cathode Materials Lab (ABCML)</a>
      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#overview" className="hover:opacity-70">연구소개</a>
        <a href="#research" className="hover:opacity-70">연구내용</a>
        <a href="#professor" className="hover:opacity-70">교수소개</a>
        <a href="#members" className="hover:opacity-70">구성원</a>
        <a href="#publications" className="hover:opacity-70">논문</a>
        <a href="#contact" className="hover:opacity-70">문의</a>
      </nav>
      <a href="#contact" className="md:inline-flex hidden rounded-xl border px-3 py-1.5 text-sm">지원 안내</a>
    </div>
  </header>
);

const Hero = () => (
  <div id="home" className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50" />
    <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">맞춤형 양극 소재 개발을 통한 전지 성능 혁신</h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">ABCML은 리튬이온전지, 소듐이온전지, 전고체전지 등 다양한 전지 시스템에 최적화된 맞춤형 양극 소재 개발을 수행하고 있습니다. 소재 합성부터 전주기 리사이클링까지 산업 현장에 기여할 수 있는 융합 연구를 지향하고 있습니다.</p>
          <div className="mt-6 flex gap-3">
            <a href="#overview" className="rounded-xl bg-black text-white px-4 py-2 text-sm">연구실 소개 보기</a>
            <a href="#contact" className="rounded-xl border px-4 py-2 text-sm">지원 문의</a>
          </div>
        </div>
        <div className="aspect-[4/3] bg-white rounded-2xl border shadow-sm p-4 flex items-center justify-center">
          <img src="abcml-logo.png" alt="ABCML Logo" className="max-h-full max-w-full object-contain" />
        </div>
      </div>
    </div>
  </div>
);
type ResearchCardProps = {
  title: string;
  body: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
const ResearchCard = ({ title, body, icon: Icon }: ResearchCardProps) => (
  <div className="rounded-2xl border p-5 shadow-sm bg-white flex flex-col items-start">
    {Icon && <Icon className="w-8 h-8 text-sky-600 mb-3" />}
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-gray-600">{body}</p>
  </div>
);

const Professor = () => (
  <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
    <div className="rounded-2xl border overflow-hidden bg-white shadow-sm">
      <img src="/profile.jpg" alt="Professor Nam-Yung Park" className="aspect-[3/4] object-cover w-full" />
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
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">저희 연구실은 다양한 전지 시스템의 근본적인 문제를 해결하기 위한 맞춤형 양극 소재 개발을 중심으로 연구를 수행하고 있습니다. 프리미엄, 볼륨, 엔트리 시장 수요에 맞춤 대응할 수 있는 합성 플랫폼 기술을 기반으로, 산업 적용성과 지속 가능성을 동시에 추구하고 있습니다.</p>
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
type MemberCardProps = {
  name: string;
  role: string;
};
const MemberCard = ({ name, role }: MemberCardProps) => (
  <div className="rounded-2xl border p-4 bg-white shadow-sm">
    <p className="font-medium">{name}</p>
    <p className="text-gray-600 text-sm mt-1">{role}</p>
  </div>
);

type Publication = {
  title: string;
  authors: string;
  journal: string;
  link: string;
};

const items: Record<string, Publication[]> = {
      "2025": [
        {
    "title": "Zero-strain Mn-rich layered cathode for sustainable and high-energy next-generation batteries",
    "authors": "Park Geon-Tae/Nam-Yung Park/Ryu Ji-Hyun/Sohn Sung-June/Yu Tae-Yeon/Kim Myoung-Chan/Baiju Sourav/Kaghazchi Payam/Yoon Chong S./Sun Yang-Kook",
    "journal": "NATURE ENERGY",
    "link": "https://doi.org/10.1038/s41560-025-01852-3"
  },
  {
    "title": "Ni-rich cathode materials enabled by cracked-surface protection strategy for high-energy lithium batteries",
    "authors": "Park Geon-Tae/Yoon Jung-In/Kim Gwang-Ho/Nam-Yung Park/Park Byung-Chun/Sun Yang-Kook",
    "journal": "MATERIALS SCIENCE & ENGINEERING R-REPORTS",
    "link": "https://doi.org/10.1016/j.mser.2025.100945"
  },
  {
    "title": "Scalable shell doping strategy for enhancing the stability of Ni-rich cathode materials",
    "authors": "Myoung-Chan Kim/Byung-Chun Park/Nam-Yung Park/Min-su Kim/Kyu-Moon Kim/Jae-Ho Kim/Eun-Jung Kim/Geon-Tae Park/Yang-Kook Sun",
    "journal": "ENERGY STORAGE MATERIALS",
    "link": "https://doi.org/10.1016/j.ensm.2025.104252"
  },
  {
    "title": "Structural Unpredictability of a Cobalt-Free Layered Cathode and Its Mitigation for Producing Reliable, Sustainable Batteries",
    "authors": "Park Geon-Tae/Kim Myoung-Chan/Kim Min-Su/Noh Tae-Chong/Ryu Ji-Hyun/Nam-Yung Park/Sun Yang-Kook",
    "journal": "ADVANCED ENERGY MATERIALS",
    "link": "https://doi.org/10.1002/aenm.202404593"
  },
  {
    "title": "Tuning the Lithium Diffusion Kinetics in Co-Free Layered Cathodes for High-Performance All-Solid-State Batteries",
    "authors": "Nam-Yung Park/Yu Tae-Yeon/Kim Hun/Lee In-Su/Lee Han-Uk/Kim Keun-Hee/Cho Woosuk/Jung Hun-Gi/Chung Kyung Yoon/Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://doi.org/10.1021/acsenergylett.5c00961"
  },
  {
    "title": "High-energy, long-life Ni-rich cathode materials with columnar structures for all-solid-state batteries",
    "authors": "Nam-Yung Park/Lee Han-Uk/Yu Tae-Yeon/Lee In-Su/Kim Hun/Park Sung-Min/Jung Hun-Gi/Jung Yun-Chae/Sun Yang-Kook",
    "journal": "NATURE ENERGY",
    "link": "https://doi.org/10.1038/s41560-025-01726-8"
  }
      ],
      "2018-2024": [
          {
    "title": "Nano-rods in Ni-rich layered cathodes for practical batteries",
    "authors": "Nam-Yung Park/Park Geon-Tae/Ryu Hoon-Hee/Sun H. Hohyun/Hwang Jang-Yeon/Sun Yang-Kook",
    "journal": "CHEMICAL SOCIETY REVIEWS",
    "link": "https://pubs.rsc.org/en/content/articlehtml/2007/7y/d3cs01110k"
  },
  {
    "title": "Introducing Co Nanoshells onto Ni-Rich Cathode Materials for High-Rate Long-Life Li-Ion Batteries",
    "authors": "Han Sang-Mun/Park Geon-Tae/Kim Dong-Hwi/Seo Min-Gyu/Nam-Yung Park/Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/10.1021/acsenergylett.4c02638"
  },
  {
    "title": "Tailoring Primary Particle Size Distribution to Suppress Microcracks in Ni-Rich Cathodes via Controlled Grain Coarsening",
    "authors": "Nam-Yung Park/Han Sang-Mun/Ryu Ji-Hyun/Kim Myoung-Chan/Yoon Jung-In/Kim Jae-Ho/Park Geon-Tae/Frerichs Joop Enno/Erk Christoph/Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/full/10.1021/acsenergylett.4c01397"
  },
  {
    "title": "Aluminum-distribution-dependent microstructural evolution of NCA cathodes: Is aluminum homogeneity really favorable?",
    "authors": "Park Geon-Tae/Ryu Ji-Hyun/Kim Jae-Ho/Sun H. Hohyun/Dhanbee Emma Suh/Han Sang -Mun/Nam-Yung Park/Sun Yang -Kook",
    "journal": "ENERGY STORAGE MATERIALS",
    "link": "https://www.sciencedirect.com/science/article/pii/S2405829724003234"
  },
  {
    "title": "Unraveling the New Role of Manganese in Nano and Microstructural Engineering of Ni-Rich Layered Cathode for Advanced Lithium-Ion Batteries",
    "authors": "Park Geon-Tae/Kim Su-Bin/Yoon Jung-In/Nam-Yung Park/Kim Myoung-Chan/Han Sang-Mun/Kim Dong-Hwi/Kim Min-Su/Sun Yang-Kook",
    "journal": "ADVANCED ENERGY MATERIALS",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202400130"
  },
  {
    "title": "Mechanism Behind the Loss of Fast Charging Capability in Nickel-Rich Cathode Materials",
    "authors": "Nam-Yung Park/Kim Myoung-Chan/Han Sang-Mun/Park Geon-Tae/Kim Dong-Hwi/Kim Min-Su/Sun Yang-Kook",
    "journal": "ANGEWANDTE CHEMIE-INTERNATIONAL EDITION",
    "link": "https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202319707"
  },
  {
    "title": "Doping Strategy in Developing Ni-Rich Cathodes for High-Performance Lithium-Ion Batteries",
    "authors": "Lee Soo-Been/Nam-Yung Park/Park Geon-Tae/Kim Un-Hyuck/Sohn Sung-June/Kang Min-Seok/Ribas Rogerio M./Monteiro Robson S./Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/full/10.1021/acsenergylett.3c02759"
  },
  {
    "title": "Forming Robust and Highly Li-Ion Conductive Interfaces in High-Performance Lithium Metal Batteries Using Chloroethylene Carbonate Additive",
    "authors": "Kim Hun/Lee Su-Hyun/Nam-Yung Park/Kim Jae-Min/Hwang Jang-Yeon/Sun Yang-Kook",
    "journal": "ADVANCED ENERGY AND SUSTAINABILITY RESEARCH",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aesr.202300151"
  },
  {
    "title": "Intergranular Shielding for Ultrafine-Grained Mo-Doped Ni-Rich Li[Ni0.96Co0.04]O2 Cathode for Li-Ion Batteries with High Energy Density and Long Life",
    "authors": "Park Geon-Tae/Kim Su-Bin/Namkoong Been/Ryu Ji-Hyun/Yoon Jung-In/Nam-Yung Park/Kim Myoung-Chan/Han Sang-Mun/Maglia Filippo/Sun Yang-Kook",
    "journal": "ANGEWANDTE CHEMIE-INTERNATIONAL EDITION",
    "link": "https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202314480"
  },
  {
    "title": "A New Ternary Co-Free Layered Cathode, Li[Ni1-x-yTixAly]O2, for High-Energy Lithium-Ion Batteries",
    "authors": "Kim Hun/Yoon Chong S./Sun Yang-Kook/Park Geon-Tae/Kim Su-Bin/Namkoong Been/Nam-Yung Park",
    "journal": "MATERIALS TODAY",
    "link": "https://www.sciencedirect.com/science/article/pii/S1369702123003528"
  },
  {
    "title": "Mechanism of Doping with High-Valence Elements for Developing Ni-Rich Cathode Materials",
    "authors": "Nam-Yung Park/Kim Su-Bin/Kim Myoung-Chan/Han Sang-Mun/Kim Dong-Hwi/Kim Min-Su/Sun Yang-Kook",
    "journal": "ADVANCED ENERGY MATERIALS",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202301530"
  },
  {
    "title": "Multifunctional Doping Strategy to Develop High-Performance Ni-Rich Cathode Material",
    "authors": "Nam-Yung Park/Cho Gyeil/Kim Su-Bin/Sun Yang-Kook",
    "journal": "ADVANCED ENERGY MATERIALS",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202204291"
  },
  {
    "title": "Long-Lasting Ni-Rich NCMA Cathodes via Simultaneous Microstructural Refinement and Surface Modification",
    "authors": "Ryu Hoon-Hee/Lim Hyung-Woo/Kang Gyeong-Cheol/Nam-Yung Park/Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/10.1021/acsenergylett.3c00083"
  },
  {
    "title": "High-Energy-Density Li-Ion Battery Reaching Full Charge in 12 min",
    "authors": "Kim Un-Hyuck/Lee Soo-Been/Nam-Yung Park/Kim Suk Jun/Yoon Chong Seung/Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/10.1021/acsenergylett.2c02032"
  },
  {
    "title": "Degradation Mechanism of Ni-Rich Cathode Materials: Focusing on Particle Interior",
    "authors": "Nam-Yung Park/Park Geon-Tae/Kim Su-Bin/Jung Wangmo/Park Byung-Chun/Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/full/10.1021/acsenergylett.2c01272"
  },
  {
    "title": "High-Energy Ni-Rich Cathode Materials for Long-Range and Long-Life Electric Vehicles",
    "authors": "Nam-Yung Park/Namkoong Been/Park Geon-Tae/Shin Ji-Yong/Beierling Thorsten/Yoon Chong S./Sun Yang-Kook",
    "journal": "ADVANCED ENERGY MATERIALS",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202200615"
  },
  {
    "title": "High-Energy Cathodes via Precision Microstructure Tailoring for Next-Generation Electric Vehicles",
    "authors": "Nam-Yung Park/Ryu Hoon-Hee/Kuo Liang-Yin/Kaghazchi Payam/Yoon Chong S./Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/full/10.1021/acsenergylett.1c02281"
  },
  {
    "title": "High-performance Ni-rich Li[Ni0.9-xCo0.1Alx]O2 cathodes via multi-stage microstructural tailoring from hydroxide precursor to the lithiated oxide",
    "authors": "Park Geon-Tae/Nam-Yung Park/Noh Tae-Chong/Namkoong Been/Ryu Hoon-Hee/Shin Ji-Yong/Beierling Thorsten/Yoon Chong S./Sun Yang-Kook",
    "journal": "ENERGY & ENVIRONMENTAL SCIENCE",
    "link": "https://pubs.rsc.org/en/content/articlehtml/2021/xx/d1ee01773j"
  },
  {
    "title": "Optimized Ni-Rich NCMA Cathode for Electric Vehicle Batteries",
    "authors": "Nam-Yung Park/Ryu Hoon-Hee/Park Geon-Tae/Noh Tae-Chong/Sun Yang-Kook",
    "journal": "ADVANCED ENERGY MATERIALS",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202003767"
  },
  {
    "title": "Microstrain Alleviation in High-Energy Ni-Rich ma NCMA Cathode for Long Battery Life",
    "authors": "Nam-Yung Park/Ryu Hoon-Hee/Noh Tae-Chong/Kang Gyeong-Cheol/Maglia Filippo/Kim Sung-Jin/Yoon Chong S./Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/full/10.1021/acsenergylett.0c02281"
  },
  {
    "title": "High-Energy W-Doped Li[Ni0.95Co0.04Al0.01]O2 Cathodes for Next-Generation Electric Vehicles",
    "authors": "Nam-Yung Park/Kim Un-Hyuck/Park Geon-Tae/Kim Hun/Yoon Chong S./Sun Yang-Kook",
    "journal": "ENERGY STORAGE MATERIALS",
    "link": "https://www.sciencedirect.com/science/article/pii/S2405829720303238"
  },
  {
    "title": "New Class of Ni-Rich Cathode Materials Li[NixCoyB1-x-y]O2 for Next Lithium Batteries",
    "authors": "Nam-Yung Park/Ryu Hoon-Hee/Yoon Dae Ro/Kim Un-Hyuck/Yoon Chong S./Sun Yang-Kook",
    "journal": "ADVANCED ENERGY MATERIALS",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aenm.202000495"
  },
  {
    "title": "A highly stabilized Ni-rich NCA cathode for high-energy lithium-ion batteries",
    "authors": "Ryu Hoon-Hee/Nam-Yung Park/Seo Jeong Hyun/Yu Young-Sang/Sharma Monika/Muecke Robert/Kaghazchi Payam/Yoon Chong S./Sun Yang-Kook",
    "journal": "MATERIALS TODAY",
    "link": "https://www.sciencedirect.com/science/article/pii/S1369702120300365"
  },
  {
    "title": "Capacity Fading of Ni-Rich NCA Cathodes: Effect of Microcracking Extent",
    "authors": "Nam Gyeong Won/Nam-Yung Park/Park Kang-Joon/Yang Jihui/Jun Liu/Yoon Chong S./Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/full/10.1021/acsenergylett.9b02302"
  },
  {
    "title": "Tungsten doping for stabilization of Li[Ni0.90Co0.05Mn0.05]O2 cathode for Li-ion battery at high voltage",
    "authors": "Park Geon-Tae/Ryu Hoon-Hee/Nam-Yung Park/Yoon Chong S./Sun Yang-Kook",
    "journal": "JOURNAL OF POWER SOURCES",
    "link": "https://www.sciencedirect.com/science/article/pii/S0378775319312352"
  },
  {
    "title": "ICAC 2018: The First International Conference Focused on NCM & NCA Cathode Materials for Lithium Ion Batteries",
    "authors": "Kwak Won-Jin/Nam-Yung Park/Sun Yang-Kook",
    "journal": "ACS ENERGY LETTERS",
    "link": "https://pubs.acs.org/doi/full/10.1021/acsenergylett.8b01926"
  }

      ],
  };
export function PublicationsSection() {
  const years = Object.keys(items);
  const [year, setYear] = useState<string>(years[0]); // ✅ 선택된 연도 상태

  const filtered = items[year] ?? [];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm">연도 선택</span>
        <div className="flex gap-2">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-3 py-1.5 rounded-xl border text-sm ${
                year === y ? "bg-black text-white" : "bg-white"
              }`}
            >
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
                  <a
                    className="underline"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


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
            <li><a href="#publications">논문</a></li>
            <li><a href="#members">구성원</a></li>
            <li><a href="#contact">지원 문의</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-xs">© {new Date().getFullYear()} Advanced Battery & Cathode Materials Lab (ABCML)</p>
    </div>
  </footer>
);

export default function LabSite() {
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
            본 연구실은 다양한 전지 시스템에서 발생하는 문제를 근본적으로 해결하기 위한 맞춤형 양극 소재 개발에 주력하고 있습니다. 합성–분석–응용이 연계된 융합 연구 체계를 바탕으로 산업 현장과 환경 문제 해결에 기여하고 있습니다.
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
       <PublicationsSection />
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
