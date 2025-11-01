import { defineConfig } from 'vite';

export default defineConfig({
  base: '/godbreakers-wiki/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  publicDir: 'public',
});

