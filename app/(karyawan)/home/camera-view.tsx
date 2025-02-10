import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Space from "@/components/Space";
import { Product } from "@/utils/types";
import api from "@/utils/api";
import { formatToRupiah } from "@/utils/numberFormatter";

export default function CameraViewPage() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [productData, setProductData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [canScan, setCanScan] = useState(true);

  const router = useRouter();

  const fetchProductData = async (barcode_product: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get(`/products/${barcode_product}`);
      setProductData(response.data.data);
    } catch (error) {
      setError("produk tidak ditemukan");
      setProductData(null);
      setCanScan(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBarcodeScanned = async ({ data }: { data: string }) => {
    if (canScan && !isLoading) {
      setCanScan(false);
      setScannedData(data);
      await fetchProductData(data);
    }
  };

  const handleReset = () => {
    setCanScan(true);
    setScannedData(null);
    setProductData(null);
    setError(null);
  };

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
          onBarcodeScanned={handleBarcodeScanned}
        />
      </View>
      <View className="flex-1 mt-6 justify-center">
        {isLoading ? (
          <Text className="text-xl text-slate-500 text-center">
            mengambil data produk...
          </Text>
        ) : error ? (
          <View className="flex-1 justify-center px-4">
            <Text className="text-xl capitalize text-red-600 mb-12 text-center">
              {error}
            </Text>
            <Pressable
              className="bg-slate-800 py-3 rounded-full items-center"
              onPress={handleReset}
            >
              <Text className="text-slate-100 text-lg">Scan Ulang</Text>
            </Pressable>
          </View>
        ) : !scannedData ? (
          <Text className="text-xl capitalize text-slate-700 text-center">
            silahkan scan barcode produk
          </Text>
        ) : productData ? (
          <View className="px-4 flex-1 justify-around">
            <View className="gap-4">
              <View className="mb-6">
                <Text className="text-lg text-slate-500 capitalize mb-2">
                  harga produk
                </Text>
                <Text className="text-4xl text-slate-800 font-bold capitalize">
                  {formatToRupiah(productData.harga_jual_produk)}
                </Text>
              </View>
              <View>
                <Text className="text-lg text-slate-500 capitalize mb-0.5">
                  nama produk
                </Text>
                <Text className="text-2xl text-slate-700 capitalize">
                  {productData.nama_produk}
                </Text>
              </View>
              <View>
                <Text className="text-lg text-slate-500 capitalize mb-0.5">
                  stok produk
                </Text>
                <Text className="text-2xl text-slate-700">
                  {productData.stok_produk}
                </Text>
              </View>
            </View>
            <Pressable
              className="bg-slate-800 py-3 rounded-full items-center mt-4"
              onPress={handleReset}
            >
              <Text className="text-slate-100 text-lg">Scan Produk Lain</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cameraView: {
    height: 300,
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
