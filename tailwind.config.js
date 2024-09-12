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
        hero_sred: "url('../img/Main-img-sred.avif')",
        hero_min: "url('../img/Main-img-min.avif')" ,
        cards: "url('../img/Main2.avif')",
        cards_sred: "url('../img/Main2-sred.avif')",
        cards_min: "url('../img/Main2-min.avif')",
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
          error: '#FF214A'
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