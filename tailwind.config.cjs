/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      keyframes: {
        'slideLeft': {
          '0%': {
            transform: 'translateX(300px)'
          },
          '100%': {
            transform: 'translateX(40px)'
          }
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        }
        

      },
      animation: {
        'slideLeft': 'slideLeft 1s ease-in-out',
        'blob': "blob 7s infinite",
      },

      fontFamily:{
        oswald:" Oswald, sans-serif" ,
        lora: "Lora, sans-serif",
        inter: "Inter, sans-serif",
        Worksans: "Worksan, sans-serif"
      }


    },
    
  },
  plugins: [],
}
