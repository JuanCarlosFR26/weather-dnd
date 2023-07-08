/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        neon: {
          '0%': {color: '#fff'},
          '100%': {color: 'rgb(148, 3, 3)'}
        },
        rotar: {
          'from': {transform: 'rotate(0deg)'},
          'to': {transform: 'rotate(-360deg)'}
        }
      },
      width: {
        logo: '580px'
      },
      height: {
        logo: '300px'
      },
      borderColor: {
        borderNav: 'rgba(0, 0, 0, 0.3)'
      },
      backgroundColor: {
        mirror: 'rgba(250, 250, 250, 0.1)',
        gradient: 'rgb(148, 3, 3)',
        shadowNav: 'rgba(0, 0, 0, 0.3)',
        rotate: '#101010',
        winterDiv: '#91B4C6'
      },
      textColor: {
        paragrapgW: '#CAD7DF'
      },
      backgroundImage: {
        conic: 'conic-gradient(red 20deg, transparent 120deg)',
        winter: "url('/src/assets/winter.svg')"
      },
      boxShadow: {
        mirror: '2px 4px 20px 2px rgba(0, 0, 0, 0.6)',
        rotate: 'inset 16px 14px 20px #0000008c'
      },
      animation: {
        neon: 'neon .5s ease-in infinite alternate',
        rotar: 'rotar 2s linear infinite'
      },
      screens: {
        'sm': [
          {'max': '480px'}
        ],
        'md': [
          {'min': '481px', 'max': '768px'}
        ],
        'mdl': [
          {'min': '769px', 'max': '1024px'}
        ],
        'xl': [
          {'min': '1025px', 'max': '1200px'}
        ],
        '2xl': [
          {'min': '1201px'}
        ]
      }
    },
  },
  plugins: [],
}