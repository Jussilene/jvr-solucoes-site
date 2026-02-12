import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // ✅ DEV roda na raiz; PROD roda na subpasta do GitHub Pages
  base: mode === "production" ? "/jvr-solucoes-site/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
