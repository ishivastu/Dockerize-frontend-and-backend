import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
  allowedHosts: [
    '.onrender.com',  // Allow all Render subdomains
    'localhost',
    '127.0.0.1'
  ]
  }
})