/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aktifkan mode gelap berbasis class
  darkMode: 'class',
  content: [
    "./*.{html,js}",
    "./src/js/*.js"
  ],
  theme: {
    extend: {
      // Menambahkan animasi custom untuk digunakan di HTML
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
