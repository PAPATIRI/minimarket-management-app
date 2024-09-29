import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function HomeStack() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="camera-view"
        options={{
          headerShown: false,
          title: "Barcode Scanner",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor:
              colorScheme === "dark"
                ? Colors.dark.background2
                : Colors.light.background2,
          },
        }}
      />
    </Stack>
  );
}
