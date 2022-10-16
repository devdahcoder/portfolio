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
        'quick-sand': ['Quicksand', 'sans-serif'],
        'pencerio': ['pencerio', 'san-serif'],
        'libre': ['Libre Baskerville', 'san-serif'],
        'ogg': ['Ogg', 'san-serif'],
        'acumin-pro': ['Acumin Pro', 'san-serif'],
        'rubik': ['Rubik', 'san-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'blinker': 'blinker 600ms linear infinite',
        'slow-bounce': 'slow-bounce 2s linear infinite',

      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'blinker': {
          '50%': {opacity: '0.6'},
        },
        'slow-bounce': {
          '0% 100%': { transform: 'translateY(0)'},
          // '30%': { transform: 'translateY(-20px)'},
          '50%': { transform: 'translateY(-100px)'}
        }
      },
      screens: {
        'small-xs': {'min': '320px'},
        'small-mid': {'min': '400px'},
        'small-large': {'min': '480px'},
        'medium-xs': {'min': '600px'},
        'medium-sm': {'min': '768px'},
        'large-xs': {'min': '900px'},
        'large-mid': {'min': '1000px'},
        'large-sm': {'min': '1024px'},
        'extra-large-xs': {'min': '1200px'},
        'extra-large-mid': {'min': '1280px'},
        'extra-large-large': {'min': '1536px'},
      }
    },
  },
  plugins: [],
}
