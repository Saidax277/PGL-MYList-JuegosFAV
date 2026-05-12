import { ImageSourcePropType } from "react-native";

export type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export const CATEGORIES: Category[] = [
  { id: "JRPG", name: "JRPG", image: require("@/assets/categories/jrpg.png") },
  { id: "Accion", name: "Acción / Indie", image: require("@/assets/categories/action.png") },
  { id: "Sandbox", name: "Sandbox / Survival", image: require("@/assets/categories/sandbox.png") },
  { id: "Roguelike", name: "Roguelike / Cartas", image: require("@/assets/categories/roguelike.png") },
  { id: "Deportes", name: "RPG Deportivo", image: require("@/assets/categories/sports.png") },
  { id: "Shooter", name: "Tactical Shooter", image: require("@/assets/categories/shooter.png") },
];