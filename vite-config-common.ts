import path from 'path';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export const viteCommonConfig = {
	plugins: [
		react(),
		svgr({
			include: '**/*.svg',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		target: 'esnext',
	},
	server: {
		port: 2137,
	},
};
