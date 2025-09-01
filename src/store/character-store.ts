import { create } from 'zustand';
import { Character, CharacterFilters } from '@/types/api';

interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: string | null;
  filters: CharacterFilters;
  totalPages: number;
  currentPage: number;
  totalResults: number;
  setCharacters: (characters: Character[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: Partial<CharacterFilters>) => void;
  setTotalPages: (pages: number) => void;
  setCurrentPage: (page: number) => void;
  setTotalResults: (total: number) => void;
  resetFilters: () => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  loading: false,
  error: null,
  filters: {
    status: undefined,
    gender: undefined,
    page: 1,
  },
  totalPages: 0,
  currentPage: 1,
  totalResults: 0,
  setCharacters: (characters) => set({ characters }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
      currentPage: 1,
    })),
  setTotalPages: (totalPages) => set({ totalPages }),
  setCurrentPage: (currentPage) => {
    set({ currentPage });
  },
  setTotalResults: (totalResults) => set({ totalResults }),
  resetFilters: () =>
    set({
      filters: {
        status: undefined,
        gender: undefined,
        page: 1,
      },
      currentPage: 1,
      totalResults: 0,
    }),
}));
