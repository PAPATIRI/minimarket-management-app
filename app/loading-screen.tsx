import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function LoadingScreen() {
  const { authState } = useAuth();

  useEffect(() => {
    if (!authState.loading) {
      if (authState.authenticated) {
        router.replace("/(karyawan)");
      } else {
        router.replace("/(auth)/login");
      }
    }
  }, [authState]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
  );
}
