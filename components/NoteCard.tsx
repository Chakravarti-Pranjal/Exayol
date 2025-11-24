import { Note } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  item: Note & { icon?: keyof typeof Ionicons.glyphMap }; // added icon prop
  onPress?: () => void;
}

export const NoteCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <Pressable
      className="bg-white p-4 rounded-xl mb-3 flex-row items-center shadow-sm"
      onPress={onPress}
    >
      {/* Icon with light background */}
      {item.icon && (
        <View className="w-16 h-16 rounded-full mr-3 flex items-center justify-center bg-blue-100">
          <Ionicons name={item.icon} size={22} color={item.color} />
        </View>
      )}

      <View className="flex-1">
        <Text className="text-base font-semibold">{item.title}</Text>
        <Text className="text-gray-500 mt-1 text-sm">
          {item.subject} • Uploaded by {item.uploader}
        </Text>
      </View>

      <Text className="text-gray-500 text-xl px-1">⋮</Text>
    </Pressable>
  );
};
