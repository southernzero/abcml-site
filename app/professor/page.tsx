'use client';
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

export default function ProfessorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <Nav />
      <Section title="Professor">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="rounded-2xl border overflow-hidden bg-white shadow-sm">
            <img
              src="/profile.jpg"
              alt="Professor Nam-Yung Park"
              className="aspect-[3/4] object-cover w-full"
            />
            <div className="p-4 text-sm">
              <p className="font-semibold">박남영 (Nam-Yung Park) 교수</p>
              <p className="text-gray-600 mt-1">인하대학교 이차전지융합학과 & 화학공학과</p>
              <div className="mt-3 space-y-1">
                <p>E-mail nypark@inha.ac.kr</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Research Interest</h3>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              다양한 전지 시스템의 근본적인 문제를 해결하기 위한 고성능 전지 소재 개발을 중심으로 연구를 수행하고 있습니다.
              프리미엄, 볼륨, 엔트리 시장 수요에 맞춤 대응할 수 있는 소재 합성 기술을 기반으로, 산업 적용성과 지속 가능성을 동시에 추구하고 있습니다.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>고성능 양극 소재 개발을 위한 결정구조·입자형상 제어 기술</li>
              <li>전고체전지 맞춤형 양극 소재 개발</li>
              <li>폐배터리 리사이클링 및 소재 업사이클링 기술</li>
<p className="mt-4 text-sm text-gray-700">
  {' '}
  <a
    href="https://scholar.google.co.kr/citations?user=tlvfJbMAAAAJ"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Google Scholar
    
  </a>
</p>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold">Education</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                <li>Ph.D. in Energy Engineering, Hanyang University (2018–2024)</li>
                <li>B.E. in Energy Engineering, Hanyang University (2014–2018)</li>
              </ul>
              <h4 className="font-semibold mt-4">Experience</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mt-2">
                <li>Assistant Professor, Inha University (2025–현재)</li>
                <li>Postdoctoral Researcher, Hanyang University (2024–2025)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
