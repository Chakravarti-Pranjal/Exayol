import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface MenuItemProps {
  title: string;
  subtitle?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, subtitle, iconName, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between bg-white rounded-xl p-4 my-2 shadow-sm"
    >
      <View className="flex-row items-center">
        {iconName ? (
          <View className="w-10 h-10 rounded-lg items-center justify-center bg-gray-100 mr-3">
            <Ionicons name={iconName} size={20} color="#3b3b3b" />
          </View>
        ) : null}

        <View>
          <Text className="font-medium">{title}</Text>
          {subtitle ? <Text className="text-gray-400 text-sm mt-1">{subtitle}</Text> : null}
        </View>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#c4c4c4" />
    </TouchableOpacity>
  );
};

export default MenuItem;
