/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: '#FDF8F0',
        customColor2: '#183a1d',
      },
      height: {
        '128': '52rem',
      }
    },
  },
  plugins: [],
}
