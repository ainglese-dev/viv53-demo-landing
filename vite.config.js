import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        about: 'src/pages/about.html',
        services: 'src/pages/services.html',
        contact: 'src/pages/contact.html'
      }
    }
  },
  base: '/viv53-demo-landing/',
  server: {
    port: 3000,
    open: true
  }
})