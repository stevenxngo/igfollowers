/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ig-yellow": "#ffd600",
        "ig-orange": "#ffa700",
        "ig-pink": "#ff0069",
        "ig-l-purple": "#d300c5",
        "ig-d-purple": "#7638fa"
      },
    },
  },
  plugins: [],
};
