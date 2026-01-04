import { NoteCard } from "@/components/NoteCard";
import ProfileHeader from "@/components/ProfileHeader";
import { Note } from "@/types/type";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

// Sample Data
const uploadedNotes: Note[] = [
  { id: "1", title: "Quantum Mechanics", subject: "Physics", uploader: "AlexChen", color: "#FF6B6B", icon: "book-outline" },
  { id: "2", title: "Ancient Rome Timeline", subject: "History", uploader: "SamirK", color: "#4D96FF", icon: "time-outline" },
];

const savedNotes: Note[] = [
  { id: "1", title: "Renaissance Art", subject: "Art", uploader: "AlexChen", color: "#FBC02D", icon: "image-outline" },
  { id: "2", title: "Calculus Guide", subject: "Math", uploader: "MichaelB", color: "#C878FF", icon: "calculator-outline" },
];

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<"Notes" | "Saved">("Notes");

  const renderTabContent = () => {
    const data = activeTab === "Notes" ? uploadedNotes : savedNotes;
    if (data.length === 0) {
      return (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-400 text-lg">No {activeTab.toLowerCase()} available</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteCard item={item} />}
        contentContainerStyle={{ padding: 16 }}
      />
    );
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", style: "destructive", onPress: () => console.log("Logged out!") },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ProfileHeader
        name="Alexandra Chen"
        subtitle="Computer Science"
        avatarUri="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        onEdit={() => console.log("Edit Profile")}
        onBack={() => navigation.goBack()}
        onSettings={() => console.log("Settings")}
      />

      {/* Tabs */}
      <View className="flex-row bg-white mt-4 mx-4 rounded-xl shadow-sm">
        <TouchableOpacity
          className={`flex-1 py-3 rounded-xl items-center ${activeTab === "Notes" ? "bg-blue-100" : ""}`}
          onPress={() => setActiveTab("Notes")}
        >
          <Text className={`font-semibold ${activeTab === "Notes" ? "text-blue-600" : "text-gray-500"}`}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-3 rounded-xl items-center ${activeTab === "Saved" ? "bg-blue-100" : ""}`}
          onPress={() => setActiveTab("Saved")}
        >
          <Text className={`font-semibold ${activeTab === "Saved" ? "text-blue-600" : "text-gray-500"}`}>Saved</Text>
        </TouchableOpacity>
      </View>

      {/* Tab content */}
      <View className="flex-1">{renderTabContent()}</View>

      {/* Logout Button */}
      <View className="px-6 py-4 bg-white border-t border-gray-200">
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-red-500 py-3 rounded-full items-center"
        >
          <Text className="text-white font-semibold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
