import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'


const path = require("path")
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      Components({
        deep: true,
        resolvers: [VuetifyResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(
          __dirname,
          "./src"
        )
      }
    }
  })
  