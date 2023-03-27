/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./hugo_stats.json', './layouts/**/*.html', './layouts/**/*.*.html'],
  theme: {
    extend: {
      colors: {
        pejGreen: "#008060",
        pejRed: "#ED1C24"
      }
    },
  }, plugins: [typography],
}
