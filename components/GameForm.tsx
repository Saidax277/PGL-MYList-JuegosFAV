import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useGames } from "../context/GameContext";
import { CATEGORIES } from "../data/categories";
import colors from "../themes/colors";
import uuid from "react-native-uuid";

type GameFormProps = {
  closeModal: () => void;
};

export default function GameForm({ closeModal }: GameFormProps) {
  const { addGame } = useGames();

  // Estados locales para controlar los campos del formulario
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    // 1. Validación de campos vacíos
    if (!name.trim() || !price.trim() || !category) {
      Alert.alert("Campos incompletos", "Por favor, rellena todos los campos antes de guardar.");
      return;
    }

    // 2. Validación de formato de precio numérico válid
    const parsedPrice = parseFloat(price.replace(",", "."));
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      Alert.alert("Precio inválido", "Por favor, introduce un precio numérico que sea válido.");
      return;
    }

    // 3. Crear el nuevo videojuego con un ID único de uuid
    const newGame = {
      id: uuid.v4(),
      name: name.trim(),
      category: category,
      price: parsedPrice,
    };

    // 4. Guardar en el contexto global y cerrar ventana
    addGame(newGame);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Añadele un jueguito al CJ</Text>

      {/* Input de Nombre */}
      <Text style={styles.label}>Dile el nombre del jueguito al CJ:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Elden Ring"
        placeholderTextColor="#666"
        value={name}
        onChangeText={setName}
      />

      {/* Input de Precio */}
      <Text style={styles.label}>Precio (€):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. 59.99"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Selector de Categorías Fijas */}
      <Text style={styles.label}>Selecciona la Categoría:</Text>
      <View style={styles.categoryContainer}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.categoryChip, category === cat.id && styles.categoryChipSelected]}
            onPress={() => setCategory(cat.id)}
          >
            <Text style={[styles.categoryText, category === cat.id && styles.categoryTextSelected]}>
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botones del Formulario */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closeModal}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar Juego</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 25,
    justifyContent: "center",
  },
  title: {
    color: colors.accent,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  label: {
    color: colors.font,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: colors.cardBackground,
    color: colors.font,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: colors.cardBackground,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
  },
  categoryChipSelected: {
    backgroundColor: colors.createButton,
    borderColor: colors.createButton,
  },
  categoryText: {
    color: colors.secondaryFont,
    fontSize: 13,
  },
  categoryTextSelected: {
    color: "#000",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: colors.deleteButton,
  },
  saveButton: {
    backgroundColor: colors.createButton,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});