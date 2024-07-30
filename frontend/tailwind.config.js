/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: { 
        'xs': '480px',
        'sm': '640px', 
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1440px' 
      },
      colors: {
        'primary': {
          'light': '',
          'DEFAULT': '',
          'dark': ''
        },
        'secondary': {
          'light': '',
          'DEFAULT': '',
          'dark': ''
        },
        'accent': {
          'light': '',
          'DEFAULT': '',
          'dark': '#e5d9b7'
        }
      }
    },
  },
  plugins: [],
}

