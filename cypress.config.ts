import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  e2e: {
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    baseUrl: process.env.VITE_ENV === 'production'
      ? process.env.VITE_PROD_BASE_URL
      : process.env.VITE_DEV_BASE_URL,
    retries: {
      runMode: 2,  // Retry up to 2 times when running in CI
      openMode: 0, // No retries when running interactively
    },
    setupNodeEvents(on, config) {
      console.log('Cypress baseUrl:', config.baseUrl);
      return config;
    },
  }
  
});
