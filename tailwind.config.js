/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: '#fefae0',
      },
      height: {
        '128': '52rem',
      }
    },
  },
  plugins: [],
}
