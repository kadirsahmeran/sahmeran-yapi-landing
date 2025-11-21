/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.html",
    "./src/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "soft-gray":"#f5f5f5"
      },
      fontFamily:{
        poppins:['"Poppins"',"'sans-serif'"]
      }
    },
  },
  plugins: [],
}

