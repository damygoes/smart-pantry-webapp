import { Heading } from '@components/shared/typography/Heading';
import { Typography } from '@components/shared/typography/Typography';
import { Button } from '@components/ui/button/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@components/ui/card/Card';
import { Input } from '@components/ui/input/Input';
import { Label } from '@components/ui/label/Label';
import { Separator } from '@components/ui/separator/Separator';
import { QueryKeys } from '@constants/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { loginUser, loginUserViaGoogle } from '../requests';
import { useAuthStore } from '../store';
// import { GoogleLogin, type GoogleLoginResponse, type GoogleLoginResponseOffline } from 'react-google-login';

export function LoginForm() {
	const queryClient = useQueryClient();
	const { t } = useTranslation();
	const { setAuthStep, setPotentialUserEmail } = useAuthStore();

	const [email, setEmail] = useState('');
	const [error, setError] = useState<string | null>(null);

	const emailSchema = z.string().email({ message: 'Invalid email address' });

	const loginMutation = useMutation({
		mutationFn: loginUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QueryKeys.USER] });
			setAuthStep('verification');
		},
		onError: (err) => {
			console.error(err);
			setError('Error sending magic link. Please try again.');
		},
	});

	const handleEmailLogin = async () => {
		try {
			// Validate email on form submission
			emailSchema.parse(email);
			setError(null);
			setPotentialUserEmail(email);
			await loginMutation.mutateAsync(email);
		} catch (err) {
			if (err instanceof z.ZodError) {
				setError(err.errors[0].message);
			} else {
				console.error(err);
			}
		}
	};

	// Handle Google login
	const handleGoogleLogin = async (response: { tokenId: string }) => {
		const { tokenId } = response;
		try {
			setError(null);
			const googleResponse = await loginUserViaGoogle(tokenId);
			alert('Google login successful');
			console.log(googleResponse.data);
		} catch (err) {
			setError('Google login failed');
			console.error(err);
		}
	};

	const handleInputChange = (value: string) => {
		setEmail(value);

		// Validate the email as the user types
		try {
			emailSchema.parse(value);
			setError(null);
		} catch (err) {
			if (err instanceof z.ZodError) {
				setError(err.errors[0].message); // Set error if invalid
			}
		}
	};

	return (
		<Card className="w-3/5 lg:w-1/2 mx-auto space-y-6 bg-[inherit] shadow-none h-full lg:h-auto">
			<CardHeader>
				<CardTitle className="hidden lg:flex">
					<Heading size="2xl" weight="bold">
						{t('loginForm.title')}
					</Heading>
				</CardTitle>
				<CardDescription className="hidden lg:flex">
					{t('loginForm.description')}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-8">
					<div className="grid gap-2">
						<Label htmlFor="email">{t('loginForm.email')}</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							required
							validationError={!!error}
							value={email}
							onChange={(e) => handleInputChange(e.target.value)}
						/>
						{error && (
							<Typography size="xs" appearance="destructive">
								{error}
							</Typography>
						)}
					</div>
					<Button
						className="w-full"
						onClick={handleEmailLogin}
						disabled={Boolean(error) || !email}
						isLoading={loginMutation.isPending}
						loadingText={t('common.processing')}
					>
						{t('loginForm.continueWithEmail')}
					</Button>

					<div className="flex items-center justify-center w-full gap-2 overflow-hidden">
						<Separator className="w-2/5" />
						<Typography>or</Typography>
						<Separator className="w-2/5" />
					</div>
					<Button
						variant="outline"
						className="w-full"
						onClick={() => handleGoogleLogin({ tokenId: '' })}
					>
						{t('loginForm.continueWithGoogle')}
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

//         <GoogleLogin
//           clientId={ENV_VARIABLES.GOOGLE_CLIENT_ID} // Replace with your Google client ID
//           buttonText="Login with Google"
//           onSuccess={(response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
//             if ('tokenId' in response) {
//               handleGoogleLogin({ tokenId: response.tokenId });
//             }
//           }}
//           onFailure={(error) => console.log('Google login error:', error)}
//           cookiePolicy="single_host_origin"
//         />
