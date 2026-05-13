// components/AuthScreen.tsx
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../context/AuthContext";
import colors from "../themes/colors";

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleAuth = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Por favor, rellena todos los campos.");
      return;
    }
    // Aqui iría la lógica real, pero como es una práctica y ademas nuestro maravilloso tutor el señor Herrera nos dijo lo del login dos dias antes de la entrega oficial, pueda daremos por hecho de que está positivamente bien.
    login(email.split("@")[0]); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎮 MyGameList</Text>
      <Text style={styles.title}>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Correo electrónico, pls" 
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña, si no quieres no claro" 
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>{isLogin ? "Entrar" : "Registrarse"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.switchText}>
          {isLogin ? "Marta a 4km --> Regístrate" : "¿Ya has conocido a marta? Logueate"}
        </Text>
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
  switchText: { color: colors.secondaryFont, textAlign: "center", marginTop: 20 }
});