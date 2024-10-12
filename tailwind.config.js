import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      colors: {
        darkBlue: "hsl(240, 38%, 20%)",
        grayishBlue: "hsl(240, 18%, 77%)",
      },
      fontSize: {
        default: "2rem",
      },
      fontFamily: {
        custom: ["inter", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('./src/components/assets/pattern-bg.svg')",
        curve: "url('./src/components/assets/pattern-curve.svg')",
      },
    },
  },
  plugins: [fluid],
};
