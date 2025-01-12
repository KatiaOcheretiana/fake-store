/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: "#222831",
        secondary: "#233142",
        card: "#fafafa",
      },
    },
  },
  plugins: [],
};
