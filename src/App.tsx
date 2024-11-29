import { Toaster } from '@components/ui/toast/Toaster';
import { router } from '@lib/router';
import { ThemeProvider } from '@providers/ThemeProvider';
import i18n from '@services/i18n/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

const App = () => {
	i18n.changeLanguage(localStorage.getItem('smart_pantry_lang') || 'en');
	const queryClient = new QueryClient();
	return (
		<Suspense fallback={<div>Main App Loading...</div>}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="light" storageKey="smartpantry-theme">
					<Toaster />
					<RouterProvider router={router} />
				</ThemeProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</Suspense>
	);
};

export default App;
