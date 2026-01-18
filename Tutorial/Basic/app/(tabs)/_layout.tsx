import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home Page",
          tabBarIcon: () => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        options={{
          title: "Login Page",
          tabBarIcon: () => (
            <FontAwesome5 name="sign-in-alt" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
