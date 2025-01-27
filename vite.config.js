import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import yaml from '@rollup/plugin-yaml';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    yaml({
      include: ['**/*.yaml'],
      stringify: false,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        styles: path.resolve(__dirname, 'src/js/styles.js')
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
});
