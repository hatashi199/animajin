/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				black: '#2F353A',
				white: '#FFFFFF',
				grey: '#F2F2F2',
				input: '#F1F4F7',
				cian: '#01BCF3'
			},
			maxWidth: {
				webCenter: '1200px'
			},
			borderRadius: {
				boxRounded: '4px',
				buttonRounded: '5px'
			},
			textColor: {
				white: '#FFFFFF'
			}
		}
	},
	plugins: []
};
