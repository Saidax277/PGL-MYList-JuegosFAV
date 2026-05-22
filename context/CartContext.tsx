import React, { createContext, useState, useContext } from "react";
import { CartGame } from "../types/CartGame";

type CartContextType = {
  cart: CartGame[];
  addToCart: (item: CartGame) => void;
  removeFromCart: (id: string | number[]) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getMarkedCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartGame[]>([]);

  // Marcar un juego

  const addToCart = (item: CartGame) => {
    setCart((prevCart) => {
      // aumentarlo o no si está marcado
      const exists = prevCart.find((g) => g.id === item.id);
      if (exists) return prevCart; 
      return [...prevCart, item];
    });
  };

  // Desmarcar un juego
  const removeFromCart = (id: string | number[]) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Vaciar el recuento de marcados
  const clearCart = () => {
    setCart([]);
  };

  // Cálculo del precio total de lo marcado 
  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + (item.price * (item.count || 1)), 0);
  };

  // Conteo de elementos marcados 
  const getMarkedCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider 
      value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice, getMarkedCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
};