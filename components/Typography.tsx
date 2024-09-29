import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type TypographyProps = {
  children: ReactNode;
  type: "h1" | "h2" | "h3" | "paragraph";
};

export default function Typography({ children, type }: TypographyProps) {
  return <Text style={styles.textStyle}>{children}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {},
});
