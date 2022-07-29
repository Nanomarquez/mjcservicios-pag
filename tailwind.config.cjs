/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box': '5px 5px 30px rgba(0,0,0,0.1)'
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          "100%" : { left: "33%" },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
