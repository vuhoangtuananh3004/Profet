/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sacramento: ["Sacramento", "cursive"],
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "2048px"
        }
      },
      height:{
        '2xl': "600px"
      },
    },
  },
  plugins: [],
}