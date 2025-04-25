/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#E6EEEF',
          100: '#C4D6DA',
          200: '#9BBCC2',
          300: '#72A1AA',
          400: '#538D98',
          500: '#0F4C5C',
          600: '#0D4453',
          700: '#0B3B49',
          800: '#09333F',
          900: '#072A35',
        },
        secondary: {
          50: '#FCF8E8',
          100: '#F8EFC5',
          200: '#F3E49E',
          300: '#EED977',
          400: '#EBD05A',
          500: '#E9C46A',
          600: '#D4B25F',
          700: '#BC9D54',
          800: '#A58849',
          900: '#8D733E',
        },
        accent: {
          50: '#FAEAE6',
          100: '#F4CCC0',
          200: '#EFAA97',
          300: '#EB886D',
          400: '#E76F51',
          500: '#E35634',
          600: '#CF4F2F',
          700: '#B74629',
          800: '#9F3E23',
          900: '#87351D',
        },
        success: {
          500: '#2E7D32',
        },
        warning: {
          500: '#ED6C02',
        },
        error: {
          500: '#D32F2F',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};