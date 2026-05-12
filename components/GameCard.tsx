import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Game } from "../types/Game";
import { CATEGORIES } from "../data/categories";
import { useCart } from "../context/CartContext";
import { useGames } from "../context/GameContext";
import colors from "../themes/colors";
import { FontAwesome } from "@expo/vector-icons";

export default function GameCard({ game }: { game: Game }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const { deleteGame } = useGames();

  // Verificamos si este juego está "marcado"
  const isMarked = cart.some((item) => item.id === game.id);

  // Buscamos la imagen de la categoría
  const categoryData = CATEGORIES.find((cat) => cat.id === game.category);

  const toggleMarked = () => {
    if (isMarked) {
      removeFromCart(game.id);
    } else {
      addToCart({
        id: game.id,
        gameName: game.name,
        price: game.price,
        count: 1
      });
    }
  };

  return (
    <View style={[styles.card, isMarked && styles.cardMarked]}>
      <Image source={categoryData?.image} style={styles.image} />
      
      <View style={styles.info}>
        <Text style={styles.name}>{game.name}</Text>
        <Text style={styles.category}>{game.category}</Text>
        <Text style={styles.price}>{game.price.toFixed(2)}€</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={toggleMarked} style={styles.iconButton}>
          <FontAwesome 
            name={isMarked ? "check-circle" : "circle-thin"} 
            size={24} 
            color={isMarked ? colors.createButton : colors.secondaryFont} 
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteGame(game.id)} style={styles.iconButton}>
          <FontAwesome name="trash" size={24} color={colors.deleteButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
  },
  cardMarked: {
    borderColor: colors.createButton,
    opacity: 0.9,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    color: colors.font,
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    color: colors.secondaryFont,
    fontSize: 12,
  },
  price: {
    color: colors.accent,
    fontWeight: "bold",
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
});