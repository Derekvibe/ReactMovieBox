/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'custom-blue': 'rgb(50, 50, 103)',
        'card-color':'rgb(80, 102, 227)',
      }
    },
  },
  plugins: [],
}