import React, { createContext, useState, useContext } from "react";
import { Game } from "../types/Game";
import { GAMES } from "../data/games";

type GameContextType = {
  games: Game[];
  addGame: (newGame: Game) => void;
  deleteGame: (id: string | number[]) => void;
  clearAllGames: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GamesProvider = ({ children }: { children: React.ReactNode }) => {
    // Estado para almacenar los juegos
  const [games, setGames] = useState<Game[]>(GAMES);

  // Función para añadir un juego
  const addGame = (newGame: Game) => {
    setGames((prevGames) => [...prevGames, newGame]);
  };

  // Función para borrar un juego individual
  const deleteGame = (id: string | number[]) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  // Función para borrar todos los juegos
  const clearAllGames = () => {
    setGames([]);
  };

  return (
    <GameContext.Provider value={{ games, addGame, deleteGame, clearAllGames }}>
      {children}
    </GameContext.Provider>
  );
};

// Hook personalizado
export const useGames = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGames debe usarse dentro de un GamesProvider");
  return context;
};