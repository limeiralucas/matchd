import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
  headLinkOptions: {
    preset: 'apple',
  },
  preset: {
    apple: {
      sizes: [180],
      padding: 0,
    },
    maskable: {
      sizes: [512],
      padding: 0,
    },
    transparent: {
      sizes: [64, 192, 512],
      padding: 0,
    },
    android: {
      sizes: [72, 96, 128, 144, 152, 192, 384, 512],
      padding: 0,
    },
  },
  images: ['public/logo.png'],
});
