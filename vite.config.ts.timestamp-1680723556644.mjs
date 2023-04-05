// vite.config.ts
import react from "file:///C:/Users/vpinheiro/code/dxc/vli/flink-mfe/flink-components/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/vpinheiro/code/dxc/vli/flink-mfe/flink-components/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/vpinheiro/code/dxc/vli/flink-mfe/flink-components/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///C:/Users/vpinheiro/code/dxc/vli/flink-mfe/flink-components/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///C:/Users/vpinheiro/code/dxc/vli/flink-mfe/flink-components/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var peerDependencies = {
  "@emotion/react": "^11.10.6",
  "@emotion/styled": "^11.10.6",
  "@mui/icons-material": "^5.10.6",
  "@mui/material": "^5.11.14",
  "@types/react": "^18.0.17",
  classnames: "^2.3.2",
  formik: "^2.2.9",
  "js-cookie": "^3.0.1",
  lodash: "^4.17.21",
  react: "16.8.0 || >=17.x",
  "react-dom": "16.8.0 || >=17.x",
  "react-modal": "^3.16.1",
  "react-router-dom": "^6.10.0",
  yup: "^1.0.2"
};

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\vpinheiro\\code\\dxc\\vli\\flink-mfe\\flink-components";
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  resolve: {
    alias: {
      "@components/*": resolve(__vite_injected_original_dirname, "src/components/*"),
      "@middlewares/*": resolve(__vite_injected_original_dirname, "src/middlewares/*"),
      "@mocks/*": resolve(__vite_injected_original_dirname, "src/mocks/*"),
      "@protocols/*": resolve(__vite_injected_original_dirname, "src/protocols/*"),
      "@styles/*": resolve(__vite_injected_original_dirname, "src/styles/*"),
      "@themes/*": resolve(__vite_injected_original_dirname, "src/themes/*"),
      "@utils/*": resolve(__vite_injected_original_dirname, "src/utils/*")
    }
  },
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      insertTypesEntry: true,
      include: ["src/component/"]
    })
  ],
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
      name: "FlinkComponents",
      formats: ["es", "umd"],
      fileName: (format) => `flink-components.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2cGluaGVpcm9cXFxcY29kZVxcXFxkeGNcXFxcdmxpXFxcXGZsaW5rLW1mZVxcXFxmbGluay1jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2cGluaGVpcm9cXFxcY29kZVxcXFxkeGNcXFxcdmxpXFxcXGZsaW5rLW1mZVxcXFxmbGluay1jb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy92cGluaGVpcm8vY29kZS9keGMvdmxpL2ZsaW5rLW1mZS9mbGluay1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgRXNMaW50IGZyb20gXCJ2aXRlLXBsdWdpbi1saW50ZXJcIjtcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5jb25zdCB7IEVzTGludGVyLCBsaW50ZXJQbHVnaW4gfSA9IEVzTGludDtcbmltcG9ydCAqIGFzIHBhY2thZ2VKc29uIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAY29tcG9uZW50cy8qXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzLypcIiksXG4gICAgICBcIkBtaWRkbGV3YXJlcy8qXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9taWRkbGV3YXJlcy8qXCIpLFxuICAgICAgXCJAbW9ja3MvKlwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbW9ja3MvKlwiKSxcbiAgICAgIFwiQHByb3RvY29scy8qXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9wcm90b2NvbHMvKlwiKSxcbiAgICAgIFwiQHN0eWxlcy8qXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9zdHlsZXMvKlwiKSxcbiAgICAgIFwiQHRoZW1lcy8qXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy90aGVtZXMvKlwiKSxcbiAgICAgIFwiQHV0aWxzLypcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL3V0aWxzLypcIiksXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdHNDb25maWdQYXRocygpLFxuICAgIGxpbnRlclBsdWdpbih7XG4gICAgICBpbmNsdWRlOiBbXCIuL3NyY30vKiovKi57dHMsdHN4fVwiXSxcbiAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnYgfSldLFxuICAgIH0pLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgaW5jbHVkZTogW1wic3JjL2NvbXBvbmVudC9cIl0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShcInNyY1wiLCBcImNvbXBvbmVudHMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcIkZsaW5rQ29tcG9uZW50c1wiLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIl0sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGZsaW5rLWNvbXBvbmVudHMuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbLi4uT2JqZWN0LmtleXMocGFja2FnZUpzb24ucGVlckRlcGVuZGVuY2llcyldLFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdYLE9BQU8sV0FBVztBQUNsWSxTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTDFCLElBQU0sbUNBQW1DO0FBTXpDLElBQU0sRUFBRSxVQUFVLGFBQWEsSUFBSTtBQUluQyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxlQUFlO0FBQUEsRUFDMUMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsaUJBQWlCLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDdEQsa0JBQWtCLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsTUFDeEQsWUFBWSxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUM1QyxnQkFBZ0IsUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUNwRCxhQUFhLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzlDLGFBQWEsUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDOUMsWUFBWSxRQUFRLGtDQUFXLGFBQWE7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxNQUNYLFNBQVMsQ0FBQyxzQkFBc0I7QUFBQSxNQUNoQyxTQUFTLENBQUMsSUFBSSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFBQSxJQUN2QyxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixTQUFTLENBQUMsZ0JBQWdCO0FBQUEsSUFDNUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxPQUFPLHFCQUFxQjtBQUFBLE1BQzNDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxvQkFBb0I7QUFBQSxJQUM1QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEdBQUcsT0FBTyxLQUFpQixnQkFBZ0IsQ0FBQztBQUFBLElBQ3pEO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
