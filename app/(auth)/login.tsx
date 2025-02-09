import Button from "@/components/ButtonCustom";
import FormInput from "@/components/FormInput";
import Space from "@/components/Space";
import LockSvg from "@/components/svg-components/LockSvg";
import { Colors } from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import useBackgroundColor from "@/hooks/useBackgroundColorStyle";
import { Redirect, router, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";

export default function LoginPage() {
  const backgroundColorStyle = useBackgroundColor();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { width, height } = Dimensions.get("window");

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Error", "tolong isi semua form login");
      return;
    }

    if (loading) return;

    try {
      setLoading(true);
      await login(email, password);
      router.replace("/(karyawan)");
    } catch (error) {
      Alert.alert(
        "Login Gagal",
        error instanceof Error ? error.message : "An error occured"
      );
    } finally {
      setLoading(false);
    }
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
        <Button
          type="primary"
          title={loading ? "loading..." : "Masuk Akun"}
          onPress={onSubmit}
          disabled={loading}
        />
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
