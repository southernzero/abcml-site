// data/notices.ts
export type Post = {
  id: string;
  title: string;
  date: string;      // YYYY-MM-DD
  summary?: string;  // 목록/홈 요약문 (선택)
  body?: string;     // 상세 본문 (선택)
};

export const notices: Post[] = [
  {
    id: '2025-09-01-recruit',
    title: '석·박사 과정 및 학부연구생 모집',
    date: '2025-09-01',
    summary: '이차전지 소재 합성 및 분석 분야',
    body: `지원자격, 연구분야, 제출서류 안내.
- 지원자격: 에너지/화학/재료 관련 전공
- 제출서류: 성적표, 자기소개(자유양식)
- 문의: nypark@inha.ac.kr`,
  },
];

// 헬퍼
export const getNoticeById = (id: string) => notices.find(n => n.id === id);
