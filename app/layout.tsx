// app/layout.tsx
import './globals.css';
export const metadata: Metadata = {
  title: "Advanced Battery & Cathode Materials Lab (ABCML) — Inha University, Nam-Yung Park | 인하대학교, 박남영",
  description:
    "인하대학교 차세대전지소재연구실 (Advanced Battery & Cathode Materials Lab, ABCML)",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}
