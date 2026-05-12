import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../themes/colors";

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi listita de jueguitos fav uwu</Text>
      <Text style={styles.subtitle}>Gestor de Recuento de Videojuegos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.accent,
  },
  title: {
    color: colors.accent,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.secondaryFont,
    fontSize: 14,
    marginTop: 4,
  },
});