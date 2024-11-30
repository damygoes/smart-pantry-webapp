import { apiMagicLinkVerificationUrl } from '@features/auth/constants';
import { useUserStore } from '@features/user/store';
import type { User } from '@features/user/types/user';
import axiosClient from '@services/axios/axiosClient';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const VerificationPage = () => {
	const location = useLocation();
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { setUser } = useUserStore();

	useEffect(() => {
		const verifyMagicLink = async () => {
			const params = new URLSearchParams(location.search); // Parse query string
			const token = params.get('token'); // Get the token from the query string

			if (!token) {
				setMessage(t('verificationStep.invalidLink'));
				return;
			}

			try {
				// Call your backend API to verify the magic link
				const response = await axiosClient.post(apiMagicLinkVerificationUrl, {
					token,
				});

				if (response.status === 200) {
					setMessage(t('verificationStep.success'));
					const user: User = response.data.user;
					setUser(user);
					navigate('/dashboard');
				} else {
					setMessage(t('verificationStep.invalidLink'));
					navigate('/');
				}
				// Redirect or perform further actions
			} catch (error) {
				console.error('Error verifying magic link:', error);
				setMessage(t('verificationStep.invalidLink'));
			}
		};

		verifyMagicLink();
	}, [location.search, navigate, setUser, t]);
	return <div>{message || t('common.verifying')}</div>;
};

export default VerificationPage;
