import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD
=======
import path from "path"
>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
<<<<<<< HEAD
=======
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)
})
