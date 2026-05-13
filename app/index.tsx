import React from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { GamesProvider } from "../context/GameContext";
import { CartProvider } from "../context/CartContext";
import MainScreen from "../components/MainScreen";
import AuthScreen from "../components/AuthScreen";

function RootNavigation() {
  const { user } = useAuth();
  // Si no usuario, Login, si sí usuarios, página principal.
  return user ? <MainScreen /> : <AuthScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <GamesProvider>
        <CartProvider>
          <RootNavigation />
        </CartProvider>
      </GamesProvider>
    </AuthProvider>
  );
}


// npx expo start -c