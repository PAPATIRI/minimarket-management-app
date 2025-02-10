import {
  ActivityIndicator,
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProductItem from "./ProductItem";
import api from "@/utils/api";
import { useEffect, useRef, useState } from "react";
import { AxiosResponse } from "axios";
import { PaginationData, Product, ProductApiResponse } from "@/utils/types";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

interface ProductListProps {
  searchQuery: string;
}
export default function ProductList({ searchQuery }: ProductListProps) {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [paginationInfo, setPaginationInfo] = useState<Omit<
    PaginationData<Product>,
    "data"
  > | null>(null);
  // ref container heights
  const contentHeight = useRef(0);
  const containerHeight = useRef(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    setCurrentPage(1);
    setProductsData([]);
    setHasMoreData(true);
    getProducts(1);
  }, [searchQuery]);

  useEffect(() => {
    checkIfMoreDataNeeded();
  }, [contentHeight.current, containerHeight.current]);

  const getProducts = async (page = 1) => {
    try {
      setLoading(true);
      const response: AxiosResponse = await api.get<
        ProductApiResponse<Product>
      >(
        `/products?page=${page}${
          searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""
        }`
      );
      console.log("product data: ", response.data.data.data);

      setProductsData(response.data.data.data);

      const { data, ...paginationData } = response.data.data;
      setPaginationInfo(paginationData);

      setHasMoreData(page < response.data.data.last_page);
      setCurrentPage(page);
      setError(null);
    } catch (error) {
      console.error("Error fetching products", error);
      setError("gagal menampilkan data produk");
    } finally {
      setLoading(false);
    }
  };

  const laodMoreProducts = async () => {
    if (loadingMore || !hasMoreData) return;

    try {
      setLoadingMore(true);

      const nextPage = currentPage + 1;
      const response = await api.get<ProductApiResponse<Product>>(
        `/products?page=${nextPage}${
          searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""
        }`
      );

      setProductsData((prev) => [...prev, ...response.data.data.data]);

      const { data, ...paginationData } = response.data.data;
      setPaginationInfo(paginationData);

      setHasMoreData(nextPage < response.data.data.last_page);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("error loading more products", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isEndReached && !loadingMore && hasMoreData) {
      laodMoreProducts();
    }
  };

  const checkIfMoreDataNeeded = () => {
    if (
      !loading &&
      !loadingMore &&
      hasMoreData &&
      contentHeight.current > 0 &&
      containerHeight.current > 0 &&
      contentHeight.current <= containerHeight.current
    ) {
      laodMoreProducts();
    }
  };

  const handleContentSizeChange = (width: number, height: number) => {
    contentHeight.current = height;
    checkIfMoreDataNeeded();
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    containerHeight.current = event.nativeEvent.layout.height;
    checkIfMoreDataNeeded();
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={true}
      style={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      onContentSizeChange={handleContentSizeChange}
      onLayout={handleLayout}
    >
      {productsData.map((productItem) => (
        <ProductItem key={productItem.barcode_produk} product={productItem} />
      ))}
      {loadingMore && (
        <View className="p-4 items-center my-6">
          <ActivityIndicator size={"small"} />
        </View>
      )}
      {!hasMoreData && productsData.length > 0 && (
        <View className="p-4 items-center my-6">
          <Text className="text-lg text-slate-600">
            tidak ada data produk lagi
          </Text>
        </View>
      )}
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
