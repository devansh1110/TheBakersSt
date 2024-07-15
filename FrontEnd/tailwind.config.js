/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1},
          gridTemplateColumns: {
            'custom-layout': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
          },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
        }
      }, ['responsive', 'hover'])
    }
  ],
  }
}