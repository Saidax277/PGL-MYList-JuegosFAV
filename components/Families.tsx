import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { CATEGORIES } from "../data/categories";
import colors from "../themes/colors";

type FamiliesProps = {
  familySelected: string;
  filterByFamily: (category: string) => void;
};

export default function Families({ familySelected, filterByFamily }: FamiliesProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>Filtrar por Género:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity
        // Opción para mostrar todos los juegos sin filtrar por género
          style={[styles.chip, familySelected === "" && styles.chipSelected]}
          onPress={() => filterByFamily("")}
        > 
          <Text style={[styles.chipText, familySelected === "" && styles.chipTextSelected]}>Todos</Text>    
        </TouchableOpacity>

        {CATEGORIES.map((cat) => (
          <TouchableOpacity
          // Se asegura que destaque cada chip seleccionao.
            key={cat.id}
            style={[styles.chip, familySelected === cat.id && styles.chipSelected]}
            onPress={() => filterByFamily(cat.id)}
          >
            <Text style={[styles.chipText, familySelected === cat.id && styles.chipTextSelected]}>
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
  },
  sectionTitle: {
    color: colors.font,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  container: {
    flexDirection: "row",
  },
  chip: {
    backgroundColor: colors.cardBackground,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#333",
  },
  chipSelected: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  chipText: {
    color: colors.secondaryFont,
    fontWeight: "600",
  },
  chipTextSelected: {
    color: "#000",
    fontWeight: "bold",
  },
});