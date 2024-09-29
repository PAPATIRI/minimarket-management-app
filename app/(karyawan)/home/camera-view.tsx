import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { OverlayCamera } from "@/components/OverlayCamera";
import { useNavigation, useRouter } from "expo-router";

export default function CameraViewPage() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState("");

  const colorScheme = useColorScheme();
  const useBackgroundColorStyle = useBackgroundColor();
  const buttonBackgroundColor =
    colorScheme === "dark" ? Colors.dark.background2 : Colors.light.background2;
  const router = useRouter();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={[styles.container, useBackgroundColorStyle]}>
        <Text style={{ textAlign: "center", fontSize: 16, lineHeight: 23 }}>
          aplikasi ini membutuhkan izin untuk mengakses fungsi kamera device
          kamu
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>Beri Izin Akses Kamera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing={"back"}
        onBarcodeScanned={({ data, type }) => {
          console.log("barcode data scanned", data, type);
          setScannedData(data);
          router.push("/");
        }}
      />
      <OverlayCamera />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="arrow-back" size={24} color={Colors.dark.text2} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
