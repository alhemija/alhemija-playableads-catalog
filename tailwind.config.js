/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        grotesk:['"Space Grotesk"', 'sans-serif']

      },
      colors:{
        primary:'#141414',
        secondaty:'#E0007B',
        subtext:'#999999',
      }
    },
  },
  plugins: [],
}

