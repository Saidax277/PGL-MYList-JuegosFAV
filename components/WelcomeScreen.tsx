import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import colors from "../themes/colors";

export default function WelcomeScreen() {
  // Reutilizamos el login directamente desde aquí para ir al AuthScreen
  const [goLogin, setGoLogin] = React.useState(false);
  
  // Importamos AuthScreen aquí para mostrarlo cuando el usuario pulse
  const AuthScreen = require("./AuthScreen").default;
  if (goLogin) return <AuthScreen />;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/categories/perfil.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Mi app</Text>
      <Text style={styles.subtitle}>
        Práctica de 2DAM a ver si Adri me aprueba uwu
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => setGoLogin(true)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: colors.accent,
  },
  title: {
    fontFamily: undefined,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.font,
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: colors.secondaryFont,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
  },
  button: {
    backgroundColor: colors.accent,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});