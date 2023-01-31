/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#50589E',
        'accent-blue': '#555FB9',
        'light-blue': '#757DC6',
        'not-black': '#474B6D',
        'grey-70': '#6B6E8D',
        'grey-50': '#CED0E4',
        'grey-30': '#DDFFF1'
      },
      fontFamily: {
        cabin: ['Cabin', 'sans-serif']
      }
    }
  },
  plugins: []
};
