module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				'spin-medium': 'spin 2s linear infinite',
			},
			spacing: {
				'124': '16.75rem',
				'100': '100px',
				'54': '13.5rem',
				'50': '12.5rem',
				'49': '12.25rem',
				'51': '12.75rem',
			},

			fontSize: {
				'2.5xl': '1.7rem',
			},
			colors: {
				orange: {
					200: '#ff9933',
					500: '#f48024',
				},
				gray: {
					1000: '#f1f2f3',
					1050: '#9199A1',
					1100: '#f8f9f9',
					1150: '#525960',
					1200: '#3B4045',
				},
				blue: {
					2: '#F4F8FB,',
					5: '#E1ECF4',
					10: '#1585d5',
					15: '#D0E3F1',
					20: '	#A0C8E4',
					30: '#7AA7C7',
					40: '	#5C8EB2',
					50: '#d0e3f1',
					1000: '#0a95ff',
					1100: '#4d79ff',
				},
			},
			fontFamily: {
				abel: ['Abel'],
				monoserrat: ['Montserrat'],
				roboto: ['Roboto Slab'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
