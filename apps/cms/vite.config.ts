import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@repo/zod-schemas": path.resolve(
        __dirname,
        "../../packages/zod-schemas/dist"
      ),
      // @hookform/resolvers v5 imports from zod/v4/core (Zod v4 subpath export)
      // esbuild can't auto-resolve this subpath, so we alias it explicitly
      "zod/v4/core": path.resolve(
        __dirname,
        "../../node_modules/.pnpm/zod@4.3.6/node_modules/zod/v4/core/index.js"
      ),
    },
  },
  optimizeDeps: {
    include: [
      "zod",
      "@hookform/resolvers/zod",
    ],
  },
  css: {
    postcss: path.resolve(__dirname, "./postcss.config.mjs"),
  },
});
