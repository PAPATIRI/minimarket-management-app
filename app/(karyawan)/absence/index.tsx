import AbsenceAtandence from "@/components/AbsenceAtandence";
import AtandenceList from "@/components/AtandenceList";
import { Colors } from "@/constants/Colors";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AbsencePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="py-8 px-10 flex flex-row items-end justify-between">
        <View className="flex flex-row items-end gap-3">
          <Feather name="calendar" size={36} color={Colors.slate[800]} />
          <Text className="text-3xl font-medium text-slate-800">Absensi</Text>
        </View>
      </View>
      <View className="bg-slate-100 flex-1 px-10 pb-10 pt-4">
        <View className="flex flex-row gap-2 items-center mb-4">
          <MaterialIcons name="today" size={16} color={Colors.slate[500]} />
          <Text className="text-base text-slate-600">
            Minggu, 26 September 2024
          </Text>
        </View>
        <View className="mb-8">
          <AbsenceAtandence />
        </View>
        <Text className="text-xl text-slate-600 capitalize mb-3">
          riwayat absensi
        </Text>
        <AtandenceList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.slate[100],
  },
});
