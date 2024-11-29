import { ENV_VARIABLES } from '@config/env';
import axios, { AxiosError } from 'axios';

const axiosClient = axios.create({
  baseURL: ENV_VARIABLES.BASE_URL,
  withCredentials: true,            // Ensure cookies are sent with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor to handle 401 errors (unauthorized)
axiosClient.interceptors.response.use(
  (response) => response,  // If the response is successful, return it
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;
      try {
        // Attempt to refresh the access token
        const refreshToken = getCookie('refresh_token');
        if (!refreshToken) {
          return Promise.reject(error);  // If no refresh token is available, reject
        }

        const { data } = await axiosClient.post('/auth/refresh-token', { refreshToken });

        // Update the cookies with new access token
        setCookie('auth_token', data.accessToken);
        
        if (originalRequest) {
          return axiosClient(originalRequest);  // Retry the original request with the new access token
        }
        return Promise.reject(error);
      } catch (refreshError) {
        logout();  // If refreshing fails, log the user out
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Utility to get cookies by name
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

// Utility to set cookies
function setCookie(name: string, value: string, days = 1) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Strict; HttpOnly`;
}

// Utility to clear cookies
function clearCookie(name: string) {
  document.cookie = `${name}=; Max-Age=-99999999; path=/;`;
}

// Logout function to clear cookies
function logout() {
  clearCookie('auth_token');
  clearCookie('refresh_token');
  window.location.href = '/login';  // Redirect to the login page or homepage
}

export default axiosClient;
