import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { GamesProvider } from "../context/GameContext";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <GamesProvider>
        <CartProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </CartProvider>
      </GamesProvider>
    </AuthProvider>
  );
}