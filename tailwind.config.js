/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
      }
      , colors: {
        'soft-pink': '#EE68A4',
        'darkest-magenta': '#502050',
        'grayish-magenta': '#937B92',
        'light-magenta': '#F7F2F7',
      }
    },
  },
  plugins: [],
}

