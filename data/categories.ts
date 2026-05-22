import { Category } from "../types/Category";

export const CATEGORIES: Category[] = [
  { id: "JRPG", name: "JRPG", image: require("../assets/categories/jrpg.png") },
  { id: "Accion", name: "Acción / Indie", image: require("../assets/categories/action.png") },
  { id: "Sandbox", name: "Sandbox / Survival", image: require("../assets/categories/sandbox.png") },
  { id: "Roguelike", name: "Roguelike / Cartas", image: require("../assets/categories/roguelike.png") },
  { id: "Deportes", name: "Deportes / Carreras", image: require("../assets/categories/sports.png") },
  { id: "Shooter", name: "Shooter / FPS", image: require("../assets/categories/shooter.png") },
];