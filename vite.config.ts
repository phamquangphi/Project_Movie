import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
      component: path.resolve(__dirname, "./src/component"),
      constant: path.resolve(__dirname, "./src/constant"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      router: path.resolve(__dirname, "./src/router"),
      sevices: path.resolve(__dirname, "./src/sevices"),
      store: path.resolve(__dirname, "./src/store"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
      schema: path.resolve(__dirname, "./src/schema"),
    },
  },
});
