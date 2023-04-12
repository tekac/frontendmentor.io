/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      mainback: "hsl(233, 47%, 7%)",
      cardback: "hsl(244, 38%, 16%)",
      accent: "hsl(277,64%,61%)",

      primary: "hsl(0,0%,100%)",
      secondary: "hsla(0,0%,100%,.75)",
      tertiary: "hsla(0,0%,100%,.6)",
    },
    extend: {
      screens: {
        "8xl": { max: "90rem" },
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        lexend: ["lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
