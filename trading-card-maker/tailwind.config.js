/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42b983',
        secondary: '#3aa876',
        accent: '#2c3e50'
      }
    },
  },
  plugins: [],
}
