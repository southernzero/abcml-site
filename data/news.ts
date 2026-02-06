export type NewsItem = {
  id: string;
  title: string;
  date: string;      // YYYY-MM-DD
  summary?: string;
  image?: string;
  body?: string;     // 상세 페이지 본문 (선택)
};

export const news: NewsItem[] = [
  {
    id: "2025-12-23",
    title: "고성능 양극 소재 개발 연구 성과 'Nature Nanotechnology' 게재",
    date: "2025-12-23",
    summary: "이차전지 양극 소재의 고출력 성능과 기계적 안정성을 획기적으로 개선한 '2단계 도핑 전략(Two-step doping strategy)' 연구가 Nature Nanotechnology에 게재되었습니다.",
    image: "/images/news/2025-12-23.jpg",
    body: `
https://doi.org/10.1038/s41565-025-02092-y


박남영 교수의 연구 성과가 나노 기술 분야 세계 최고 권위지인 'Nature Nanotechnology (IF 34.9)'에 게재되었습니다.
(논문명: Nanostructured niobium-doped nickel-rich multiphase positive electrode active material for high-power lithium-based batteries)

최근 전기차 및 UAM(도심항공교통) 시장이 확대됨에 따라 하이엔드 급 고출력 배터리의 수요가 급증하고 있습니다.

본 연구팀은 기존 Ni-rich 양극재의 고질적 문제인 구조적 불안정성과 입자 균열(Cracking) 현상을 해결하기 위해 새로운 'Two-step 도핑 공법'을 제안했습니다.

핵심 기술: 저온 리튬화와 고온 소성 사이에 도핑 공정을 분리하여 나노 크기의 1차 입자를 형성하고 기계적 강도를 극대화했습니다.

성과: 충·방전 과정에서 가역적인 상변화를 유도하여 리튬 이온의 확산 속도를 비약적으로 향상시켰으며, 고출력 환경에서도 장기 안정성을 확보했습니다.

본 기술은 향후 차세대 초급속 충전 배터리 및 고출력 밀도가 요구되는 미래 모빌리티 에너지원 개발에 핵심적인 지표가 될 것으로 기대됩니다.
`,
  },
  {
    id: "2025-09-01",
    title: "To be updated",
    date: "2025-09-01",
    summary: "To be updated",
    image: "/images/news/2025-09-01.jpg",
    body: "상세 내용 준비 중입니다.",
  },

];
export function getNewsById(id: string) {
  return news.find((n) => n.id === id);
}
