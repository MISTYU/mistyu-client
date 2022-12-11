import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import svgr from "@honkhonk/vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '^/article': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true
      }
    }
  },
  plugins: [
    react(),
    // svgr()
  ]
})
