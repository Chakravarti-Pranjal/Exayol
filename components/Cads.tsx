import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Href, router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";


/* ---------------------------------------------
   Category Card
----------------------------------------------*/

export interface CategoryType {
  id: string;
  title: string;
  count: string;
  icon: string;
  route: Href;
}

export const CategoryCard = ({ data }: { data: CategoryType }) => {
  return (
    <TouchableOpacity className="w-[48%] bg-white p-4 rounded-xl mb-3 border border-gray-200" onPress={()=> router.push(data.route)}>
      <Ionicons name={data.icon} size={28} color="#6B7BDC" />
      <Text className="mt-2 font-semibold text-gray-800">{data.title}</Text>
      <Text className="text-gray-500 text-sm">{data.count}</Text>
    </TouchableOpacity>
  );
};

/* ---------------------------------------------
   Trending Card 
----------------------------------------------*/

export const TrendingCard = () => {
  return (
    <LinearGradient
      colors={["#C084FC", "#60A5FA"]}   // purple → blue gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 20,
        padding: 20,
        marginTop: 12,
      }}
    >
      <Text className="text-white text-lg font-semibold">
        Top Trending Notes
      </Text>
    </LinearGradient>
  );
};

/* ---------------------------------------------
   Latest Card
----------------------------------------------*/

export type LatestType = {
  id: string,
  subject: string;
  title: string;
  author: string;
  views: string;
  likes: string;
};

export const LatestCard = ({ item }: { item: LatestType }) => {
  return (
    <TouchableOpacity
      className="p-3 rounded-xl border border-gray-300 mb-4"
      onPress={() =>
        router.push({
          pathname: "/note/[id]",
          params: { id: item.id },
        })
      }
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text className="text-blue-600 text-sm font-semibold">{item.subject}</Text>

          <Text className="text-gray-900 text-lg font-semibold mt-1">
            {item.title}
          </Text>

          <Text className="text-gray-500 text-sm mt-1">by {item.author}</Text>

          <View className="flex-row items-center mt-2">
            <Ionicons name="eye-outline" size={18} color="#777" />
            <Text className="ml-1 text-gray-600">{item.views}</Text>

            <View className="flex-row items-center ml-5">
              <Ionicons name="heart-outline" size={18} color="#777" />
              <Text className="ml-1 text-gray-600">{item.likes}</Text>
            </View>
          </View>
        </View>

        {/* Book Icon with light blue background */}
        <View className="bg-blue-100 rounded-full w-16 h-16 flex justify-center items-center ml-3 mt-1">
          <Ionicons name="book-outline" size={24} color="#3b82f6" />
        </View>
      </View>
    </TouchableOpacity>
  );
};



