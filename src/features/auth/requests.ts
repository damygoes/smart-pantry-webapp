import axiosClient from '@services/axios/axiosClient';
import { apiGoogleCallbackUrl, apiLoginUrl, apiLogoutUrl } from './constants';

export const loginUser = async (email: string) => {
	const response = await axiosClient.post(apiLoginUrl, { email });
	return response.data;
};

export const loginUserViaGoogle = async (tokenId: string) => {
	const response = await axiosClient.post(apiGoogleCallbackUrl, { tokenId });
	return response.data;
};

export const logoutUser = async () => {
	const response = await axiosClient.post(apiLogoutUrl);
	return response.data;
};
