import RootLayout from '@components/shared/layout/RootLayout';
import AuthWrapper from '@features/auth/components/AuthWrapper';
import Dashboard from '@pages/Dashboard';
import LoginPage from '@pages/LoginPage';
import VerificationPage from '@pages/VerificationPage';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<LoginPage />} />
			<Route path="/auth/verify-magic-link" element={<VerificationPage />} />
			{/* Protected Routes */}
			<Route element={<AuthWrapper />}>
				<Route element={<RootLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Route>
			<Route path="*" element={<div> Not Found Screen </div>} />
		</Route>,
	),
);
