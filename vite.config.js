import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig(() => {
  const base = process.env.DEPLOY_TARGET === 'gh-pages' ? '/Portfolio/' : '/';

  return {
    base,
    plugins: [
      react(),
      ViteImageOptimizer({
        png: { quality: 75 },
        jpeg: { quality: 75 },
        jpg: { quality: 75 },
        webp: { quality: 80 },
      })
    ],
    build: {
      target: 'esnext',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 400,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('framer-motion')) return 'framer-motion';
              if (id.includes('react-icons')) return 'react-icons';
              if (id.includes('react-dom') || id.includes('react/')) return 'react-vendor';
            }
          }
        }
      }
    }
  };
});

