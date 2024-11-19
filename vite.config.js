import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import fs from 'fs-extra';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'copy-social-image',
      closeBundle() {
        fs.copySync(
          'src/assets/verifind-social-image.png',
          'public/verifind-social-image.png'
        )
      }
    }
  ],
  build: {
    outDir: 'public',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  }
});
