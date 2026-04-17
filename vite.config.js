import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This checks if you are running 'npm run dev' or 'npm run build'
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    // Use '/axon-website/' only when building for GitHub Pages
    base: command === 'build' ? '/axon-website/' : '/',
  }
})