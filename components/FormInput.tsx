// components/FormInput.tsx
import { Colors } from "@/constants/Colors";
import React from "react";
import { View, TextInput, StyleSheet, useColorScheme, Text } from "react-native";

interface FormInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  maxLength?: number;
  style?: object;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  autoCorrect = false,
  maxLength,
  style,
  ...props
}) => {
  const colorscheme = useColorScheme()
  console.log('theme: ', colorscheme)

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        maxLength={maxLength}
        style={[styles.input, { borderColor: Colors[colorscheme ? colorscheme : 'light']?.icon }]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});

export default FormInput;
