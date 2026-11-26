import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base keeps asset URLs working on any GitHub Pages project path
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
