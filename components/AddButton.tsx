import { router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

export const FloatingAddButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable
      className="absolute bottom-8 right-6 bg-blue-600 w-20 h-20 rounded-2xl 
                 items-center justify-center shadow-lg"
      onPress={()=>router.push("/add")}
    >
      <Text className="text-white text-4xl -mt-1">+</Text>
    </Pressable>
  );
};
