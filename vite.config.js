import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),       // ✅ Enables React JSX transform
    tailwindcss(), // ✅ Enables Tailwind support
  ],
})
