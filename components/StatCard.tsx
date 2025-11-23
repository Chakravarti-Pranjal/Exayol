import React from "react";
import { Text, View } from "react-native";

interface StatCardProps {
  number: number | string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <View className="flex-1 bg-white mx-1 my-2 rounded-xl p-4 items-center shadow-sm">
      <Text className="text-xl font-bold">{number}</Text>
      <Text className="text-gray-500 mt-1 text-sm">{label}</Text>
    </View>
  );
};

export default StatCard;
