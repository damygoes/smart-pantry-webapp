import { ENV_VARIABLES } from '@config/env';
import { useUserStore } from '@features/user/store';
import axiosClient from '@services/axios/axiosClient';

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
			await axiosClient.post(
				`${ENV_VARIABLES.BASE_URL}/api/v1/auth/refresh-token`,
			);
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

	logout() {
		document.cookie = 'accessToken=; Max-Age=0; path=/'; // Clear accessToken
		document.cookie = 'refreshToken=; Max-Age=0; path=/'; // Clear refreshToken

		const { setUser } = useUserStore.getState();
		setUser(null);

		window.location.href = '/';
	},
};
