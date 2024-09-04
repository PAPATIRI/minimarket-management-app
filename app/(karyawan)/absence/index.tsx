import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AbsencePage() {
  const backgroundColorStyle = useBackgroundColor();

  return (
    <SafeAreaView style={[styles.container, backgroundColorStyle]}>
      <View>
        <Text>absensi page karyawan</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
