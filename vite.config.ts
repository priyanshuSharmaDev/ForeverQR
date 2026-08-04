import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts"
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          qr: ["qr-code-styling"],
          vendor: ["react", "react-dom", "react-router-dom"]
        }
      }
    }
  }
});
