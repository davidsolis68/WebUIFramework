import { defineConfig } from "vite";
import path, { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/js/framework/", // Base URL for serving assets
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        actuaciones: resolve(__dirname, "src/pages/actuaciones/index.tsx"),
        //Page2: resolve(__dirname, 'src/pages/Page2/index.tsx'),
      },
      output: {
        entryFileNames: "[name]/[name].js",
        chunkFileNames: "[name]/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (name && name.endsWith(".css")) {
            const baseName = name.replace(/(.*\/)?(.+?)\.\w+$/, "$2");
            return `[name]/${baseName}.css`;
          }
          return "[name]/[name]-[hash][extname]";
        },
      },
    },
    outDir: "../REC08SGT/WebUI/wwwroot/js/framework",
  },
});
