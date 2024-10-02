import React from "react";
import { Redirect, Tabs, usePathname } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  const session = false;
  const pathname = usePathname();

  // if (!session) {
  //   return <Redirect href={"/(auth)/login"} />;
  // }

  return (
    <Tabs
      backBehavior={"history"}
      screenOptions={{
        tabBarActiveTintColor: Colors.slate[900],
        tabBarInactiveTintColor: Colors.slate[500],
        tabBarItemStyle: {
          paddingVertical: 10,
          borderRadius: 20,
          marginHorizontal: 20,
        },
        tabBarStyle: {
          backgroundColor: Colors.slate[100],
          height: 64,
          position: "absolute",
          bottom: 20,
          overflow: "hidden",
          borderRadius: 200,
          marginHorizontal: 20,
          display: pathname === "/home/camera-view" ? "none" : "flex",
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
          title: "Cek Harga",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
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
