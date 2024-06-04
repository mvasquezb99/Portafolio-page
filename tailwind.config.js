/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulsePro: {
          '0%, 100%' : {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          }
        },
      },
      animation:{
        'pulsePro': 'pulsePro 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
      backgroundImage:{
        'blueWaves':"url('./src/assets/layered-waves-haikei-low.svg')",
        'blueWaves-up':"url('./src/assets/layered-waves-haikei-up.svg')"
      }
    },
  },
  plugins: [],
}

