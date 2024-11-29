import { LogoutIcon } from '@components/shared/icons';
import { Button } from '@components/ui/button/Button';
import { useTranslation } from 'react-i18next';
import { AuthService } from '../utils/authService';

const LogoutButton = () => {
	const { t } = useTranslation();
	const handleLogout = () => {
		AuthService.logout();
	};

	return (
		<Button
			iconBefore={<LogoutIcon />}
			onClick={handleLogout}
			variant="destructive"
			className="w-full"
		>
			{t('auth.logout', 'Logout')}
		</Button>
	);
};

export default LogoutButton;
