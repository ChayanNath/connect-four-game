/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#5C2DD5",
        purple: "#7945FF",
        red: "#FD6687",
        yellow: "#FFCE67",
        backdrop: "rgba(0, 0, 0, 0.3)",
      },

      fontFamily: {
        sans: ["'Space Grotesk'"],
      },
    },
  },
  plugins: [],
};
