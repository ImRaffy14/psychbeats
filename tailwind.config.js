/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#c169d3',
      },
      backgroundImage: {
        'bg': "url('./assets/bg.png')", // adjust path as needed
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

