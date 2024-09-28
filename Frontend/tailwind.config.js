/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

