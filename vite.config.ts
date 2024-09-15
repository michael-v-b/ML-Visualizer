import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    // Add other plugins here if needed
  ],
  base: "../ML-Visualizer/",

  assetsInclude: ["**/*.riv"],
});
