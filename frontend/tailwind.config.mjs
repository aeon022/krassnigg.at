/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Shippori Mincho'", "'Yu Mincho'", "'Hiragino Mincho ProN'", 'serif'],
        sans: ["'Manrope'", "'Hiragino Kaku Gothic ProN'", "'Yu Gothic'", 'sans-serif'],
      },
      colors: {
        'kyoto-bg': '#f4f3f1',    /* khaki-beige-50 */
        'kyoto-text': '#1c1b17',  /* khaki-beige-900 */
        'kyoto-accent': '#54786e', /* muted-teal-600 */
        'kyoto-sub': '#716b5b',   /* khaki-beige-600 */
        'kyoto-line': '#d2cfc6',  /* khaki-beige-200 */
      },
    },
  },
  plugins: [],
}
