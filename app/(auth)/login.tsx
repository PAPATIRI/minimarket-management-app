import { Colors } from "@/constants/Colors";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import { StyleSheet, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  const backgroundColorStyle = useBackgroundColor();

  return (
    <SafeAreaView style={[styles.container, backgroundColorStyle]}>
      <Text>login page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkModeBackground: {
    backgroundColor: Colors.dark.background2,
  },
  lightModeBackground: {
    backgroundColor: Colors.light.background2,
  },
});
