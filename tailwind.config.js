/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greytext: "#4A5568",
        greytext1: "#727272",
        blue: "#286cac",
        bgBlue: "#EEF3FB",
        textBlue: "#2B6CB0",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
