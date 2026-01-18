import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Naim Sheikh</Text>
      <Link
        href="/LoginScreen"
        style={styles.navButton}
      >
        Go to Login Page
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  view:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
  navButton: {
          width: 100,
          height: 20,
          backgroundColor: "lightblue",
          textAlign: "center",
          lineHeight: 20,
          borderRadius: 5,
        }
    
})