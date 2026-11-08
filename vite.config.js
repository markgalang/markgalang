import { defineConfig } from 'vite';
export default defineConfig({
  build: { outDir: 'build' },
  test: { environment: 'jsdom', setupFiles: './src/test-setup.js', globals: true },
});
