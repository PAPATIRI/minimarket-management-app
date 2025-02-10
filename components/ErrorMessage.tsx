import { Text, View } from "react-native";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <View className="flex items-center justify-center flex-1">
    <Text className="text-xl text-center capitalize text-red-400">
      {message}
    </Text>
  </View>
);

export default ErrorMessage;
