import { create } from "zustand";

type SortBy = "newest" | "price";
type PriceFilter = "all" | "lt50" | "50to100" | "gt100";
type DistanceFilter = "all" | "lt2" | "lt5" | "lt10";

type FiltersState = {
  sortBy: SortBy;
  price: PriceFilter;
  distance: DistanceFilter;
  setSortBy: (s: SortBy) => void;
  setPrice: (p: PriceFilter) => void;
  setDistance: (d: DistanceFilter) => void;
};

export const useFiltersStore = create<FiltersState>((set) => ({
  sortBy: "newest",
  price: "all",
  distance: "all",
  setSortBy: (sortBy) => set({ sortBy }),
  setPrice: (price) => set({ price }),
  setDistance: (distance) => set({ distance }),
}));



