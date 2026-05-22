import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import { useGames } from "../context/GameContext";
import { useCart } from "../context/CartContext";
import colors from "../themes/colors";
import UserInfo from "./UserInfo";
import Families from "./Families";
import GameCard from "./GameCard";
import GameForm from "./GameForm";
import { FontAwesome } from "@expo/vector-icons";

export default function MainScreen() {
  const { games, clearAllGames } = useGames();
  const { getMarkedCount, getTotalPrice, clearCart } = useCart();
  const [familySelected, setFamilySelected] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  // Filtrado de la lista
  const filteredGames = familySelected 
    ? games.filter(g => g.category === familySelected) 
    : games;

  return (
    <View style={styles.container}>
      <UserInfo />
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{games.length}</Text>
          <Text style={styles.statLabel}>Lo' totaleh</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{getMarkedCount()}</Text>
          <Text style={styles.statLabel}>Ya los has visto payo</Text>
        </View>
        <View style={[styles.statBox, { flex: 1.5 }]}>
          <Text style={styles.statValue}>{getTotalPrice().toFixed(2)}€</Text>
          <Text style={styles.statLabel}>Los totys...</Text>
        </View>
      </View>

      <Families familySelected={familySelected} filterByFamily={setFamilySelected} />
    {/* Si no hay juegos, mostramos un mensaje.*/}
      {games.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="folder-open-o" size={50} color={colors.secondaryFont} />
          <Text style={styles.emptyText}>No hay juegos en tu lista. ¡Añademe uno ahí mi niño bonito!</Text>
        </View>
      ) : (
        <FlatList
          data={filteredGames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <GameCard game={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}

      {/* Botones de Acción Flotantes */}
      <View style={styles.fabContainer}>
        <TouchableOpacity 
          style={[styles.fab, styles.deleteFab, games.length === 0 && styles.disabledFab]} 

          //Error 2

          onPress={() => {
          clearCart();
          clearAllGames();
          }}


          disabled={games.length === 0}
        >
          <FontAwesome name="trash" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
          <FontAwesome name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Modal del Formulario */}
      <Modal visible={isModalVisible} animationType="slide">
        <GameForm closeModal={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: colors.cardBackground,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: colors.secondaryFont,
    fontSize: 10,
    textTransform: "uppercase",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: colors.secondaryFont,
    marginTop: 10,
    textAlign: "center",
  },
  fabContainer: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    gap: 15,
  },
  fab: {
    backgroundColor: colors.accent,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  deleteFab: {
    backgroundColor: colors.deleteButton,
  },
  disabledFab: {
    backgroundColor: "#555",
    opacity: 0.5,
  }
});