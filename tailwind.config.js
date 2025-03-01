import { colors } from './src/style/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				vt323: ['VT323'],
				silkscreen: ['Silkscreen'],
			},
			animation: {
				skeleton: 'skeleton 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			colors: {
				retrowave: {
					neon_pink: colors.NeonPink,
					electric_purple: colors.ElectricPurple,
					cyber_blue: colors.CyberBlue,
					deep_magenta: colors.DeepMagenta,
					synthwave_orange: colors.SynthwaveOrange,
					dark_violet: colors.DarkViolet,
					midnight_blue: colors.MidnightBlue,
					futuristic_teal: colors.FuturisticTeal,
				},
			},
		},
	},
	plugins: [],
};
