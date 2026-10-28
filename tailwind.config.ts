import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bone: '#f6f1ea',
        sand: '#eadcc0',
        ink: '#111111',
        card: '#faf7f2'
      },
      boxShadow: {
        soft: '0 12px 35px rgba(17, 17, 17, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
