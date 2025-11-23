import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Tag Component
const Tag = ({ label, onRemove }: { label: string; onRemove: () => void }) => (
  <View className="flex-row items-center bg-blue-100 px-3 py-1 rounded-full mr-2 mb-2">
    <Text className="text-blue-700 text-sm mr-1">{label}</Text>
    <TouchableOpacity onPress={onRemove}>
      <Ionicons name="close" size={14} color="#2563eb" />
    </TouchableOpacity>
  </View>
);

const Add = () => {
  const [file, setFile] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("Notes");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "application/msword", "image/jpeg", "image/png"],
    });
    if (!result.canceled) {
      setFile(result.assets[0]);
    }
  };

  const addTag = () => {
    if (tagInput.trim().length > 0) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={26} color="#000" />
      </TouchableOpacity>
      <Text className="text-2xl font-bold mb-4">Upload Material</Text>
      <View></View>
      </View>

      {/* File Upload Box */}
      <TouchableOpacity
        onPress={pickFile}
        className="border-2 border-dashed border-gray-300 rounded-2xl p-8 items-center mb-5"
      >
        <Ionicons name="cloud-upload-outline" size={40} color="#3b82f6" />
        <Text className="text-gray-500 mt-2">Tap to select a file</Text>
        <Text className="text-gray-400 text-xs mb-2">Supported: PDF, DOC, JPG, PNG</Text>
        <View className="bg-blue-100 px-3 py-1 rounded-full">
          <Text className="text-blue-600 text-sm">Browse Files</Text>
        </View>
        {file && (
          <Text className="mt-3 text-green-600 text-sm">Selected: {file.name}</Text>
        )}
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        placeholder="Title *"
        className="border border-gray-300 rounded-xl p-3 mb-3 mt-5"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Subject *"
        className="border border-gray-300 rounded-xl p-3 mb-3"
        value={subject}
        onChangeText={setSubject}
      />

      <TextInput
        placeholder="Class/Course"
        className="border border-gray-300 rounded-xl p-3 mb-3"
        value={course}
        onChangeText={setCourse}
      />

      <TextInput
        placeholder="Category"
        className="border border-gray-300 rounded-xl p-3 mb-3"
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        placeholder="Description"
        multiline
        className="border border-gray-300 rounded-xl p-3 mb-3 h-28"
        value={description}
        onChangeText={setDescription}
      />

      {/* Tags */}
      <Text className="text-gray-700 font-semibold mb-2">Tags</Text>
      <View className="flex-row flex-wrap mb-2">
        {tags.map((tag, idx) => (
          <Tag key={idx} label={tag} onRemove={() => setTags(tags.filter((_, i) => i !== idx))} />
        ))}
      </View>

      <View className="flex-row items-center border border-gray-300 rounded-xl p-3 mb-6">
        <TextInput
          placeholder="Add a tag..."
          className="flex-1"
          value={tagInput}
          onChangeText={setTagInput}
        />
        <TouchableOpacity onPress={addTag}>
          <Ionicons name="add-circle-outline" size={24} color="#3b82f6" />
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity className="bg-blue-600 py-4 rounded-xl items-center mb-10">
        <Text className="text-white font-semibold text-lg">Upload Material</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Add;
