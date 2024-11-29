import { DashboardIcon } from '@components/shared/icons';
import type { NavItem } from '@interfaces/NavItem';
import { useTranslation } from 'react-i18next';

export const MainNavigationLinks = () => {
	const { t } = useTranslation();

	const data: NavItem[] = [
		{
			name: t('navigation.dashboard', 'Dashboard'),
			url: '/dashboard',
			icon: DashboardIcon,
		},
	];

	return data;
};
