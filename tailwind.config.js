/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,ts,tsx,mdx}',
  ],
  theme: {
    // Overriding fontFamily to use @next/font loaded families
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
