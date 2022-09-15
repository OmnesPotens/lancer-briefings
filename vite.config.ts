import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import eslintPlugin from 'vite-plugin-eslint'
import { imagetools } from 'vite-imagetools'
// import RemoteAssets from 'vite-plugin-remote-assets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      algorithm: 'brotliCompress',
    }),
    VueTypeImports(),
    eslintPlugin(),
    // RemoteAssets(),
    imagetools({
      defaultDirectives: () => {
        return new URLSearchParams({ format: 'webp' })
      },
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: [
      'lancer-data',
      'lancer-ktb-data',
      'lancer-nrfaw-data',
      'lancer-longrim-data',
    ],
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    reportCompressedSize: true,
  },
  json: {
    namedExports: true,
  },
  css: {
    devSourcemap: true,
  },
})
