/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      bgSidebar: '#262730',
      white: '#ffffff',
      black: '#262730',
      input: 'rgba(38, 39, 48, 0.37)'

    },
    extend: {},
  },
  plugins: [],
}