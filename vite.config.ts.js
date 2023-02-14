// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/assets/styles/main.scss" as *;'
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve("F:\\QQPCmgr\\Desktop\\langlang\\LangUI", "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBNYXJrZG93biBmcm9tICd2aXRlLXBsdWdpbi1tZCdcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCdcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgIHZ1ZSh7XG4gICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLCBcbiAgICAgfSksXG4gICAgIE1hcmtkb3duKClcbiAgIF0sXG4gICBcbiAgIGNzczp7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczp7XG4gICAgICBzY3NzOntcbiAgICAgICAgYWRkaXRpb25hbERhdGE6J0B1c2UgXCIuL3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2Nzc1wiIGFzICo7J1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcmVzb2x2ZShcIkY6XFxcXFFRUENtZ3JcXFxcRGVza3RvcFxcXFxsYW5nbGFuZ1xcXFxMYW5nVUlcIiwgXCJzcmNcIiksXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sY0FBYztBQUNyQixTQUFRLGVBQWM7QUFFdEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFVBQVUsT0FBTztBQUFBLElBQzdCLENBQUM7QUFBQSxJQUNELFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFFQSxLQUFJO0FBQUEsSUFDSCxxQkFBb0I7QUFBQSxNQUNsQixNQUFLO0FBQUEsUUFDSCxnQkFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSwwQ0FBMEMsS0FBSztBQUFBLElBQzlEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
