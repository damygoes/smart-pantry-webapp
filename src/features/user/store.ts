import { create } from 'zustand';
import type { User } from './types/user';

interface UserStore {
	user: User | null;
	setUser: (user: User | null) => void;
}

const TestUser: User = {
	id: '1',
	firstName: 'John',
	lastName: 'Doe',
	name: 'John Doe',
	email: 'johndoe@gmail.com',
	profilePicture:
		'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHwy',
};

export const useUserStore = create<UserStore>((set) => ({
	user: TestUser,
	// user: null,
	setUser: (user) => set({ user }),
}));
