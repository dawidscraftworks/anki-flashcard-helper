import { defineConfig } from 'vite';

import { viteCommonConfig } from './vite-config-common';

// https://vitejs.dev/config/
const config = defineConfig({
	...viteCommonConfig,
});

export default config;
