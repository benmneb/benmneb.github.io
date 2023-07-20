import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#web-app-manifest
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'maskable-icon-512x512.png',
      ],
      manifest: {
        name: 'benmneb/portfolio',
        short_name: 'benmneb',
        description: 'Not just another React dev.',
        start_url: '/?ref=pwa',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
