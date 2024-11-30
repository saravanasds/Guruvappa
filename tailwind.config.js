/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'xxs': '375px'
      },
      colors: {
        'primary': '#BAFF39',
        'secondary': '#1B2945',
        'prime' : '#3DB166'  
        },
    },
  },

  plugins: [],
}
