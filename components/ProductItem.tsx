import { Text, View } from "react-native";

export default function ProductItem() {
  return (
    <View className="py-4 mx-10 mb-3 gap-2">
      <Text className="text-lg text-slate-500 capitalize">
        rokok sampoerna mild isi 16
      </Text>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-2xl text-slate-600 font-bold">Rp 35.000</Text>
        <Text className="text-lg text-green-700">200 Pcs</Text>
      </View>
    </View>
  );
}
