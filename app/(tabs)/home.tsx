import { CategoryCard, LatestCard, TrendingCard } from "@/components/Cads";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

const categories = [
  { id: "1", title: "Notes", count: "120 Notes", icon: "document-text-outline" },
  { id: "2", title: "Question Papers", count: "85 files", icon: "help-circle-outline" },
  { id: "3", title: "Study Material", count: "210 files", icon: "briefcase-outline" },
  { id: "4", title: "PDFs", count: "300 files", icon: "document-outline" },
  { id: "5", title: "Books", count: "40 books", icon: "book-outline" },
  { id: "6", title: "Community", count: "12 groups", icon: "people-outline" },
];

const latestNotes = [
  {
    id: "1",
    subject: "Biology 101",
    title: "Cellular Respiration Explained",
    author: "Sarah L.",
    views: "1.2k",
    likes: "890",
  },
  {
    id: "2",
    subject: "History of Art",
    title: "Renaissance Art Movements",
    author: "Mike E.",
    views: "950",
    likes: "650",
  },
  {
    id: "3",
    subject: "Calculus I",
    title: "Integration Techniques Guide",
    author: "Emily C.",
    views: "2.5k",
    likes: "1.8k",
  },
];

export default function Home() {
  return (
    <FlatList
      data={latestNotes}
      renderItem={({ item }) => <LatestCard item={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerClassName="pb-10 px-5 pt-10"

      /** ⬇️ List Header (same pattern as first component) */
      ListHeaderComponent={
        <View>

          {/* Header */}
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-xl font-semibold">Hi, Alex!</Text>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-orange-300" />
          </View>

          {/* Search Bar */}
          <View className="flex-row items-center bg-gray-200 px-4 py-3 rounded-xl mb-4 "> <Ionicons name="search-outline" size={22} color="#666" /> <TextInput placeholder="Search notes, papers, materials..." className="ml-2 flex-1 text-gray-700" /> </View>

          {/* Categories (2 columns just like your other file) */}
          <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryCard data={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperClassName="flex justify-between"
            scrollEnabled={false}
            contentContainerClassName="mb-4"
          />

          {/* Trending */}
          <TrendingCard />

          {/* Latest Notes Header */}
          <View className="flex-row justify-between items-center mt-5 mb-3">
            <Text className="text-lg font-semibold">Latest Notes</Text>
            <TouchableOpacity>
              <Text className="text-blue-600 font-medium">See All</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
}
