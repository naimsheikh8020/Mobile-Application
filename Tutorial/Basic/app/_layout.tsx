import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home Page" }} />
      <Stack.Screen name="LoginScreen" options={{ title: "Login Page" }} />
    </Stack>
    </>
  );
}
