/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode:"jit",
  theme: {
    container:{
      padding:{
        DEFAULT:'15px',
      },
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"960px",
      xl:"1024px",
    },
    extend: {
      backgroundImage: {
        singerOverlay:"url(/assets/hero/singer-overlay.png)",
        newsletter:"url(/assets/newsletter/bg.png)",
      },
      fontFamily:{
        alexBrush:['var(--font-alexBrush)','sans-serif'],
        montserrat:['var(--font-montserrat)','sans-serif'],
      },
      color:{
        primary:"#06062a",
        secondary:"#151538",
        tertiary:"#242445",
        accent:{
          DEFAULT:"#7f1cfc",
          hover:"#6519c6",
        },
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
