import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
import tsConfigPaths from "vite-tsconfig-paths";
const { EsLinter, linterPlugin } = EsLint;
import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  resolve: {
    alias: {
      "@components/*": resolve(__dirname, "src/components/*"),
      "@middlewares/*": resolve(__dirname, "src/middlewares/*"),
      "@mocks/*": resolve(__dirname, "src/mocks/*"),
      "@protocols/*": resolve(__dirname, "src/protocols/*"),
      "@styles/*": resolve(__dirname, "src/styles/*"),
      "@themes/*": resolve(__dirname, "src/themes/*"),
      "@utils/*": resolve(__dirname, "src/utils/*"),
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      insertTypesEntry: true,
      include: ["src/component/"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "FlinkComponents",
      formats: ["es", "umd"],
      fileName: (format) => `flink-components.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
