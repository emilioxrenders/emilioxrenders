/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6E8175",
        light: "#E9EDEA",
      },
    },
    fontFamily: {
      display: ["Montserrat", "ui-sans-serif"],
    },
  },
  plugins: [],
};
