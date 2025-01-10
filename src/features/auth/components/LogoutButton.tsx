import { LogoutIcon } from '@components/shared/icons';
import { Button } from '@components/ui/button/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthService } from '../utils/authService';

const LogoutButton = () => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState(false);

	const handleLogout = async () => {
		try {
			setLoading(true);
			await AuthService.logout();
		} catch (error) {
			console.error('Logout failed', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Button
			iconBefore={<LogoutIcon />}
			onClick={handleLogout}
			variant="destructive"
			className="w-full"
			disabled={loading}
			loadingText={t('auth.loggingOut')}
			isLoading={loading}
		>
			{t('auth.logout')}
		</Button>
	);
};

export default LogoutButton;
