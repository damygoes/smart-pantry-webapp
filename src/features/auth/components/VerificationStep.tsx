import { ChefIcon } from '@components/shared/icons';
import { Heading } from '@components/shared/typography/Heading';
import { Typography } from '@components/shared/typography/Typography';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store';

const VerificationStep = () => {
	const { t } = useTranslation();
	const { potentialUserEmail } = useAuthStore();
	return (
		<div className="flex flex-col items-center p-6 space-y-4 text-center">
			<Heading size="lg" weight="bold" className="text-primary">
				{t('verificationStep.title')}
			</Heading>
			<Typography size="base">
				{t('verificationStep.description', { email: potentialUserEmail })}
			</Typography>
			<Typography size="base">{t('verificationStep.cta')}</Typography>
			<ChefIcon className="mt-4 text-white stroke-1" size={48} />
		</div>
	);
};

export default VerificationStep;
