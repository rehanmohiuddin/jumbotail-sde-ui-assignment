module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      Gray: "#f5f5f5",
      maron: "#f25b5c",
      biscuit: "#f7d28e",
      lightBlue: "#92d3f8",
      lightGreen: "#40d2d3",
      lightGrass: "#40d2d3",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
