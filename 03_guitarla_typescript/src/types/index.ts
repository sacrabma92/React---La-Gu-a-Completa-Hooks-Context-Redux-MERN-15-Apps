import Guitar from "../components/Guitar";

export type Guitar = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
  }

  export type CartItem = Guitar & {
    quantity: number
  }