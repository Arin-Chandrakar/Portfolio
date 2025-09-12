/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx,md}", // your project files
  ],
  theme: {
    extend: {
      fontFamily:{
        myfont:['MyFont','sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
}
