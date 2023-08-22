/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        mellow: "mellow-500",
        aeon: "Aeon",
      },
    },
  },
  plugins: [],
};
