import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [
          path.resolve(__dirname, './src/assets/stylus/abstracts/*.styl'),
        ],
      },
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'pinia', '@vueuse/head', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],

      // custom resolvers
      resolvers: [],
      dts: 'src/components.d.ts',
      directoryAsNamespace: true,
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'LottoEasy',
        short_name: 'LottoEasy',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
    exclude: ['vue-demi'],
  },
})
