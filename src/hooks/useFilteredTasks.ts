import { useMemo } from "react";
import { Task } from "../data/types";
import { useFiltersStore } from "../store/useFiltersStore";

const USER_LOCATION = { lat: -34.6, lng: -58.4 };

function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const dx = a.lat - b.lat;
  const dy = a.lng - b.lng;
  return Math.sqrt(dx * dx + dy * dy) * 111; // aprox km
}

export function useFilteredTasks(tasks: Task[]) {
  const { sortBy, price, distance } = useFiltersStore();

  return useMemo(() => {
    let result = tasks;

    // 💰 Filtro por precio
    if (price !== "all") {
      result = result.filter((t) => {
        if (price === "lt50") return t.price < 50;
        if (price === "50to100") return t.price >= 50 && t.price <= 100;
        if (price === "gt100") return t.price > 100;
        return true;
      });
    }

    // 📍 Filtro por distancia
    if (distance !== "all") {
      result = result.filter((t) => {
        const d = distanceKm(USER_LOCATION, t.location);
        if (distance === "lt2") return d < 2;
        if (distance === "lt5") return d < 5;
        if (distance === "lt10") return d < 10;
        return true;
      });
    }

    // 🔃 Orden
    if (sortBy === "price") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) =>
        b.expires_at.localeCompare(a.expires_at)
      );
    }

    return result;
  }, [tasks, sortBy, price, distance]);
}


