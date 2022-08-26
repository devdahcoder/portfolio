/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
}
