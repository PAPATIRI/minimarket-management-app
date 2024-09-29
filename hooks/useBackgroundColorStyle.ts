import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors"; // Import your Colors constants
import { StyleSheet } from "react-native";

const useBackgroundColor = () => {
  const colorScheme = useColorScheme();

  const backgroundColorStyle =
    colorScheme === "dark"
      ? styles.darkModeBackground
      : styles.lightModeBackground;

  return backgroundColorStyle;
};

const styles = StyleSheet.create({
  darkModeBackground: {
    backgroundColor: Colors.dark.background2,
  },
  lightModeBackground: {
    backgroundColor: Colors.light.background,
  },
});

export default useBackgroundColor;
