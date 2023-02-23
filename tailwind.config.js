/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
}
