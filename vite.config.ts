import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo name as base path for GitHub Pages on forks
  base: process.env.GITHUB_ACTIONS ? '/NeelKondapalli.github.io/' : '/',
})
