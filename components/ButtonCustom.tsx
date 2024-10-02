import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";

interface ButtonProps {
  type:
    | "primary"
    | "secondary"
    | "danger"
    | "outlinePrimary"
    | "outlineSecondary"
    | "outlineDanger";
  title: string;
  onPress: () => void;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ type, title, onPress, style }) => {
  const backgroundColor = getBackgroundColor(type);
  const textColor = getTextColor(type);
  const borderColor = getBorderColor(type);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor, borderColor }, style]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const getBorderColor = (type: ButtonProps["type"]) => {
  const colorscheme = useColorScheme();

  switch (type) {
    case "outlinePrimary":
      return Colors[colorscheme ? colorscheme : "light"].text2;
    case "outlineDanger":
      return Colors[colorscheme ? colorscheme : "light"].danger;
    default:
      return "transparent";
  }
};

const getBackgroundColor = (type: ButtonProps["type"]) => {
  const colorscheme = useColorScheme();

  switch (type) {
    case "primary":
      return Colors[colorscheme ? colorscheme : "light"].black;
    case "secondary":
      return Colors[colorscheme ? colorscheme : "light"].icon;
    case "danger":
      return Colors[colorscheme ? colorscheme : "light"].danger;
    case "outlinePrimary":
      return Colors[colorscheme ? colorscheme : "light"].white;
    case "outlineSecondary":
      return Colors[colorscheme ? colorscheme : "light"].white;
    case "outlineDanger":
      return Colors[colorscheme ? colorscheme : "light"].white;
    default:
      return Colors[colorscheme ? colorscheme : "light"].white;
  }
};

const getTextColor = (type: ButtonProps["type"]) => {
  const colorscheme = useColorScheme();

  switch (type) {
    case "primary":
      return Colors[colorscheme ? colorscheme : "light"].white;
    case "secondary":
      return Colors[colorscheme ? colorscheme : "light"].white;
    case "danger":
      return Colors[colorscheme ? colorscheme : "light"].white;
    case "outlinePrimary":
      return Colors[colorscheme ? colorscheme : "light"].black;
    case "outlineSecondary":
      return Colors[colorscheme ? colorscheme : "light"].icon;
    case "outlineDanger":
      return Colors[colorscheme ? colorscheme : "light"].danger;
    default:
      return Colors[colorscheme ? colorscheme : "light"].black;
  }
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
