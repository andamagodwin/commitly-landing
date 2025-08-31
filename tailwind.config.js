/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        commitly: {
          DEFAULT: '#131316',
          green: '#2ea44f',
        }
      }
    },
  },
  plugins: [],
}

