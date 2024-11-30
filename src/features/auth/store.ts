import { create } from 'zustand';
import type { AuthStep } from './types';

interface AuthStore {
	potentialUserEmail: string | null;
	setPotentialUserEmail: (email: string | null) => void;
	authStep: AuthStep;
	setAuthStep: (authStep: AuthStep) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	potentialUserEmail: null,
	setPotentialUserEmail: (email) => set({ potentialUserEmail: email }),
	authStep: 'get-started',
	setAuthStep: (authStep) => set({ authStep }),
}));
