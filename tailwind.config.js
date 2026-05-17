/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#12315c",
        ink: "#16324f",
        teal: "#148f8b",
        mist: "#edf7f7",
        soft: "#f7fbfc",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(18, 49, 92, 0.10)",
      },
    },
  },
  plugins: [],
};
