/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,css,js}', // Ensure this path matches your project structure
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  extend: {
    },
  },
  plugins: [],
}