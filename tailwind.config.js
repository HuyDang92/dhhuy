/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      fontFamily: {
         sans: ['"Poppins"', 'sans-serif'],
      },
      extend: {
         colors: {
            transparent: 'transparent',
            light: '#fff',
            dark: '#0F172A',
            purple: '#AD00FF',
            lightPurple: '#5961F9',
            cyan: '#00B2FF',
            cyan: '#00B2FF',
            blueLight: '#1D9BF0',
         },
      },
   },
   plugins: [],
};
