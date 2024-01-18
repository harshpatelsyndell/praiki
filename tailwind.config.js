/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greytext: "#4A5568",
        greytext1: "#727272",
        bgGray: "#F9FBFF",
        blue: "#286cac",
        bgBlue: "#EEF3FB",
        textBlue: "#2B6CB0",
        blackText: "#1A202C",
        blackText1: "#434343",
        borderColor: "#A6B7F4",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Mulish: ["Mulish"],
    },
  },
  plugins: [],
};
