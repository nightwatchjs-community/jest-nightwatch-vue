import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['vue', 'vue-router', 'vuex']
  },
  plugins: [
    vue(),
    nightwatchPlugin()
  ]
})
