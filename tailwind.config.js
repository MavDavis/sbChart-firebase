module.exports = {
  purge: {
      content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkmode: false,
  theme: {
    screens: {
      'sm': '500px',

      'md': '850px',
      'xmd': '1000px',

      'lg': '1440px',
    },
    container:{
      center:true
    },
      extend: {
     
        colors:{
          'dark':'#121212',
        }
      },
  
  },

  plugins: [],
};