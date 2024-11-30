import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { User } from './types/user';

interface UserStore {
	user: User | null;
	setUser: (user: User | null) => void;
}

// Apply the persist middleware correctly with type-safe storage
export const useUserStore = create<UserStore>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => {
				set({ user });
			},
		}),
		{
			name: 'user-storage', // The key to store the state in localStorage
			storage: createJSONStorage(() => localStorage), // Ensures we're using the browser's localStorage
			onRehydrateStorage: () => {},
		},
	),
);
