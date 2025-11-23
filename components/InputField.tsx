// components/InputField.tsx
import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputFieldProps extends TextInputProps {
  iconName?: keyof typeof Ionicons.glyphMap;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  iconName,
  value,
  onChangeText,
  secureTextEntry,
  ...rest
}) => {
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
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default InputField;
