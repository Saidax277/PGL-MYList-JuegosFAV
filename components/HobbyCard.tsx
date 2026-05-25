import React from "react";
import { View, Text, StyleSheet } from "react-native";

type HobbyCardProps = {
  name: string;
};

export default function HobbyCard({ name }: HobbyCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaa",
    borderRadius: 6,
    paddingVertical: 14,
    marginBottom: 8,
    alignItems: "center",
    backgroundColor: "#c8c8c8",
  },
  text: {
    color: "#8b0000",
    fontStyle: "italic",
    fontSize: 15,
    fontWeight: "500",
  },
});