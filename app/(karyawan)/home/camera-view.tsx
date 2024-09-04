import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  useColorScheme,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CameraViewPage() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState("");

  const colorScheme = useColorScheme();
  const useBackgroundColorStyle = useBackgroundColor();
  const buttonBackgroundColor =
    colorScheme === "dark" ? Colors.dark.background2 : Colors.light.background2;

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

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <SafeAreaView style={[styles.container, useBackgroundColorStyle]}>
      {scannedData && <Text>data scanned is {scannedData}</Text>}
      <View style={styles.cameraWrapper}>
        <CameraView
          style={styles.camera}
          facing={facing}
          mode="video"
          barcodeScannerSettings={{
            barcodeTypes: [
              "aztec",
              "ean13",
              "ean8",
              "qr",
              "pdf417",
              "upc_e",
              "datamatrix",
              "code39",
              "code93",
              "itf14",
              "codabar",
              "code128",
              "upc_a",
            ],
          }}
          onBarcodeScanned={({ data, type }) => {
            console.log("barcode data scanned", data, type);
            setScannedData(data);
            Alert.alert(
              "data scanned!",
              `type data is ${type} and the data is ${data}`
            );
          }}
        >
          <TouchableOpacity
            style={styles.flipButtonCamera}
            onPress={toggleCameraFacing}
          >
            <MaterialCommunityIcons
              name="camera-flip-outline"
              size={48}
              color={Colors.light.background}
            />
          </TouchableOpacity>
        </CameraView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  cameraWrapper: {
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
    height: "80%",
  },
  camera: {
    width: "100%",
    height: "100%",
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
  flipButtonCamera: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    top: 20,
    right: 20,
  },
});
