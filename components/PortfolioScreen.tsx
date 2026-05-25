import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import HobbyCard from "./HobbyCard";
import { HOBBIES } from "../data/hobbies";

export default function PortfolioScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* cabecera */}
      <View style={styles.header}>
        <Image
          source={require("../assets/categories/perfil.png")}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Descripción sobre mí!</Text>
          <Text style={styles.headerDesc}>
            Gomero independiente busca Gomera o lo que surga para noche de pasión
          </Text>
        </View>
      </View>

      {/* Lista de los hobbies */}
      <Text style={styles.sectionTitle}>Cosas Que Me Gustan mucho (a parte de Adri):</Text>

      {HOBBIES.map((hobby) => (
        <HobbyCard key={hobby.id} name={hobby.name} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    padding: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d8d8d8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4,
  },
  headerDesc: {
    fontSize: 12,
    color: "#333",
    lineHeight: 17,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
  },
});