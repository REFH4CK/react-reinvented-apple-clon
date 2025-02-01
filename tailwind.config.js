import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        learn: '#1D1D1D',
        buy: '#B79567',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(320px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: { fadeInUp: 'fadeInUp 1s ease-out forwards', },
      screens: {
        'xs': '480px',  // Extra small devices
        'sm': '640px',  // Small devices
        'md': '768px',  // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra large devices
        '2xl': '1536px' // 2x Extra large devices
      }
    },
    backgroundColor: {
      'header': '#333333',
      'radialA': '332D1C',
      'radialB': '1D1D1D',
    },
    backgroundImage: { 
      'radial-gradient': 'radial-gradient(circle, #332D1C, #1D1D1D)',
      'gradient-text': 'linear-gradient(to top, transparent 27%, #B79567 75%)',
      'linear-gradient': 'linear-gradient(to bottom, #0E143F 0%, #313C92 19%, #FFFFFF 76%)',
      'linear-text': 'linear-gradient(to bottom, #0E143F 0%, #313C92 19%, transparent 76%)',
      'linear-fresh': 'linear-gradient(to right, #0090F7 8%, #BA62FC, #F2416B, #F55600)',
    },
    boxShadow: {
      'headerShadow': '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
      'boxText': '0 20px 15px #161d527d',
      'card': '6px 4px 0px #00000030',
    },
    fontFamily: {
      'sans': ['SF Pro Display', 'sans-serif'],
      'sfl': ['SFLight', 'sans-serif'],
      'pacifico': ['Pacifico', 'cursive']
    }
  },
  plugins: [ require('tailwind-scrollbar')({ nocompatible: true })],
}