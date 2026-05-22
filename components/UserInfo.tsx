import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useAuth } from "../context/AuthContext";
import colors from "../themes/colors";
import { FontAwesome } from "@expo/vector-icons";

export default function UserInfo() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>EPA {user}</Text>
        <Text style={styles.subtitle}>Gestioname esta:</Text>
      </View>
      
      <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
        <FontAwesome name="sign-out" size={20} color={colors.deleteButton} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    backgroundColor: colors.cardBackground, 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 15 
  },
  title: { color: colors.accent, fontSize: 18, fontWeight: "bold" },
  subtitle: { color: colors.secondaryFont, fontSize: 12 },
  logoutBtn: { padding: 10 }
});