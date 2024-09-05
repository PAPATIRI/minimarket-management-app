import React from "react";
import { Redirect, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

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
          colorscheme === "dark" ? Colors.dark.tint2 : Colors.light.tint2,
        tabBarInactiveTintColor:
          colorscheme === "dark" ? "#fefefe" : Colors.light.tabIconDefault,
        // tabBarActiveBackgroundColor:
        //   colorscheme === "dark" ? Colors.dark.tint2 : Colors.light.tint2,
        tabBarItemStyle: {
          paddingVertical: 10,
          borderRadius: 20,
          marginHorizontal: 30,
        },
        tabBarStyle: {
          backgroundColor:
            colorscheme === "dark"
              ? Colors.dark.background2
              : Colors.light.background2,
          height: 64,
          position: "absolute",
          bottom: 20,
          overflow: "hidden",
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
