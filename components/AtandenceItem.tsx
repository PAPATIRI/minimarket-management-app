import { Text, View } from "react-native";

type AtandenceItemProps = {
  date: string;
  day: string;
};

export default function AtandenceItem({ date, day }: AtandenceItemProps) {
  return (
    <View className="flex flex-row mb-8">
      <View className="bg-slate-700 justify-center items-center p-8 rounded-3xl">
        <Text className="text-4xl font-bold text-slate-200">{date}</Text>
        <Text className="text-lg font-medium text-slate-300 capitalize">
          {day}
        </Text>
      </View>
      <View className="flex-1 gap-4">
        <View className="flex-1 gap-3">
          <View className="flex flex-row gap-2">
            <View className="items-center justify-center flex-1">
              <Text className="text-xl font-bold mb-1 text-slate-600">
                07.00
              </Text>
              <Text className="text-base text-green-700 font-medium">
                Sudah Absen
              </Text>
            </View>
            <View className="items-center justify-center flex-1">
              <Text className="text-xl font-bold mb-1 text-slate-600">
                12.00
              </Text>
              <Text className="text-base text-slate-500 font-medium">
                Tidak Absen
              </Text>
            </View>
          </View>
          <View className="flex flex-row gap-2">
            <View className="items-center justify-center flex-1">
              <Text className="text-xl font-bold mb-1 text-slate-600">
                13.00
              </Text>
              <Text className="text-base text-slate-500 font-medium">
                Tidak Absen
              </Text>
            </View>
            <View className="items-center justify-center flex-1">
              <Text className="text-xl font-bold mb-1 text-slate-600">
                17.00
              </Text>
              <Text className="text-base text-green-700 font-medium">
                Sudah Absen
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
