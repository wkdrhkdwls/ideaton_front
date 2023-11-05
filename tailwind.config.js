/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateX(-50px)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
      },
    },
  },
  screens: {
    xs: { min: "0px", max: "350px" },
    sm: { min: "350px", max: "720px" },
    md: { min: "721px", max: "1080px" },
    lg: { min: "1081px", max: "1440px" },
    xl: { min: "1441px", max: "1920px" },
    xxl: { min: "1921px" },
  },
};
export const plugins = [];
