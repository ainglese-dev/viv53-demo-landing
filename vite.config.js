import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        'case-studies': 'src/case-studies/index.html',
        'case-studies-simple': 'src/case-studies-simple.html',
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