module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1250px',
      '2xl': '1400px',
    },
    extend: {
      colors:{
        mainColor:"var(--mainColor)",
        mainColorDarker:"var(--mainColorDarker)",
        darkBG:"var(--darkBG)",
      },
      boxShadow:{
        black:"0 4px 15px -5px theme('colors.gray.50')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

