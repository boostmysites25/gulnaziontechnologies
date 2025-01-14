/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        headerbackgroundcolor: "#f4f4f4",
        headertextcolor: "#272727",
        headertexthoverandactive: "#E03560",
        backgroundcolor: "#faf3ef",
        primarytextcolor: "#333333",
        footerbackgrouncolor: "#cccccc",
        primary: "#E03560",
        secondary: "#7701D0",
        // secondary: "#007acc",
        tertiary: "#2773A7",
        bordercolor: "rgb(255,173,140)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
