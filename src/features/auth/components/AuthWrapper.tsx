import { useUserStore } from '@features/user/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthWrapper = () => {
	const { user } = useUserStore.getState();
	const location = useLocation();

	if (!user) return <Navigate to="/" state={{ from: location }} replace />;

	return <Outlet />;
};

export default AuthWrapper;
