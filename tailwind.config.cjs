/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		'grid-cols-2',
		'md:grid-cols-2',
		'grid-cols-3',
		'md:grid-cols-3',
		'grid-cols-4',
		'md:grid-cols-4',
		'grid-cols-feature',
		'md:grid-cols-feature'
	],
	theme: {
		extend: {
			dropShadow: {
				bold: '4px 4px 1px rgba(127, 255, 212, 0.85)'
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				feature: 'min-content repeat(3, minmax(100px, 1fr))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
