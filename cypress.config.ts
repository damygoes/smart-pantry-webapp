import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  e2e: {
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    baseUrl: process.env.VITE_ENV === 'production'
      ? process.env.VITE_PROD_BASE_URL
      : process.env.VITE_DEV_BASE_URL,
    setupNodeEvents(on, config) {
      // You can set up other events here if needed
      return config;
    },
  },
});
