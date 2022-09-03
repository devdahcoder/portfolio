/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-bg': "hsl(0, 0%, 90%)",
        'green': {
          100: "hsl(158, 75%, 47%)",
          200: "hsl(158, 100%, 23%)"
        },
        'dark-bg': "hsl(0, 7%, 8%)",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'vollkorn': ['Vollkorn', 'serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'blinker': 'blinker 600ms linear infinite'
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'blinker': {
          '50%': {opacity: '0.6'},
        }
      },
      screens: {
        'small-xs': {'min': '320px'},
        'small-mid': {'min': '400px'},
        'small-large': {'min': '480px'},
        'medium-xs': {'min': '600px'},
        'medium-sm': {'min': '768px'},
        'large-xs': {'min': '900px'},
        'large-sm': {'min': '1024px'},
        'extra-large-xs': {'min': '1200px'}
      }
    },
  },
  plugins: [],
}
