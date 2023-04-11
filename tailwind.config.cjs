/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script"],
        usha: ["Usha"],
        ekusheySaraswatii: ["EkusheySaraswatii"],
      },
      backgroundImage: {
        desktop: "url('/assets/desktop.webp')",
        mobile: "url('/assets/mobile.webp')",
      },
    },
  },
  plugins: [],
};
