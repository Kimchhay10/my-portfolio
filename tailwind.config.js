/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/routes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      kantumruy: ["Kantumruy Pro", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FF481B",
        default: "#E7E9EB",
      },
    },
  },
  plugins: [],
};
