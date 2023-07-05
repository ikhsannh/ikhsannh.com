/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          darkGreen: "#08161A",
          cream : "#F5F5F5",
          gray: "#bababa" 
      },
        fontFamily: {
          Catamaran: ['Catamaran', 'sans-serif'],
          Lato: ['Lato', 'sans-serif'],
        },
        animation: {
          bounce : 'bounce 1s 2s 3',
          bounces: 'bounce 1s 5s 2',
      },
      keyframes: {
          bounce: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
    plugins: [],
  }

