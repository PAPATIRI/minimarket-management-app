import SearchSvg from "@/components/svg-components/ScanSvg";
import { Colors } from "@/constants/Colors";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import useButtonBackgroundColor from "@/hooks/useButtonBackgroundColorStyle";
import useTextColor from "@/hooks/useTextColorStyle";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Dimensions, StyleSheet, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");
  const isLogin = true;

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row items-center px-10 justify-between">
        <Text className="text-xl text-slate-700 capitalize">
          {isLogin ? "Selamat datang, Dika" : "Silahkan login"}
        </Text>
        {isLogin ? (
          <AntDesign name="logout" size={22} color={Colors.rose[700]} />
        ) : (
          <Pressable onPress={() => router.push("/(auth)/login")}>
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
