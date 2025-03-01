export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		'postcss-pxtorem': {
			rootValue: 16,
			minPixelValue: 1,
			propList: [
				'font-size',
				'line-height',
				'width',
				'min-width',
				'min-height',
				'height',
				'margin',
				'padding',
			],
		},
	},
};
