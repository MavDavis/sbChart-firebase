module.exports = {
  purge: {
      content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkmode: false,
  theme: {
    screens: {
      'sm': '500px',

      'md': '850px',

      'lg': '1440px',
    },
    container:{
      center:true
    },
      extend: {
     
        colors:{
      
        }
      },
  
  },

  plugins: [],
};