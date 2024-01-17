/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greytext: "#4A5568",
        blue: "#286cac",
      },
    },
    fontFamily: {
      gotham: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
