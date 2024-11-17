/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors :{
        sidebar: '#a27fe0',
        card: '#ede1fc',
        submenu: '#9062e3'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

