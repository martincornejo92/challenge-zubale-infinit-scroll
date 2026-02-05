import { create } from "zustand";

type SortBy = "newest" | "price";
type Category = "all" | "design" | "dev" | "marketing";

type FiltersState = {
  category: Category;
  sortBy: SortBy;
  setCategory: (c: Category) => void;
  setSortBy: (s: SortBy) => void;
};

export const useFiltersStore = create<FiltersState>((set) => ({
  category: "all",
  sortBy: "newest",
  setCategory: (category) => set({ category }),
  setSortBy: (sortBy) => set({ sortBy }),
}));


