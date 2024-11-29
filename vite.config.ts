import path from 'node:path';
import { fileURLToPath } from 'node:url';
/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/config/setupTests.ts',
		css: true,
		// speed up since tests don't rely on css
		// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts#L14-L16
		// css: false,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@contexts': path.resolve(__dirname, './src/contexts'),
			'@interfaces': path.resolve(__dirname, './src/interfaces'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@features': path.resolve(__dirname, './src/features'),
			'@services': path.resolve(__dirname, './src/services'),
			'@locales': path.resolve(__dirname, './src/locales'),
			'@config': path.resolve(__dirname, './src/config'),
			'@providers': path.resolve(__dirname, './src/providers'),
			'@constants': path.resolve(__dirname, './src/constants'),
		},
	},
});
