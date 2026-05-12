import uuid from "react-native-uuid";
import { Game } from "../types/Game";

export const GAMES: Game[] = [
  { id: uuid.v4(), name: "Final Fantasy XV", category: "JRPG", price: 59.99 },
  { id: uuid.v4(), name: "Dead as Disco", category: "Accion", price: 14.50 },
  { id: uuid.v4(), name: "Minecraft", category: "Sandbox", price: 29.95 },
  { id: uuid.v4(), name: "Balatro", category: "Roguelike", price: 13.99 },
  { id: uuid.v4(), name: "Inazuma Eleven Victory Road", category: "Deportes", price: 49.90 },
  { id: uuid.v4(), name: "Counter Strike", category: "Shooter", price: 0.00 }, // Es free to play XD
];