import React from "react";
import { GamesProvider } from "./context/GameContext";
import { CartProvider } from "./context/CartContext";
import MainScreen from "./components/MainScreen"; 

export default function App() {
  return (
    <GamesProvider>
      <CartProvider>
        <MainScreen />
      </CartProvider>
    </GamesProvider>
  );
}