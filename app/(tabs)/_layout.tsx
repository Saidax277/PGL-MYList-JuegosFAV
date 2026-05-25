import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1e1e1e" },
        tabBarActiveTintColor: "#bb86fc",
        tabBarInactiveTintColor: "#b0b0b0",
      }}
    >
      <Tabs.Screen name="lista" options={{ title: "MI LISTA" }} />
      <Tabs.Screen name="portfolio" options={{ title: "MI REPO" }} />
    </Tabs>
  );
}