import React from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../themes/colors"; 

export default function UserInfo() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>EPA {user}</Text>
        <Text style={styles.subtitle}>Gestioname esta:</Text>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
        <FontAwesome name="sign-out" size={20} color={colors.deleteButton} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: colors.cardBackground, padding: 20, borderRadius: 12, marginBottom: 15 },
  title: { color: colors.accent, fontSize: 18, fontWeight: "bold" },
  subtitle: { color: colors.secondaryFont, fontSize: 12 },
  logoutBtn: { padding: 10 },
});