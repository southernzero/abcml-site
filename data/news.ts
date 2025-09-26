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
    id: "2025-09-02",
    title: "To be updated",
    date: "2025-09-02",
    summary: "간단한 요약 문구",
    image: "/images/news/2025-09-02.jpg",
    body: "상세 내용 준비 중입니다.",
  },
  {
    id: "2025-09-01",
    title: "To be updated",
    date: "2025-09-01",
    summary: "요약 문구",
    image: "/images/2025-09-01.jpg",
    body: "상세 내용 준비 중입니다.",
  },

];
