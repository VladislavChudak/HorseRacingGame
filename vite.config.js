import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path';

export default defineConfig({
  base: '/HorseRacingGame/',
  plugins: [vue(), svgLoader()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
