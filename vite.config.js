import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Ovdje eksplicitno definiramo da se "react-helmet-async" ne bundla
      // i tretira kao "vanjski" modul
      external: ['react-helmet-async']
    }
  }
})
