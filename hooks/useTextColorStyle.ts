import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors"; // Import your Colors constants
import { StyleSheet } from "react-native";

const useTextColor = () => {
  const colorScheme = useColorScheme();

  const backgroundColorStyle =
    colorScheme === "dark"
      ? styles.darkModeTextColor
      : styles.lightModeTextColor;

  return backgroundColorStyle;
};

const styles = StyleSheet.create({
  darkModeTextColor: {
    backgroundColor: Colors.dark.text2,
  },
  lightModeTextColor: {
    backgroundColor: Colors.light.text2,
  },
});

export default useTextColor;
