import { create } from 'zustand';

interface SearchStore {
	searchQuery: string | null;
	setSearchQuery: (searchQuery: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
	searchQuery: null,
	setSearchQuery: (searchQuery) => set({ searchQuery }),
}));
