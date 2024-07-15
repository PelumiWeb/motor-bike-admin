/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
      colors: {
      primary: '#F18E00',
      primaryBlack: "#01060A",
      black100: "#333333",
      black200: "#101928",
      gray100: "#676A6C",
      gray200: "#E0E0E0",
      gray300: "#8C8C8C",
      gray400: "#BDBDBD",
      red100: "#EB5757",
      statusOngoing: "#99FFA3",
      statusCompleted: "#D9D9D9",
      statusUpcoming: "#BFC6FF",
       transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      
    },
     fontFamily: {
      polysansBold: ["polysans-bold", "sans-serif"],
      polysansExtraBold: ["polysans-extrabold", "sans-serif"],
      polysansExtraLight: ["polysans-extralight", "sans-serif"],
      polysansLight: ["polysans-light", "sans-serif"],
       polysansMedium: ["polysans-medium", "sans-serif"],
        polysans: ["polysans-regular", "sans-serif"],
            polysansSemibold: ["polysans-semibold", "sans-serif"],


    },
    extend: {
       backgroundImage: {
        // 'book-image': "",
        'book-image': "url('assets/images/booknow.svg')",
        'bg-card': "url('assets/icons/bg-card.svg')",
      }
    },
  },
  plugins: [],
}

