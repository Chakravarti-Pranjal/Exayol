import { FloatingAddButton } from "@/components/AddButton";
import { FilterButton } from "@/components/FilterButton";
import { NoteCard } from "@/components/NoteCard";
import { Note } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notesData: Note[] = [
  {
    id: "1",
    title: "Chapter 5: Quantum Mechanics Summary",
    subject: "Physics",
    uploader: "AlexChen",
    color: "#FF6B6B",
    icon: "book-outline",
  },
  {
    id: "2",
    title: "Historical Timelines: Ancient Rome",
    subject: "History",
    uploader: "SamirK",
    color: "#4D96FF",
    icon: "time-outline",
  },
  {
    id: "3",
    title: "Cellular Respiration Diagram",
    subject: "Biology",
    uploader: "JaneDoe",
    color: "#47D16C",
    icon: "leaf-outline",
  },
  {
    id: "4",
    title: "Calculus I: Limits and Derivatives",
    subject: "Mathematics",
    uploader: "MichaelB",
    color: "#C878FF",
    icon: "calculator-outline",
  },
];

const Notes = () => {
  const navigation = useNavigation<any>();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4 mb-10">
      <View className="flex-row items-center justify-between mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <Ionicons name="arrow-back" size={22} color="#333" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold">Notes</Text>
        <TouchableOpacity onPress={() => router.push('/notifications')} className="p-1">
          <Ionicons name="notifications-outline" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <View className="flex-row mb-3">
        <FilterButton
          label="Subject"
          selected={!!selectedSubject}
          onPress={() =>
            setSelectedSubject(selectedSubject ? null : "Subject")
          }
        />
        <FilterButton label="Class" onPress={() => {}} />
        <FilterButton label="Board" onPress={() => {}} />
      </View>

      {/* Note List */}
      <FlatList
        data={notesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-center mb-3 bg-white p-3 rounded-xl">
            <NoteCard item={item} />
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Add Button */}
      <FloatingAddButton onPress={() => console.log("Add note")} />
    </SafeAreaView>
  );
};

export default Notes;
