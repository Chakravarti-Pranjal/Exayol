import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  selected?: boolean;
  onPress: () => void;
}

export const FilterButton: React.FC<Props> = ({ label, selected, onPress }) => {
  return (
    <Pressable
      className={`px-4 py-2 rounded-full mr-2 
        ${selected ? "bg-blue-600" : "bg-gray-200"}`}
      onPress={onPress}
    >
      <Text className={`${selected ? "text-white" : "text-gray-700"} text-sm`}>
        {label}
      </Text>
    </Pressable>
  );
};
