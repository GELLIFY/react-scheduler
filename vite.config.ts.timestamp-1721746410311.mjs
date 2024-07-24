// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///C:/react-scheduler/node_modules/vite/dist/node/index.js";
import react from "file:///C:/react-scheduler/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/react-scheduler/node_modules/vite-plugin-dts/dist/index.mjs";
import { visualizer } from "file:///C:/react-scheduler/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import svgr from "file:///C:/react-scheduler/node_modules/vite-plugin-svgr/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\react-scheduler";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  plugins: [
    react({
      babel: {
        env: {
          production: {
            plugins: [["babel-plugin-styled-components", { displayName: false, pure: true }]]
          },
          development: {
            plugins: [["babel-plugin-styled-components", { displayName: true, pure: true }]]
          }
        }
      }
    }),
    dts({
      rollupTypes: true
    }),
    svgr(),
    visualizer({
      template: "treemap"
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "react-scheduler",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    }
  },
  server: {
    host: "0.0.0.0"
  }
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxyZWFjdC1zY2hlZHVsZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHJlYWN0LXNjaGVkdWxlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcmVhY3Qtc2NoZWR1bGVyL3ZpdGUuY29uZmlnLnRzXCI7LyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uICovXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIGVudjoge1xuICAgICAgICAgIHByb2R1Y3Rpb246IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtbXCJiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHNcIiwgeyBkaXNwbGF5TmFtZTogZmFsc2UsIHB1cmU6IHRydWUgfV1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXZlbG9wbWVudDoge1xuICAgICAgICAgICAgcGx1Z2luczogW1tcImJhYmVsLXBsdWdpbi1zdHlsZWQtY29tcG9uZW50c1wiLCB7IGRpc3BsYXlOYW1lOiB0cnVlLCBwdXJlOiB0cnVlIH1dXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIGR0cyh7XG4gICAgICByb2xsdXBUeXBlczogdHJ1ZVxuICAgIH0pLFxuICAgIHN2Z3IoKSxcbiAgICB2aXN1YWxpemVyKHtcbiAgICAgIHRlbXBsYXRlOiBcInRyZWVtYXBcIlxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJyZWFjdC1zY2hlZHVsZXJcIixcbiAgICAgIGZpbGVOYW1lOiBcImluZGV4XCJcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcInJlYWN0L2pzeC1ydW50aW1lXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcbiAgICAgICAgICBcInJlYWN0L2pzeC1ydW50aW1lXCI6IFwicmVhY3QvanN4LXJ1bnRpbWVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjAuMC4wLjBcIlxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLFVBQVU7QUFOakIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxVQUNILFlBQVk7QUFBQSxZQUNWLFNBQVMsQ0FBQyxDQUFDLGtDQUFrQyxFQUFFLGFBQWEsT0FBTyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQUEsVUFDbEY7QUFBQSxVQUNBLGFBQWE7QUFBQSxZQUNYLFNBQVMsQ0FBQyxDQUFDLGtDQUFrQyxFQUFFLGFBQWEsTUFBTSxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQUEsVUFDakY7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsS0FBSztBQUFBLElBQ0wsV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLGFBQWEsbUJBQW1CO0FBQUEsTUFDcEQsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
