import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { getWelcome } from "../services/authService";
import colors from "../themes/colors";

export default function WelcomeScreen() {
  const router = useRouter();
  const { token, logout } = useAuth();

  const handleWelcome = async () => {
    if (!token) return;
    try {
      const { status, data } = await getWelcome(token);
      if (status === 200) {
        Alert.alert("Bienvenida", data.object);
      } else {
        Alert.alert("Error", "Token inválido o expirado.");
      }
    } catch {
      Alert.alert("Error", "No se pudo conectar con el servidor.");
    }
  };

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/categories/perfil.png")} style={styles.image} />
      <Text style={styles.title}>Mi portfolio</Text>
      <Text style={styles.subtitle}>Bienvenido a mi app</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/lista")}>
        <Text style={styles.buttonText}>Ir a la lista →</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: colors.createButton, marginTop: 12 }]} onPress={handleWelcome}>
        <Text style={styles.buttonText}>Saludo del servidor</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.switchText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.backgroundColor, alignItems: "center", justifyContent: "center", padding: 30 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 30, borderWidth: 2, borderColor: colors.accent },
  title: { fontSize: 28, fontWeight: "bold", color: colors.font, marginBottom: 12 },
  subtitle: { fontSize: 15, color: colors.secondaryFont, textAlign: "center", marginBottom: 40 },
  button: { backgroundColor: colors.accent, paddingHorizontal: 40, paddingVertical: 15, borderRadius: 12, width: "100%", alignItems: "center" },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  switchText: { color: colors.deleteButton, marginTop: 24, fontSize: 14 },
});