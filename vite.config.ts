import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const base = mode === "production" ? "/epfl/" : "/"; 
  return {
    base,
    plugins: [react()],
    resolve: { alias: { "@": path.resolve(__dirname, "src") } },
    define: { __APP_BASE__: JSON.stringify(base) }, 
  };
});
