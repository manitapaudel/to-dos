/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["var(--font-caveat)"],
        inconsolata: ["var(--font-inconsolata)"],
      },
      screens: {
        500: "500px",
        // => @media (min-width: 500px) { ... }
      },
    },
  },
  plugins: [nextui()],
};
