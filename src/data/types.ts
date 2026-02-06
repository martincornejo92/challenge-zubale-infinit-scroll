export type Task = {
  id: string;
  title: string;
  price: number;
  status: "available" | "taken";
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  image_url: string;
  expires_at: string;
};