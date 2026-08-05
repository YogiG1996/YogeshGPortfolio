import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site uses /YogeshGPortfolio/
// Vercel / local use '/' (default). Override with: vite build --base=/YogeshGPortfolio/
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
