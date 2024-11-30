import { ChefIcon } from '@components/shared/icons';
import { Heading } from '@components/shared/typography/Heading';
import { Typography } from '@components/shared/typography/Typography';
import { LoginForm } from '@features/auth/components/LoginForm';
import VerificationStep from '@features/auth/components/VerificationStep';
import { useAuthStore } from '@features/auth/store';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
	const { t } = useTranslation();
	const { authStep, setAuthStep, setPotentialUserEmail } = useAuthStore();

	const renderStepComponent = () => {
		switch (authStep) {
			case 'get-started':
				return <LoginForm />;
			case 'verification':
				return <VerificationStep />;
			default:
				return null;
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (authStep !== 'get-started') {
			setAuthStep('get-started');
			setPotentialUserEmail(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-col items-center justify-between w-full h-full bg-white lg:flex-row">
			{/* Left Section */}
			<div className="flex flex-col items-center justify-between w-full h-full p-6 lg:w-1/2 bg-gradient-to-b from-primary from-10% via-foreground via-50%">
				<div className="flex flex-col items-center justify-center flex-1 max-w-sm text-center lg:items-start lg:max-w-md lg:text-left">
					<ChefIcon className="mb-4 text-white stroke-1" size={64} />
					<Typography appearance="primary" size="base">
						{t('page.homepage.title')}
					</Typography>
					<Heading weight="bold" className="text-6xl">
						Smart Pantry
					</Heading>
					<Typography size="base" className="mt-2 text-pretty">
						{t('page.homepage.description')}
					</Typography>
				</div>
				<Typography className="hidden lg:flex">
					{t('common.copyright')}
				</Typography>
			</div>

			{/* Right Section */}
			<div className="flex items-center justify-center w-full h-full px-4 lg:w-1/2 bg-gradient-to-t from-primary from-10% via-foreground via-80%">
				{renderStepComponent()}
			</div>
		</div>
	);
};

export default Homepage;
