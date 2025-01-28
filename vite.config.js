import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import yaml from '@rollup/plugin-yaml';
import path from 'path';
import fs from 'node:fs';
import jsYaml from 'js-yaml';

const data = jsYaml.load(fs.readFileSync('./template.yaml', 'utf8'));

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    yaml(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/<%=\s*data\.(\w+)\s*%>/g, (match, key) => {
          return data[key] || '';
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        styles: path.resolve(__dirname, 'src/js/styles.js'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import'],
        quietDeps: true,
      },
    },
  },
});
