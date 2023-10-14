import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    // Image optimizer settings
    ViteImageOptimizer({
      png: {
        quality: 85,
      },
      jpeg: {
        quality: 90,
      },
      jpg: {
        quality: 90,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssNesting, autoprefixer],
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Preserve file names in production, otherwise Vite will use hashes.
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
