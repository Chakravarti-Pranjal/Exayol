import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Types
interface InfoCardProps {
  title: string;
  description: string;
  image?: string;
}

interface TagProps {
  label: string;
}

// Reusable Card Component
const InfoCard: React.FC<InfoCardProps> = ({ title, description, image }) => {
  return (
    <View className="bg-white rounded-2xl p-4 shadow mb-4">
      {image && (
        <Image
          source={{ uri: image }}
          className="w-full h-48 rounded-xl mb-3"
          resizeMode="cover"
        />
      )}
      <Text className="text-xl font-semibold mb-1">{title}</Text>
      <Text className="text-gray-600">{description}</Text>
    </View>
  );
};

// Tag Component
const Tag: React.FC<TagProps> = ({ label }) => (
  <View className="bg-blue-100 px-3 py-1 rounded-full mr-2 mb-2">
    <Text className="text-blue-600 text-sm">{label}</Text>
  </View>
);

// Main Screen
const NoteDetailsScreen: React.FC = () => {
    const navigation = useNavigation<any>();

  return (
    <ScrollView className="flex-1 bg-white p-4 pt-10">
        <View className="flex-row items-center justify-between mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <Ionicons name="arrow-back" size={22} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} className="p-1">
          <Ionicons name="notifications-outline" size={22} color="#333" />
        </TouchableOpacity>
      </View>
      {/* Title */}
      <Text className="text-2xl font-bold mb-4">Biology Midterm Study Guide</Text>

      {/* Main Image */}
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Ov64LtrQY33keU-clUmQ9aQllhyLi4yghA&s" }}
        className="w-full h-64 rounded-2xl mb-6"
        resizeMode="cover"
      />

      {/* Download Button */}
      <TouchableOpacity className="bg-blue-600 py-3 rounded-xl items-center mb-6">
        <Text className="text-white font-semibold">Download</Text>
      </TouchableOpacity>

      {/* Author Section */}
      <View className="flex-row items-center mb-6">
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View>
          <Text className="font-semibold">Jane Doe</Text>
          <Text className="text-gray-500 text-sm">Uploaded on Oct 26, 2023</Text>
        </View>
      </View>

      {/* Description */}
      <InfoCard
        title="Description"
        description="Comprehensive study guide for the upcoming biology midterm. Covers key topics from chapters 1-5, including cell division, genetics, and cellular respiration. Includes diagrams and key definitions. Good luck studying!"
      />

      {/* Tags */}
      <Text className="text-lg font-semibold mb-2">Tags</Text>
      <View className="flex-row flex-wrap">
        {['Biology', 'Cell Division', 'Midterm Prep', 'Genetics'].map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </View>
    </ScrollView>
  );
};

export default NoteDetailsScreen;