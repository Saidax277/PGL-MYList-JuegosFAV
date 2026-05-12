export interface CartGame {
  id: string | number[];
  gameName: string;
  count: number;
  price: number;
  totalPrice?: number;
}