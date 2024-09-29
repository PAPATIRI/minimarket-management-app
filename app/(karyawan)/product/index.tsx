import ProductList from "@/components/ProductList";
import ProductSvg from "@/components/svg-components/ProductSvg";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import useTextColor from "@/hooks/useTextColorStyle";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function ProductPage() {
  const backgroundColorStyle = useBackgroundColor();
  const textColorStyle = useTextColor();
  const { width, height } = Dimensions.get("window");
  const [loaded, error] = useFonts({
    "LeagueSpartan-Bold": "./assets/fonts/LeagueSpartan-Bold.ttf",
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      // Alert.alert("failed using custom fonts");
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.container, backgroundColorStyle]}>
      <View style={[styles.header, { height: height * 0.15 }]}>
        <ProductSvg />
        <Text
          style={[
            styles.title,
            textColorStyle,
            { fontFamily: "LeagueSpartan-Bold" },
          ]}
        >
          Daftar Produk
        </Text>
      </View>
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginHorizontal: 10,
    marginBottom: 12,
  },
});
