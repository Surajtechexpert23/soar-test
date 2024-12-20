import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/assets': '/src/assets',
      '@/hooks': '/src/hooks',
      '@/pages': '/src/pages',
      '@/common': '/src/common',
      '@/components': '/src/components',
    },
  },
})