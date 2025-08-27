// vitest.config.ts
import { defineConfig } from "vitest/config";
import { resolve } from "path";
import * as dotenv from "dotenv";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

dotenv.config({ path: resolve(__dirname, ".env.test") });

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@repo/zod-schemas": path.resolve(__dirname, "../../packages/zod-schemas/src"),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.{test,spec}.ts"],
    alias: {
      "#": resolve(__dirname, "./src"),
      "@repo": resolve(__dirname, "../packages"),
    },
  },
});
