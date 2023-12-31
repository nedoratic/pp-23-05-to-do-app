import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/pp-23-05-to-do-app/',
	plugins: [react()],
});
