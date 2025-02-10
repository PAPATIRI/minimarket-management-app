import { formatToRupiah } from "@/utils/numberFormatter";
import { Product } from "@/utils/types";
import { Text, View } from "react-native";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <View className="py-4 mx-10 mb-3 gap-2">
      <Text className="text-lg text-slate-500 capitalize">
        {product.nama_produk}
      </Text>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-2xl text-slate-600 font-bold">
          {formatToRupiah(product.harga_jual_produk)}
        </Text>
        <Text className="text-lg text-green-700">
          {product.stok_produk} pcs
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
