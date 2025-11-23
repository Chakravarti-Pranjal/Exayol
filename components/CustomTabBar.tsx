import { Feather } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-[#d1dbe8] pt-3"
      style={{ paddingBottom: insets.bottom }}
    >
      <View
        className="
          mx-3 bg-white flex-row justify-between items-center
          rounded-full px-4 py-5 shadow-lg relative
        "
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          height: 78,
        }}
      >
        {/* Render 5 tabs with center placeholder */}
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // ⭐ CENTER PLACEHOLDER SLOT
          if (route.name === "add") {
            return (
              <View key={route.key} className="flex-1 items-center">
                {/* EMPTY SPACE (for alignment) */}
              </View>
            );
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              className="flex-1 items-center"
            >
              {options.tabBarIcon &&
                options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused ? "#2196F3" : "#7f8ca7",
                  size: 26,
                })}
            </TouchableOpacity>
          );
        })}

        {/* 🔵 CENTER FLOATING BUTTON */}
        <View className="absolute -top-4 left-1/2 -translate-x-1/2">
          <View className="bg-white w-20 h-20 rounded-full items-center justify-center shadow-xl">
            <TouchableOpacity
              onPress={() => navigation.navigate("add")}
              className="bg-blue-500 w-16 h-16 rounded-full items-center justify-center shadow-xl"
            >
              <Feather name="plus" size={34} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
