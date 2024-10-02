import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function AbsenceAtandence() {
  return (
    <View className="gap-2">
      <View className="flex flex-row gap-2">
        <View className="flex-1 bg-green-500/10 gap-3 p-4 rounded-xl">
          <View className="flex flex-row gap-3 items-center">
            <MaterialCommunityIcons
              name="arrow-bottom-left-thin-circle-outline"
              size={32}
              color={Colors.green[600]}
            />
            <Text className="text-2xl text-slate-800 font-bold capitalize">
              07:00
            </Text>
          </View>
          <Text className="text-lg font-medium text-green-900 capitalize">
            sudah Absen
          </Text>
        </View>
        <View className="flex-1 bg-slate-200 gap-3 p-4 rounded-xl">
          <View className="flex flex-row gap-3 items-center">
            <MaterialCommunityIcons
              name="arrow-top-right-thin-circle-outline"
              size={32}
              color={Colors.rose[600]}
            />
            <Text className="text-2xl text-slate-800 font-bold capitalize">
              12:00
            </Text>
          </View>
          <Text className="text-lg font-medium text-slate-600">
            Belum Absen
          </Text>
        </View>
      </View>
      <View className="flex flex-row gap-2">
        <View className="flex-1 bg-slate-200 gap-3 p-4 rounded-xl">
          <View className="flex flex-row gap-3 items-center">
            <MaterialCommunityIcons
              name="arrow-bottom-left-thin-circle-outline"
              size={32}
              color={Colors.green[600]}
            />
            <Text className="text-2xl text-slate-800 font-bold capitalize">
              13:00
            </Text>
          </View>
          <Text className="text-lg font-medium text-slate-600">
            Belum Absen
          </Text>
        </View>
        <View className="flex-1 bg-slate-200 gap-3 p-4 rounded-xl">
          <View className="flex flex-row gap-3 items-center">
            <MaterialCommunityIcons
              name="arrow-top-right-thin-circle-outline"
              size={32}
              color={Colors.rose[600]}
            />
            <Text className="text-2xl text-slate-800 font-bold capitalize">
              17:00
            </Text>
          </View>
          <Text className="text-lg font-medium text-slate-600">
            Belum Absen
          </Text>
        </View>
      </View>
    </View>
  );
}
