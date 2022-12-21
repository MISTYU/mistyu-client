import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { visualizer } from 'rollup-plugin-visualizer'
// import svgr from "@honkhonk/vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '^/api': {
        target: 'http://www.mistyu.com',
        changeOrigin: true
      }
    }
  },
  plugins: [
    react(),
    // visualizer({ open: true })
    // svgr()
  ],
  build: {
    rollupOptions: {
      output: {
        // key自定义 value[] 插件同步package.json名称 或 src/相对路径下的指定文件 （自己可以看manualChunks ts类型）
        manualChunks: {
            // vue vue-router合并打包
            react: ['react', 'react-dom', 'react-router-dom'],
            // 两个文件合并成一个helloWorld文件
            // helloWorld: ['src/components/HelloWorld.vue','src/components/HelloWorld1.vue'],
            webComponent: ['fancy-components']
        }
      }
    }
  }
})
