/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-theme": "#17191A",
        "main-color": "#A32A85",
        "main-color-transparent": "rgba(163, 42, 133, .1)",
      },
    },
  },
  plugins: [],
};
