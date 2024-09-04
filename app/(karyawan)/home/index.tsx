import { Colors } from "@/constants/Colors";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const backgroundColorStyle = useBackgroundColor();
  const colorScheme = useColorScheme();
  const buttonBackgroundColor =
    colorScheme === "dark" ? Colors.dark.background2 : Colors.light.background2;
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, backgroundColorStyle]}>
      <Text style={{ fontSize: 100 }}>🕵️‍♂️</Text>
      <Text style={styles.desc}>scan barcode untuk cek harga barang</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        onPress={() => router.push("/(karyawan)/home/camera-view")}
      >
        <MaterialCommunityIcons
          color={Colors.light.tint2}
          name="barcode-scan"
          size={24}
        />
        <Text style={styles.buttonText}>Scan Barcode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  desc: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    height: 50,
    paddingHorizontal: 64,
    borderRadius: 100,
    elevation: 2,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.light.tint2,
    fontSize: 16,
  },
});
