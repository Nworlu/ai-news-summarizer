/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "title-active": "#050505",
        "body-text": "#4E4B66",
        "button-text": "#667080",
        placeholder: "#A0A3BD",
        button: "#EEF1F4",
        primary: "#1877F2",
        "error-dark": "#C30052",
      },
      height: {
        pich: "36.5rem",
      },
    },
  },
  plugins: [],
};
