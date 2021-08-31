module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				124: '7.75rem',
			},
			colors: {
				orange: {
					200: '#ff9933',
					500: '#f48024',
				},
				fontFamily: {
					abel: ['Abel'],
					monoserrat: ['Montserrat'],
					roboto: ['Roboto Slab'],
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
