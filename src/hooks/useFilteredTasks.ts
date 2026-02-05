import { useMemo } from "react";
import { Task } from "../data/types";
import { useFiltersStore } from "../store/useFiltersStore";

export function useFilteredTasks(tasks: Task[]) {
  const { category, sortBy } = useFiltersStore();

return useMemo(() => {
  let result = tasks;

  if (category !== "all") {
    result = result.filter((t) => t.category === category);
  }

  if (sortBy === "price") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sortBy === "newest") {
    result = [...result].sort((a, b) => Number(b.id) - Number(a.id));
  }

  return result;
}, [tasks, category, sortBy]);
}

