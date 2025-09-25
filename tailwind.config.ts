// tailwind.config.ts
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { navy: '#1F3A4D', teal: '#2FA37B', light: '#E6F3EF' },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        // Pretendard(가변) 사용
        sans: ['Pretendard Variable', 'Pretendard', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [typography()],
};
export default config;
