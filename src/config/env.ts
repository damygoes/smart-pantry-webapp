export const ENV_VARIABLES = {
  BASE_URL: import.meta.env.VITE_ENV === 'production' 
    ? import.meta.env.VITE_PROD_BASE_URL 
    : import.meta.env.VITE_DEV_BASE_URL,
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  CHROMATIC_PROJECT_TOKEN: import.meta.env.VITE_CHROMATIC_PROJECT_TOKEN,
};
