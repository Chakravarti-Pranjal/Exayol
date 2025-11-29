// components/InputField.tsx
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

interface InputFieldProps extends TextInputProps {
  iconName?: keyof typeof Ionicons.glyphMap;
  name?: string; // 👈 added
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  iconName,
  value,
  onChangeText,
  secureTextEntry,
  name,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField =
    name === "password" || name === "confirmPassword";

  return (
    <View className="w-full flex-row items-center bg-white border border-gray-300 rounded-xl px-4 py-3 mt-4">
      
      {iconName && (
        <Ionicons name={iconName} size={20} color="#555" style={{ marginRight: 8 }} />
      )}

      <TextInput
        className="flex-1 text-base text-gray-700"
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        secureTextEntry={isPasswordField ? !showPassword : secureTextEntry}
        onChangeText={onChangeText}
        {...rest}
      />

      {/* 👁 Eye toggle only for password fields */}
      {isPasswordField && (
        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
