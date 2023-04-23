/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  //Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead
  corePlugins: {
    preflight: false,
  },
}
