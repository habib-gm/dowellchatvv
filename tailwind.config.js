/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "dowellchat/**/*.{vue,js,ts,jsx,tsx}", // would pull in the npm package `my-component`
    "dowellchat/**/*.{vue,js,ts,jsx,tsx}", // would pull in the npm package `@scope/my-component`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
