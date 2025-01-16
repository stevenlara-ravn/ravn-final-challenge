import { create } from "zustand";

interface TaskSearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useTaskSearchState = create<TaskSearchState>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
