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

    container: {
      padding: {
        DEFAULT: "14px",
        sm: "16px",
        lg: "20px",
        xl: "100px",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#233142",
        price: "#393e46",
        card: "#eeeeee",
      },
    },
  },
  plugins: [],
};
