import { Task } from "./types";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const titles = [
  "Audit Coca-Cola Shelf",
  "Check Pepsi Fridge",
  "Verify Stock",
  "Update Prices",
  "Clean Display",
  "Replace Promo",
];

const addresses = [
  "Walmart Buenavista",
  "Carrefour Palermo",
  "Coto Caballito",
  "Jumbo Unicenter",
  "Dia% Microcentro",
  "Disco Recoleta",
];

export function generateTasks(count: number): Task[] {
  return Array.from({ length: count }).map((_, i) => {
    const price = randomBetween(5, 200);

    return {
      id: `task-${i}`,
      title: titles[randomBetween(0, titles.length - 1)],
      price,
      status: Math.random() > 0.2 ? "available" : "taken",
      location: {
        lat: -34.6 + Math.random() * 0.1,
        lng: -58.4 + Math.random() * 0.1,
        address: addresses[randomBetween(0, addresses.length - 1)],
      },
      image_url: `https://picsum.photos/seed/${i}/300/300`,
      expires_at: new Date(
        Date.now() + randomBetween(1, 60) * 24 * 60 * 60 * 1000
      ).toISOString(),
    };
  });
}

// 🔥 Exportamos 10.000 items
export const TASKS: Task[] = generateTasks(10000);

