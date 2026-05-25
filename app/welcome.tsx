import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../themes/colors";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/categories/perfil.png")} style={styles.image} />
      <Text style={styles.title}>Mi portfolio</Text>
      <Text style={styles.subtitle}>Bienvenido a mi app guapisimo</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
        <Text style={styles.buttonText}>Entrar →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.backgroundColor, alignItems: "center", justifyContent: "center", padding: 30 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 30, borderWidth: 2, borderColor: colors.accent },
  title: { fontSize: 28, fontWeight: "bold", color: colors.font, marginBottom: 12 },
  subtitle: { fontSize: 15, color: colors.secondaryFont, textAlign: "center", marginBottom: 40 },
  button: { backgroundColor: colors.accent, paddingHorizontal: 40, paddingVertical: 15, borderRadius: 12 },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
});