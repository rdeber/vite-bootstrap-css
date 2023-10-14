import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 85,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 90,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 90,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssNesting,
        autoprefixer
      ]
    }
  }
});
