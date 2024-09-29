import SearchSvg from "@/components/svg-components/ScanSvg";
import { Colors } from "@/constants/Colors";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import useButtonBackgroundColor from "@/hooks/useButtonBackgroundColorStyle";
import useTextColor from "@/hooks/useTextColorStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const backgroundColorStyle = useBackgroundColor();
  const buttonBackgroundColorStyle = useButtonBackgroundColor();
  const textColorStyle = useTextColor();
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView style={[styles.container, backgroundColorStyle]}>
      {/* <Text style={[styles.title, textColorStyle]}>Welcome Dika 👋</Text> */}
      <View style={styles.contentWrapper}>
        <View
          style={{
            width: width * 0.6,
            height: height * 0.25,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <SearchSvg />
        </View>
        <TouchableOpacity
          style={[styles.button, buttonBackgroundColorStyle]}
          onPress={() => router.push("/(karyawan)/home/camera-view")}
        >
          <MaterialCommunityIcons
            color={Colors[colorScheme ? colorScheme : "light"].white}
            name="barcode-scan"
            size={24}
          />
          <Text style={styles.buttonText}>Cek Harga Barang</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 200,
    alignItems: "center",
  },
  desc: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 100,
    elevation: 2,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.light.white,
  },
});
