import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { registerUser } from "../services/authService";
import colors from "../themes/colors";

export default function RegisterScreen() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!fullname.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Rellena todos los campos.");
      return;
    }
    if (!email.includes("@")) {
      Alert.alert("Error", "El correo necesita una @.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "La contraseña necesita al menos 6 caracteres.");
      return;
    }

    try {
      const { status, data } = await registerUser(fullname, email, password);

      if (data.statusCode === 200) {
        Alert.alert("¡Hecho!", "Registro exitoso. Ahora inicia sesión.", [
    { text: "OK", onPress: () => router.replace("/login") },
        ]);
      } else if (data.statusCode === 409) {
        Alert.alert("Error", "Ya existe una cuenta con ese email.");
      } else {
        Alert.alert("Error", "Algo salió mal. Inténtalo de nuevo.");
      }
    }
      catch (error) {
      Alert.alert("Error", "No se pudo conectar con el servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyGameList</Text>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor="#666"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.switchText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.backgroundColor, justifyContent: "center", padding: 20 },
  logo: { color: colors.accent, fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 40 },
  title: { color: "#fff", fontSize: 20, marginBottom: 20, textAlign: "center" },
  input: { backgroundColor: colors.cardBackground, color: "#fff", padding: 15, borderRadius: 10, marginBottom: 15 },
  button: { backgroundColor: colors.accent, padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  switchText: { color: colors.secondaryFont, textAlign: "center", marginTop: 20 },
});