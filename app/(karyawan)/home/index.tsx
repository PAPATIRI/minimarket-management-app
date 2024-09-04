import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const backgroundColorStyle = useBackgroundColor();

  return (
    <SafeAreaView style={[styles.container, backgroundColorStyle]}>
      <View>
        <Text>homepage karyawan</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
});
