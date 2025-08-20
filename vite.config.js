import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        privacy: 'src/privacy.html',
        cookies: 'src/cookies.html',
        'data-protection': 'src/data-protection.html'
      }
    }
  },
  base: '/',
  server: {
    port: 3000,
    open: true
  }
})