import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { OverlayCamera } from "@/components/OverlayCamera";
import { useRouter } from "expo-router";
import Space from "@/components/Space";

export default function CameraViewPage() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState("");

  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 bg-slate-100 p-10 justify-center">
        <Feather
          name="info"
          size={48}
          color={Colors.rose[300]}
          style={{ alignSelf: "center", marginBottom: 10 }}
        />
        <Text className="text-lg text-center text-slate-700">
          aplikasi ini membutuhkan izin untuk mengakses fungsi kamera device
          kamu
        </Text>
        <Space vertical size={48} />
        <Pressable
          className="bg-slate-800 py-4 rounded-full items-center"
          onPress={requestPermission}
        >
          <Text className="text-slate-100 text-lg capitalize">
            Beri Izin Akses Kamera
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="arrow-back" size={24} color={Colors.slate[700]} />
        <Text className="text-2xl font-bold text-slate-700">
          cek harga produk
        </Text>
      </Pressable>
      <View className="rounded-2xl overflow-hidden">
        <CameraView
          style={styles.cameraView}
          facing={"back"}
          onBarcodeScanned={({ data, type }) => {
            setScannedData(data);
          }}
        />
      </View>
      {scannedData && (
        <View className="mt-10">
          <View className="mb-4">
            <Text className="text-lg text-slate-500 capitalize mb-1">
              harga produk
            </Text>
            <Text className="text-4xl text-slate-800 font-bold capitalize">
              Rp 36.000
            </Text>
          </View>
          <View className="mb-4">
            <Text className="text-lg text-slate-500 capitalize mb-1">
              nama produk
            </Text>
            <Text className="text-2xl text-slate-700 capitalize">
              rokok sampurna mild isi 16
            </Text>
          </View>
          <View className="mb-4">
            <Text className="text-lg text-slate-500 capitalize mb-1">
              stok produk
            </Text>
            <Text className="text-2xl text-slate-700">200 Pcs</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cameraView: {
    height: 200,
    width: 350,
    borderRadius: 20,
    overflow: "hidden",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
