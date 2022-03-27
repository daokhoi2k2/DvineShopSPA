module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "991px" },
			// => @media (max-width: 991px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "574px" },
			// => @media (max-width: 574px) { ... }
		},
    extend: {
		fontWeight: {
			extrathin: 100,
			thin: 200,
			light: 300,
			regular: 400,
			medium: 500
		},

		gridTemplateColumns: {
			'24': 'repeat(24, minmax(0, 1fr))'
		}
	},
  },
  plugins: [],
}
