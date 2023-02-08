import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
     vue({
       include: [/\.vue$/, /\.md$/], 
     }),
     Markdown()
   ],
   
   css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@use "./src/styles/assets/main.scss" as *;'
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
