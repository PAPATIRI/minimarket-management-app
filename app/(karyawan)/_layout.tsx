import React from "react";
import { Redirect, Tabs } from "expo-router";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ImageBackground, useColorScheme, View } from "react-native";

export default function TabLayout() {
  const session = true;
  const colorscheme = useColorScheme();

  if (!session) {
    return <Redirect href={"/(auth)/login"} />;
  }

  return (
    <Tabs
      backBehavior={"history"}
      screenOptions={{
        tabBarActiveTintColor:
          colorscheme === "dark"
            ? Colors.dark.background2
            : Colors.light.background2,
        tabBarInactiveTintColor:
          colorscheme === "dark"
            ? Colors.dark.background2
            : Colors.light.tabIconDefault,
        tabBarActiveBackgroundColor:
          colorscheme === "dark" ? Colors.dark.tint2 : Colors.light.tint2,
        tabBarItemStyle: {
          paddingVertical: 10,
          borderRadius: 200,
          position: "relative",
        },
        tabBarStyle: {
          backgroundColor:
            colorscheme === "dark"
              ? Colors.dark.background2
              : Colors.light.background2,
          height: 72,
          position: "absolute",
          bottom: 20,
          borderRadius: 200,
          marginHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen name={"index"} options={{ href: null }} />
      <Tabs.Screen
        name="product"
        options={{
          title: "Barang",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Beranda",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="absence"
        options={{
          title: "Absen",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user-check" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
