/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark:  '#060d1f',
          light: '#f0f4ff',
        },
        surface: {
          dark:  '#111a2e',
          light: '#ffffff',
        },
        accent: {
          dark:  '#00f5d4',
          light: '#0052cc',
        },
        muted: {
          dark:  '#8b9bb8',
          light: '#64748b',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
