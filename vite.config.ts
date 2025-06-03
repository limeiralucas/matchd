import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.DEPLOY_ENV === 'test' ? '/test/' : '/',
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icons/*', 'splash/*'],
      manifest: {
        name: 'Matchd',
        short_name: 'Matchd',
        description: 'A simple scoreboard application',
        theme_color: '#1c1c1e',
        background_color: '#1c1c1e',
        display: 'standalone',
        orientation: 'any',
        icons: [
          {
            src: '/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
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
            src: '/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      external: [
        /\/__tests__\//, // Exclude all files in __tests__ directories
        /\.spec\./, // Exclude all .spec files
        /\.test\./, // Exclude all .test files
      ],
    },
  },
});
