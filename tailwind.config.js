/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js, ts, tsx}'],
	darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
				inter: ['inter', 'serif'],
			},
    },
  },
  plugins: [],
}
