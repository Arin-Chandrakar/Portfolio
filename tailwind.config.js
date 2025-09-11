/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // your project files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
