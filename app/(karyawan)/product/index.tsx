import FormInput from "@/components/FormInput";
import ProductList from "@/components/ProductList";
import { Colors } from "@/constants/Colors";
import useDebounce from "@/hooks/useDebounce";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductPage() {
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  return (
    <SafeAreaView style={styles.container}>
      <View className="py-8 px-10 flex flex-row items-end justify-between">
        <View className="flex flex-row items-center justify-between gap-3">
          <View className="relative flex flex-row items-center flex-1 gap-3 py-2">
            <Feather name="shopping-bag" size={36} color={Colors.slate[600]} />
            <Text className="text-3xl text-slate-600">Daftar Barang</Text>
            {showForm && (
              <View className="absolute top-0 left-0 right-0 z-50">
                <TextInput
                  className="bg-slate-100 border border-slate-300 text-lg p-3 rounded-xl"
                  placeholder="ketik nama atau barcode barang"
                  placeholderTextColor={Colors.slate[400]}
                  value={query}
                  onChangeText={(queryValue) => setQuery(queryValue)}
                />
              </View>
            )}
          </View>
          <Pressable onPress={() => setShowForm(!showForm)} className=" p-1">
            {showForm ? (
              <MaterialIcons name="close" size={32} color={Colors.slate[500]} />
            ) : (
              <MaterialIcons
                name="search"
                size={32}
                color={Colors.slate[500]}
              />
            )}
          </Pressable>
        </View>
      </View>
      <ProductList searchQuery={debouncedQuery} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.slate[100],
  },
});
