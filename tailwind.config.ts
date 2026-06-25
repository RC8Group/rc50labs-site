import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        marine: '#102338',
        mist: '#edf4f7',
        cyanmark: '#20c7d9',
        leaf: '#3aa577',
        caution: '#d59535',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(7, 17, 31, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
