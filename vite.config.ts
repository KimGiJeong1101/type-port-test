import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/type-port-test/",

  // tsconfig.json의 paths 설정과 맞춰줌 (선택 사항이지만 추천)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
