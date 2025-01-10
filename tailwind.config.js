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
        dark: "#222222",
        medium: "#5b5b5b",
        light: "#F4F4F4",
        primary: "#e5ebe7",
      },
    },
    fontFamily: {
      display: ["Montserrat", "ui-sans-serif"],
    },
  },
  plugins: [],
};
