import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  css: {
    transformer: "lightningcss",
  },
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist/client",
  },
});
