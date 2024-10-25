/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseDark: "#030637",
        accentDark: "#3C0753",
        primary: "#720455",
        accentLight: "#910A67",
      },
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
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: { DEFAULT: "#720455" },
          },
        },
        dark: {
          colors: {
            primary: { background: "#720455" },
          },
        },
      },
    }),
  ],
};
