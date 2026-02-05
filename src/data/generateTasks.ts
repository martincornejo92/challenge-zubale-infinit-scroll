import { Task } from "./types";

const categories = ["design", "dev", "marketing"];

export function generateTasks(count = 10000): Task[] {
  return Array.from({ length: count }, (_, i) => {
    const id = String(i + 1);
    const category = categories[i % categories.length];

    return {
      id,
      title: `Producto ${id}`,
      price: Math.floor(Math.random() * 500) + 1,
      category,
      distance: Math.floor(Math.random() * 50) + 1,
      image_url: `https://picsum.photos/seed/${id}/300/300`,
    };
  });
}

// Dataset estable (se genera una vez)
export const TASKS: Task[] = generateTasks(10000);
