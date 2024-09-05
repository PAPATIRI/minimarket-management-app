import ProductList from "@/components/ProductList";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import useTextColor from "@/hooks/useTextColorStyle";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductPage() {
  const backgroundColorStyle = useBackgroundColor();
  const textColorStyle = useTextColor();

  return (
    <SafeAreaView style={[styles.container, backgroundColorStyle]}>
      <Text style={[styles.title, textColorStyle]}>Daftar Produk</Text>
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    marginHorizontal: 20,
  },
});
