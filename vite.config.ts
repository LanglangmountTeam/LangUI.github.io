/// <reference types="vitest"/>
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import Markdown from "vite-plugin-md"
import {resolve} from "path"
// https://vitejs.dev/config/
export default defineConfig({
	test:{
		globals:true,
		environment:"jsdom",
		coverage: {
			provider: 'c8', // or 'c8'
		  },
	},
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/], 
		}),
		Markdown(),

	],
   
	// css:{
	// 	preprocessorOptions:{
	// 		scss:{
	// 			additionalData:"@use \"./packages/main.scss\" as *;"
	// 		}
	// 	}
	// },
	resolve: {
		alias: {
			"@": resolve(__dirname, 'src'),
			
			replacement: 'langui-main/dist/lang-uiss.js',
		},
	},
	base:"./",
});
