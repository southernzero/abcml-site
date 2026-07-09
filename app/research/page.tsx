// app/research/page.tsx
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import ResearchTabsClient, { ResearchTopic } from '@/components/ResearchTabsClient';

const topics: ResearchTopic[] = [
  {
    slug: 'li-na-custom-cathode',
    title: 'High-Performance Materials for Li- & Na-Ion Batteries',
    cover: '/research/li-na/cover.jpg',
    sections: [
      {
        src: '/research/li-na/01.jpg',
        title: '양극재 결정 구조 및 입자 형상 제어 (Structural Engineering of Cathode Materials)',
        text: {
          ko: '고성능 전지 구현을 위해 양극재의 결정 구조와 입자 형상을 정밀하게 제어하는 연구를 수행하고 있습니다. 층상구조, 스피넬, 락솔트 등 다양한 결정 구조를 조절하고, 1차 및 2차 입자의 크기·형상·배향을 최적화하여 전기화학적 안정성과 기계적 안정성을 높이고자 합니다. 이를 통해 충·방전 과정에서 발생하는 균열, 계면 반응, 구조적 붕괴를 최소화하고, 장수명 및 고안전성 전지 구현에 기여합니다.',
          en: 'We tailor crystal structure (layered, spinel, rocksalt) and primary/secondary particle morphology to enhance electrochemical and mechanical stability, minimizing cracking and degradation during cycling.',
        },
      },
      {
        src: '/research/li-na/02.jpg',
        title: '양극재 성능 향상 메커니즘 분석 (Mechanistic Analysis of Cathode Materials)',
        text: {
          ko: '전지 성능 향상을 위해 소재의 구조적·화학적 변화 메커니즘을 심층적으로 규명하고 있습니다. 전자현미경, X-선 분광 및 이미징, 전기화학 분석 기법을 활용하여 충·방전 과정에서 나타나는 상전이, 표면 반응, 구조 변화 등을 분석합니다. 다각적인 분석을 통해 소재의 열화 원인을 규명하고, 이를 바탕으로 성능을 향상 시킬 수 있는 소재 개발 전략을 탐구합니다.',
          en: 'Using electron microscopy, X-ray spectroscopy/imaging, and electrochemical analysis, we resolve phase transitions, surface reactions, and degradation pathways to guide material design.',
        },
      },
      {
        src: '/research/li-na/03.jpg',
        title: '차세대 어플리케이션 맞춤형 전지 소재 개발 (Battery Materials for Next-Generation Technologies)',
        text: {
          ko: 'EV 및 ESS와 같은 상용화된 전지 시스템에 국한되지 않고, 휴머노이드 로봇, 도심항공교통(UAM), 전기식 수직이착륙기(eVTOL)와 같은 차세대 응용 분야의 요구에 맞춘 맞춤형 양극 소재 개발에 집중하고 있습니다. 이러한 응용 분야는 고출력·고안전성·경량화·장수명 등 기존 전지와는 차별화된 특성을 요구합니다. 이를 충족하기 위해 고출력 특성을 강화한 소재, 극한 조건에서도 안정적인 구조를 유지하는 소재, 그리고 에너지 밀도와 기계적 신뢰성을 동시에 확보할 수 있는 소재를 설계하고 있습니다. 나아가, 응용별 요구 조건(예: 휴머노이드의 휴대성과 반복 충방전 내구성, eVTOL/UAM의 고출력 및 안전성)을 반영하여 산업 현장에 직접 기여할 수 있는 혁신적 전지 소재 솔루션을 제시합니다.',
          en: 'Beyond EVs and ESS, we design cathodes for humanoid robots, urban air mobility (UAM), and eVTOL — balancing high power, safety, light weight, and long cycle life for real-world deployment.',
        },
      },
    ],
  },
  {
    slug: 'solid-state-cathode',
    title: 'Materials for All-Solid-State Batteries',
    cover: '/research/solid/cover.jpg',
    sections: [
      { src: '/research/solid/01.jpg', 
        title: '전고체전지 맞춤형 양극 소재 입자 형상 제어 (Structural Engineering of Cathodes for ASSB)', 
        text: { ko: '전고체전지 시스템에서 양극재는 충방전 과정에서의 비등방성 격자 팽창과 미세균열로 인해 전극-전해질 간 이온 전도 경로가 단절되는 문제가 발생합니다. 본 연구실은 1차 입자의 막대형(radially aligned rod-type) 형상 제어 전략을 활용하여, 전고체전지에서 발생하는 내부 입자 고립과 용량 저하를 억제하는 연구를 수행하고 있습니다. 이러한 미세구조 최적화는 장수명 ASSB 구현의 핵심 열쇠입니다 .', 
          en: 'We engineer radially aligned rod-type primary particles via Nb doping to suppress microcracking and capacity fading in all-solid-state batteries (ASSBs).' } },
      
        { src: '/research/solid/02.jpg', 
          title: '양극/전해질 계면 안정화 연구 (Cathode–Electrolyte Interfacial Stabilization)', 
          text: { ko: '전고체전지에서 양극재와 황화물계 고체전해질의 계면은 화학적/전기화학적으로 불안정하여, 층상 구조가 락솔트 구조로 재구성되거나 전해질이 분해되는 부반응이 발생합니다. 이를 억제하기 위해, 양극 표면 코팅을 적용하여 계면에서의 부반응을 억제하고 Li⁺ 확산을 촉진하는 연구를 수행합니다. 이를 통해 계면 저항 상승을 최소화하고, 전극-전해질 간 안정적 접촉을 유지하는 것을 목표로 합니다 .', 
            en: 'Surface modification suppresses parasitic reactions and the layered-to-rocksalt transition at the cathode–sulfide-electrolyte interface while promoting Li⁺ diffusion and stable contact.' } },
      
            { src: '/research/solid/03.jpg', 
        title: '파우치타입 고성능 전고체 전지 구현 (High-Performance Pouch-Type ASSBs)', 
        text: { ko: '실험실 수준을 넘어 실제 적용성을 검증하기 위해, 건식 전극 공정(dry electrode fabrication)과 고로딩(high-loading) 조건을 적용한 파우치셀 제작 연구를 수행합니다.', 
        en: 'We validate scalability with dry-processed, high-loading pouch-type all-solid-state cells for high-energy, safe ASSBs.' } },
    ],
  },
  {
    slug: 'recycling-upcycling',
    title: 'Recycling & Upcycling of Battery Materials',
    cover: '/research/recycle/cover.jpg',
    sections: [
      { src: '/research/recycle/01.jpg', 
        title: '이차전지 리사이클링 공정 연구', 
        text: { ko: '사용 후 배터리에서 유가 금속을 효율적으로 회수하기 위한 리사이클링 공정을 연구합니다. 친환경 습식 제련(hydrometallurgy) 및 건식 제련(pyrometallurgy) 공정뿐만 아니라, 전해 침전, 용매 추출 등 다양한 공정을 활용하여 니켈, 코발트, 망간, 리튬 등 핵심 금속을 고효율·저에너지 방식으로 회수하는 전략을 개발합니다. 이를 통해 차세대 전지 산업의 지속가능한 자원순환 체계를 구축하는 데 기여합니다.', 
          en: 'We recover Ni, Co, Mn, and Li from spent batteries at high efficiency via hydro-/pyrometallurgy, solvent extraction, and low-energy separation — building a circular economy.' } },
      
          { src: '/research/recycle/02.jpg', 
            title: '회수 금속 용액을 이용한 양극 소재 재합성', 
            text: { ko: '리사이클링 공정을 통해 얻어진 금속 용액을 활용하여 Ni-rich 계열 양극재 등 고성능 소재를 재합성하는 연구를 수행합니다. 회수 금속의 불순물 제어, 조성 최적화, 그리고 수산화물 전구체 합성을 통한 고품질 양극재 제조 기술을 개발하여, 회수 자원이 신규 자원과 동등한 수준의 성능을 발휘할 수 있도록 합니다.', 
              en: 'From recovered metal solutions we resynthesize Ni-rich cathodes that match virgin-material performance through impurity control and precursor synthesis.' } },
      
              { src: '/research/recycle/03.jpg', 
                title: '열화된 양극 소재의 Direct Recycling 및 Upcycling', 
                text: { ko: '장시간 사용으로 열화된 양극 소재를 단순히 분해·재합성하는 것을 넘어, 직접 재활용(direct recycling) 및 업사이클링(upcycling) 기술을 연구합니다. 열처리, 단입자화, 표면 안정화 처리 등을 통해 결정 구조를 복원하거나 성능을 향상시켜, 기존 소재 이상의 전기화학적 특성을 확보할 수 있습니다. 이러한 기술은 에너지 소비를 줄이고, 원료 채굴 의존도를 낮추며, 지속가능한 배터리 생태계 구축에 중요한 역할을 합니다.', 
                  en: 'Rather than full breakdown, we directly restore and upcycle aged cathodes via thermal treatment, single-crystallization, and surface stabilization — cutting energy use and mining reliance.' } },
    ],
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Section title="Research" eyebrow="What we study">
        <ResearchTabsClient topics={topics} />
      </Section>
      <Footer />
    </main>
  );
}
