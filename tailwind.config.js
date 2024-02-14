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
        cream: "#F5F5F5",
        gray: "#bababa"
      },
      fontFamily: {
        Catamaran: ['Catamaran', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 1s 2s 3',
        bounces: 'bounce 1s 5s 2',
        slideUp: 'slideUp 8s 10s infinite',
        // 'delayed-slideUp': 'slideUp 8s 10s infinite', // Animation delayed by 8 seconds
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%, 26.66%': { transform: 'translateY(0%)' },
          '33.33%, 60%': { transform: 'translateY(-25%)' },
          '66.66%, 93.33%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(-75%)' },
        },
      },
    },
  },
  plugins: [],
}
