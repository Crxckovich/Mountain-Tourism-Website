/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },

    extend: {
      backgroundImage: {
        hero: "url('../img/Main-img.avif')" ,
        cards: "url('../img/Main2.avif')",
      },
      fontFamily: {
        primary: ['Montserrat'],
      },
      colors: {
        primary: {
          DEFAULT: '#444444',
          hover: '#c5c5c5',
        },
        secondary: {
          DEFAULT: '#5b5b5b',
        },
        accent : {
          DEFAULT: '#2CA9BC',
          secondary: '#f4f0ec',
          hover: '#0090ad',
        },
      }
    },
  },
  plugins: [],
}