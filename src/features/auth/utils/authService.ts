import { useUserStore } from '@features/user/store';
import axiosClient from '@services/axios/axiosClient';
import { apiRefreshTokenUrl } from '../constants';
import { logoutUser } from '../requests';

export const AuthService = {
	getAccessToken() {
		// Optionally retrieve from cookies or localStorage
		return document.cookie
			.split('; ')
			.find((row) => row.startsWith('accessToken'))
			?.split('=')[1];
	},

	async refreshAccessToken() {
		try {
			await axiosClient.post(apiRefreshTokenUrl);
			// No need to return anything since tokens are set in cookies
		} catch (error) {
			console.error('Failed to refresh access token:', error);
			throw error;
		}
	},

	getRefreshToken() {
		return document.cookie
			.split('; ')
			.find((row) => row.startsWith('refreshToken'))
			?.split('=')[1];
	},

	setAccessToken(token: string) {
		document.cookie = `accessToken=${token}; path=/; HttpOnly; SameSite=Strict`;
	},

	async logout() {
		try {
			await logoutUser();

			// Clear cookies
			document.cookie = 'accessToken=; Max-Age=0; path=/';
			document.cookie = 'refreshToken=; Max-Age=0; path=/';

			// Update user state
			const { setUser } = useUserStore.getState();
			setUser(null);

			// Redirect to the home page
			window.location.href = '/';
		} catch (error) {
			console.error('Failed to log out:', error);
		}
	},
};
