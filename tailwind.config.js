module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkgreen: '#122f08',
      lightgreen: ' #6a8c65',
      brown: '#61504f',
      beige: '#d8ccc0',
      pink: '#f0e9e4',
      blue: '#0e8cb2',
      white: '#f8fafc',
      copy: '#18181b',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
