import { useTranslation } from 'react-i18next';

const Dashboard = () => {
	const { t } = useTranslation();
	return <div>{t('page.title')}</div>;
};

export default Dashboard;
