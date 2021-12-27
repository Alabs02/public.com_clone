module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'primary': '#00f',
      'white': '#fff',
      'black': '#020200',
      'gray': '#64748b',
      'green': '#00ff00',
      'red': '#ff0000',
      'slate': '#c0cce4',
      'transparent': 'transparent',
      'sky': '#e0f2fe',
    },
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'],
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
