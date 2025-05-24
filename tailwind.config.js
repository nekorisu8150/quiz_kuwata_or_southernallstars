/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f4fa',
          100: '#dce6f6',
          200: '#bfd1ee',
          300: '#94b3e3',
          400: '#6690d8',
          500: '#3B5998', // Primary color - inspired by Japanese music theme
          600: '#2a4173',
          700: '#21325c',
          800: '#1c294a',
          900: '#18223d',
        },
        red: {
          500: '#E4534D', // Accent color - inspired by Southern All Stars
        },
        yellow: {
          500: '#F2C94C', // Complementary gold - for Kuwata Keisuke
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
};