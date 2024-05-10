/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "citron":"#83A720",
        "verdun-green":"#394C03",
        "crete":"#677C2B",
        "fuscous-gray":"#4B4E46",
        "bay-of-many":"#1D3B7A"
      }
    },
  },
  plugins: [
    flowbite.content(),
  ],
}