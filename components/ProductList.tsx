import { ScrollView, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

export default function ProductList() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
    paddingTop: 10,
    paddingBottom: 50,
  },
});
