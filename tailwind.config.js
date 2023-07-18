/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing: {
      0: '0px',
      1: '1rem',
      2: '1.5rem',
      3: '2rem',
      4: '2.5rem',
      5: '3rem',
      6: '3.5rem',
      7: '4rem',
      8: '4.5rem',
      9: '5rem',
      10: '5.5rem',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.3rem',
      md: '1.5rem',
      xl: '1.8rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: '#636e72',
      disable: '#b2bec3',
      primary: '#1fb6ff',
      secondary: '#f368e0',
      success: '#10ac84',
      error: '#ee5253',
      warning: '#ff9f43',
    },
    extend: {
      width: {
        icon: '2rem',
      },
      backgroundImage: {
        landing: 'url(/images/bgLanding.jpg)',
        underline: 'url(/images/underline.png)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '10px' },
        '*': {
          fontSize: ' 1.3rem',
        },
      });
    }),
  ],
};
