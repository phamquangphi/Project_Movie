/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        30: "30px",
        40: "40px",
      },

      spacing: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        20: "20px",
        25: "25px",
        30: "30px",
        40: "40px",
        50: "50px",
      },
    },
  },
  plugins: [],
};
