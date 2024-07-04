/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      "blue": "#3563E9",
      "white": "#FFFFFF"
    },
    screens: {
      'vsm': '360px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
 
      'md': '768px',
      // => @media (min-width: 768px) { ... }
 
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
 
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
 
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

