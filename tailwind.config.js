/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans - serif'],
      },
      backgroundImage: {
        'pattern-desktop': "url('./src/assets/pattern-bg-desktop.png')",
        'pattern-mobile': "url('./src/assets/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
}
