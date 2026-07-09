import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

const INTERESTS = [
  '고성능 양극 소재 개발을 위한 결정구조·입자형상 제어 기술',
  '전고체전지 맞춤형 양극 소재 개발',
  '폐배터리 리사이클링 및 소재 업사이클링 기술',
];

const EDUCATION = [
  ['2018–2024', 'Ph.D. in Energy Engineering', 'Hanyang University'],
  ['2014–2018', 'B.E. in Energy Engineering', 'Hanyang University'],
];

const EXPERIENCE = [
  ['2025–present', 'Assistant Professor', 'Inha University'],
  ['2024–2025', 'Postdoctoral Researcher', 'Hanyang University'],
];

export default function ProfessorPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Section title="박남영 · Nam-Yung Park" eyebrow="Principal Investigator">
        <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
          {/* 프로필 카드 */}
          <div className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="박남영 교수"
              className="aspect-[3/4] object-cover w-full"
            />
            <div className="p-5 border-t border-line">
              <p className="font-semibold text-navy">박남영 (Nam-Yung Park)</p>
              <p className="text-sm text-muted mt-1 leading-snug">
                인하대학교 이차전지융합학과 · 화학공학과 조교수
              </p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="mono text-[0.68rem] uppercase tracking-wider text-muted pt-0.5 w-14 shrink-0">Email</dt>
                  <dd><a href="mailto:nypark@inha.ac.kr" className="text-teal hover:underline">nypark@inha.ac.kr</a></dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mono text-[0.68rem] uppercase tracking-wider text-muted pt-0.5 w-14 shrink-0">Scholar</dt>
                  <dd>
                    <a href="https://scholar.google.co.kr/citations?user=tlvfJbMAAAAJ" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                      Google Scholar ↗
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* 본문 */}
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-3">Research interest</p>
              <p className="text-[0.98rem] leading-relaxed text-navy max-w-2xl">
                다양한 전지 시스템의 근본적인 문제를 해결하기 위한 고성능 전지 소재 개발을 중심으로 연구를 수행합니다.
                프리미엄·볼륨·엔트리 시장 수요에 맞춤 대응할 수 있는 소재 합성 기술을 기반으로, 산업 적용성과
                지속가능성을 동시에 추구합니다.
              </p>
              <ul className="mt-5 space-y-2.5">
                {INTERESTS.map((t) => (
                  <li key={t} className="flex gap-3 text-[0.95rem] text-muted">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              <TimelineBlock label="Education" rows={EDUCATION} />
              <TimelineBlock label="Experience" rows={EXPERIENCE} />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

function TimelineBlock({ label, rows }: { label: string; rows: string[][] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{label}</p>
      <ul className="space-y-4">
        {rows.map(([years, role, org]) => (
          <li key={role} className="border-l-2 border-line pl-4">
            <p className="mono text-[0.7rem] uppercase tracking-wider text-teal">{years}</p>
            <p className="font-medium text-navy mt-0.5">{role}</p>
            <p className="text-sm text-muted">{org}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
