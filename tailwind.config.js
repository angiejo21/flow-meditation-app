/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    extend: {
      fontFamily: {
        heading: "MuseoModerno, sans-serif",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
  darkMode:"class",
};
