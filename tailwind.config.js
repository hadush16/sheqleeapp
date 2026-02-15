/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        kantumruy: ["Kantumruy Pro", "sans-serif"],
        recoleta: ["Recoleta", "sans-serif"],
      },
      screens: {
        xs335: "335px",

        "nest-hub": {
          max: "1024px",
          raw: "(max-height: 600px)",
        },
        "nest-hub-max": {
          max: "1280px",
          raw: "(max-height: 800px)",
        },
        "ipad-pro": {
          raw: "(min-width: 768px) and (max-width: 1024px) and (min-height: 1366px)",
        },
      },
    },
  },
  plugins: [],
};
