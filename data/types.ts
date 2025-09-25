export type Post = {
  id: string;
  title: string;
  date: string;     // 'YYYY-MM-DD'
  summary?: string;
  body?: string;    // 상세 페이지 본문 (선택)
};
