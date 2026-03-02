/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Noto Serif JP'", "serif"],
        sans: ["'Noto Sans JP'", "sans-serif"],
      },
      colors: {
        'kyoto-bg': '#fdfcfb',
        'kyoto-text': '#1a1a1a',
        'kyoto-accent': '#3d4a3e',
        'kyoto-sub': '#7a7a7a',
      }
    },
  },
  plugins: [],
}
