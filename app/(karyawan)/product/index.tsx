import FormInput from "@/components/FormInput";
import ProductList from "@/components/ProductList";
import ProductSvg from "@/components/svg-components/ProductSvg";
import { Colors } from "@/constants/Colors";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductPage() {
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View className="py-8 px-10 flex flex-row items-end justify-between">
        <View className="flex flex-row items-end gap-3">
          <Feather name="shopping-bag" size={36} color={Colors.slate[800]} />
          <Text className="text-3xl font-medium text-slate-800">
            Daftar Barang
          </Text>
        </View>
        <Pressable onPress={() => setShowForm(!showForm)}>
          <MaterialIcons name="search" size={32} color={Colors.slate[800]} />
        </Pressable>
      </View>
      {showForm && (
        <View className="mt-4 mx-10">
          <FormInput
            placeholder="cari barang"
            value={query}
            onChangeText={(queryValue) => setQuery(queryValue)}
          />
        </View>
      )}
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.slate[100],
  },
});
