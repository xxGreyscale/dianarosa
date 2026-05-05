/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#B8860B',
        'brand-gold-light': '#C89A1A',
        'brand-black': '#111111',
        'gold-cta': '#C89A1A',
        'neutral-dark': '#444444',
        'neutral-mid': '#666666',
        'neutral-light': '#D1D5DB',
        'surface-gray': '#F7F7F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        navbar: '72px',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(90deg, #111111 0%, #2a2a2a 40%, #6b6b6b 70%, #d4d4d4 100%)',
      },
    },
  },
  plugins: [],
};
