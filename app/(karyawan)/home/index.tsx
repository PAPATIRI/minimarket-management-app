import SearchSvg from "@/components/svg-components/ScanSvg";
import { Colors } from "@/constants/Colors";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Pressable,
  Text,
  View,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function HomePage() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");
  const { authState, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const { profile, loading } = useUserProfile();

  const showModalConfirmation = () => {
    setShowModal(true);
  };
  const handleLogoutConfirmation = () => {
    setShowModal(false);
    onLogout();
  };
  const handleCancelLogout = () => {
    setShowModal(false);
  };
  const onLogout = async () => {
    await logout();
    router.replace("/(auth)/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row items-center px-10 justify-between">
        <Text className="text-xl text-slate-700 capitalize">
          Selamat datang, {loading ? "user name" : profile?.name}
        </Text>
        {authState.authenticated ? (
          <Pressable onPress={showModalConfirmation}>
            <AntDesign name="logout" size={22} color={Colors.rose[700]} />
          </Pressable>
        ) : (
          <Pressable onPress={() => router.replace("/(auth)/login")}>
            <AntDesign name="login" size={22} color={Colors.slate[800]} />
          </Pressable>
        )}
      </View>
      <View className="flex-1 items-center justify-center">
        <View
          style={{
            width: width * 0.6,
            height: height * 0.25,
            alignContent: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <SearchSvg />
        </View>
        <Pressable
          className="flex flex-row bg-slate-800 rounded-full py-4 px-20 items-center gap-4"
          onPress={() => router.push("/(karyawan)/home/camera-view")}
        >
          <MaterialCommunityIcons
            color={"white"}
            name="barcode-scan"
            size={24}
          />
          <Text className="text-slate-100 text-lg">Cek Harga Barang</Text>
        </Pressable>
      </View>
      <Modal
        visible={showModal}
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View className="relative flex-1 justify-center items-center bg-slate-900/40">
          <View className="absolute top-50 bottom-50 left-6 right-6 bg-slate-100 p-6 rounded-lg">
            <Text className="text-4xl text-red-600 mb-6 capitalize text-center">
              yakin?
            </Text>
            <Text className="text-xl capitalize text-center text-slate-600">
              Apakah Anda yakin ingin keluar akun?
            </Text>
            <View className="flex-row justify-end gap-6 mt-12">
              <Pressable
                onPress={handleCancelLogout}
                className="bg-slate-300 px-6 rounded-lg py-2"
              >
                <Text className="text-lg text-slate-700">Batal</Text>
              </Pressable>
              <Pressable
                onPress={handleLogoutConfirmation}
                className="bg-red-700 px-8 rounded-lg py-2"
              >
                <Text className="text-lg text-slate-100 capitalize">Ya</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: Colors.slate[100],
  },
});
