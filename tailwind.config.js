/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",

      // Date Picker
      "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
    theme: {
      extend: {},
    },
    plugins: [],
  }