/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#002117',
          900: '#003427',
          800: '#064D3B', // Deep Imperial Emerald
          700: '#0d634e',
          600: '#1b7a62',
          500: '#2c6955',
          200: '#95d3bb',
          100: '#b1f0d7',
          50: '#e8f7f0',
        },
        burgundy: {
          950: '#40000a',
          900: '#620115',
          800: '#7A1624', // Kashmiri Burgundy
          700: '#861f2c',
          600: '#9b2c3a',
          200: '#ffb3b4',
          100: '#ffdad9',
        },
        gold: {
          DEFAULT: '#C89B3C', // Antique Gold
          50: '#fdfbf4',
          100: '#faedd0',
          200: '#f5d99b',
          300: '#eec267',
          400: '#d4af37',
          500: '#C89B3C',
          600: '#a67d28',
          700: '#7b5900',
          800: '#5d4200',
          900: '#261900',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FFF8F6', // Surface Bright
          200: '#F6F0E4', // Warm Spiced Cream
          300: '#EFE6D4', // Soft Sandalwood
          400: '#E5D8C0',
          500: '#D5C4A7',
        },
        espresso: {
          DEFAULT: '#241711', // Dark Espresso Brown
          950: '#150c08',
          900: '#1e120d',
          800: '#241711',
          700: '#3c2d26',
          600: '#544138',
          400: '#705c52',
          200: '#b5a195',
          100: '#eed5cb',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        caps: '0.14em',
        widestEditorial: '0.2em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(36, 23, 17, 0.09)',
        'luxury-hover': '0 25px 50px -12px rgba(36, 23, 17, 0.16)',
        'gold-glow': '0 0 25px -5px rgba(200, 155, 60, 0.35)',
        'emerald-glow': '0 15px 35px -10px rgba(6, 77, 59, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.9 },
          '50%': { opacity: 0.5 },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
