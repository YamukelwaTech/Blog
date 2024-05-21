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
        customColor3: '#FFAB00',
        customColor4: '#DD2E18',
        customColor5: '#582C12',
      },
      height: {
        '128': '52rem',
      }
    },
  },
  plugins: [],
}
