import { ENV_VARIABLES } from '@config/env';

const apiLoginUrl = `${ENV_VARIABLES.API_DEV_URL}/auth/login`;
const apiGoogleCallbackUrl = `${ENV_VARIABLES.API_DEV_URL}/auth/google/callback`;
const apiRefreshTokenUrl = `${ENV_VARIABLES.API_DEV_URL}/auth/refresh-token`;
const apiLogoutUrl = `${ENV_VARIABLES.API_DEV_URL}/auth/logout`;
const apiMagicLinkVerificationUrl = `${ENV_VARIABLES.API_DEV_URL}/auth/verify-magic-link`;

export {
	apiGoogleCallbackUrl,
	apiLoginUrl,
	apiLogoutUrl,
	apiMagicLinkVerificationUrl,
	apiRefreshTokenUrl,
};
