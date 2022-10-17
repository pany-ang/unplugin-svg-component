import path from 'path'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'
import Unplugin from '../src/vite'

export default defineConfig({
  plugins: [
    vue(),
    Inspect(),
    Unplugin({
      iconDir: path.resolve(__dirname, 'icons'),
      dts: true,
    }),
  ],
})