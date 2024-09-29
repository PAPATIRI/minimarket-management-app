import { Colors } from "@/constants/Colors";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import useTextColor from "@/hooks/useTextColorStyle";
import { StyleSheet, Text, View } from "react-native";

export default function ProductItem() {
  const textColorStyle = useTextColor();
  const backgroundColorStyle = useBackgroundColor();

  return (
    <View style={[styles.container, backgroundColorStyle]}>
      <Text style={[styles.productName, textColorStyle]}>
        rokok sampoerna mild isi 16
      </Text>
      <View style={styles.detailProductWrapper}>
        <Text style={styles.productPrice}>Rp 35.000</Text>
        {/* <Text style={[styles.productPrice, textColorStyle]}>Rp 35.000</Text> */}
        <Text style={[styles.productStocks, textColorStyle]}>stok: 200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    gap: 12,
  },
  detailProductWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 16,
    color: Colors.light.tint2,
    fontWeight: "600",
    opacity: 0.9,
  },
  productStocks: {
    fontSize: 16,
    fontWeight: "400",
    opacity: 0.7,
  },
});
