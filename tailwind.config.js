/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [
    require('@acmecorp/tailwind-colors'),
    require('@acmecorp/tailwind-fonts'),
    require('@acmecorp/tailwind-spacing'),
  ]
}