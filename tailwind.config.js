/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerbackgroundcolor: "#f4f4f4",
        headertextcolor: "#272727",
        headertexthoverandactive: "#f06021",
        backgroundcolor: "#ffffff",
        primarytextcolor: "#333333",
        footerbackgrouncolor: "#cccccc",
        primary: "#f06021",
        secondary: "#F6931E",
        // secondary: "#007acc",
        tertiary: "#2773A7",
        bordercolor: "rgb(255,173,140)",
      },
      fontFamily: {
        poppins: ["Mulish", "sans-serif"],
        raleway: ["Mulish", "sans-serif"],
        inter: ["Mulish", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite'
      }
    },
  },
  plugins: [],
};
