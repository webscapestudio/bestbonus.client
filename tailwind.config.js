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
    screens: {
      xl: { max: "1920px" },
      lg: { max: "1440px" },
      md: { max: "1200px" },
      sm: { max: "768px" },
      xs: { max: "480px" },
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        black: "#1f1f1f",
        blackLight: "#262626",
        gray: "#71717a",
        grayLight: "#cbd5e1",
        accent: "#BC2642",
        accentHover: "#d90c32",
        orange: "#f97316",
        green: "#16a34b",
        yellow: "#FFC91D",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
          padding: "0 20px",

          "@screen lg": {
            maxWidth: "1200px",
            padding: "0 20px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen sm": {
            maxWidth: "640px",
            padding: "0 15px",
          },
          "@screen xs": {
            maxWidth: "none",
          },
        },
      });
    },
  ],
};
