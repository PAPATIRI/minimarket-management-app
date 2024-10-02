import Button from "@/components/ButtonCustom";
import FormInput from "@/components/FormInput";
import Space from "@/components/Space";
import LockSvg from "@/components/svg-components/LockSvg";
import { Colors } from "@/constants/Colors";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  const backgroundColorStyle = useBackgroundColor();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { width, height } = Dimensions.get("window");

  const router = useRouter();

  const onSubmit = () => {
    const data = { email: email, pasword: password };
    Alert.alert(email, password);
    // router.replace("/(karyawan)/home/")
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{
          width: width * 0.8,
          height: height * 0.2,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LockSvg />
      </View>
      <View className="p-5">
        <Text className="text-3xl text-slate-700 font-bold capitalize mb-10">
          Masuk Akun
        </Text>
        <FormInput
          label="email"
          placeholder="contoh@email.com"
          value={email}
          onChangeText={(emailValue) => setEmail(emailValue)}
        />
        <Space vertical size={20} />
        <FormInput
          label="kata sandi"
          placeholder="kata sandi"
          secureTextEntry
          value={password}
          onChangeText={(passwordValue) => setPassword(passwordValue)}
        />
        <Space vertical size={40} />
        <Button type="primary" title="Masuk Akun" onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    backgroundColor: Colors.slate[100],
  },
});
