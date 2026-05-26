import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/authService";
import colors from "../themes/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
  if (!email.trim() || !password.trim()) {
    Alert.alert("Error", "Rellena todos los campos.");
    return;
  }

  if (!email.includes("@")) {
    Alert.alert("Error", "El correo necesita una @.");
    return;
  }

  try {
    const { status, data } = await loginUser(email, password);

    if (data.statusCode === 200) {
      await login(data.object.email.split("@")[0], data.object.token);
      router.replace("/(tabs)/lista");
    } else if (status === 401) {
      Alert.alert("Error", "Email o contraseña incorrectos.");
    } else {
      Alert.alert("Error", `Code: ${status} - ${JSON.stringify(data)}`);
    }
  } catch (e) {
    Alert.alert("Error", "No se pudo conectar con el servidor.");
  }
};

  return (  
    <View style={styles.container}>
      <Text style={styles.logo}>MyGameList</Text>
      <Text style={styles.title}>Iniciar Sesión</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.switchText}>¿No tienes cuenta? Regístrate</Text>
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