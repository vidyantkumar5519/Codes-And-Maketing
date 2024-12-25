/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBodyColor :'#191970',
        customFontSmall :'#303030',
        bodyColor :'#141E30',
        bodycolorGrey :'#D9D9D9',
        greenColor :'#87FA3F',
        whiteShade : '#FAF9F6',
        blueColor : '#0D99FF',
        greyColor : '#444444',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2BDE08, #AAFF01)',
       
      },
      borderRadius: {
        custom: '50px 0px 50px 0px',
        custom2: '0px 15px 0px 15px',
        custom3 : '10px 10px',
      },
      fontSize: {
        'custom': '0.7rem',
      },
    },
  },
  plugins: [],
}