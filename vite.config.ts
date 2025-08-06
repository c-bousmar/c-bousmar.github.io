import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://c-bousmar.github.io',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
