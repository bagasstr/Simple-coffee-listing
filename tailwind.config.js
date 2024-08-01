/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      background: "#111315",
      primary: "#1B1D1F",
      text: "#FEF7EE",
      gray: "#6F757C",
      yellow: "#F6C768",
      red: "#ED735D",
      greenCyan: "#BEE3CC",
    },

    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
