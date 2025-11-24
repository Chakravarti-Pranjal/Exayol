import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Tag Component
const Tag = ({ label, onRemove }: { label: string; onRemove: () => void }) => (
  <View className="flex-row items-center bg-blue-100 px-4 py-1 rounded-full mr-2 mb-2 shadow-sm">
    <Text className="text-blue-700 text-sm mr-2">{label}</Text>
    <TouchableOpacity onPress={onRemove} className="p-1">
      <Ionicons name="close" size={16} color="#2563eb" />
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
    if (result.type !== "cancel") {
      setFile(result);
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // adjust if you have header height
      >
        <ScrollView
          className="flex-1 bg-white p-5"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <TouchableOpacity
              onPress={() => router.back()}
              className="p-2 rounded-full active:opacity-60"
            >
              <Ionicons name="arrow-back" size={28} color="#1E40AF" />
            </TouchableOpacity>
            <Text className="text-2xl font-extrabold text-gray-900">
              Upload Material
            </Text>
            <View style={{ width: 40 }} />
          </View>

          {/* File Upload Box */}
          <TouchableOpacity
            onPress={pickFile}
            activeOpacity={0.8}
            className="border-2 border-dashed border-blue-400 rounded-3xl p-10 items-center mb-8 bg-blue-50 shadow-md"
          >
            <Ionicons name="cloud-upload-outline" size={48} color="#2563eb" />
            <Text className="text-blue-700 mt-3 text-lg font-semibold">
              Tap to select a file
            </Text>
            <Text className="text-blue-400 text-xs mb-3 mt-1">
              Supported: PDF, DOC, JPG, PNG
            </Text>
            <View className="bg-blue-600 px-5 py-2 rounded-full shadow-lg">
              <Text className="text-white font-semibold text-sm tracking-wide">
                Browse Files
              </Text>
            </View>
            {file && (
              <Text
                className="mt-5 text-green-600 font-medium text-center max-w-full"
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                Selected: {file.name}
              </Text>
            )}
          </TouchableOpacity>

          {/* Input Fields */}
          <TextInput
            placeholder="Title *"
            className="border border-gray-300 rounded-xl p-4 mb-4 text-base text-gray-900 shadow-sm"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#9ca3af"
          />

          <TextInput
            placeholder="Subject *"
            className="border border-gray-300 rounded-xl p-4 mb-4 text-base text-gray-900 shadow-sm"
            value={subject}
            onChangeText={setSubject}
            placeholderTextColor="#9ca3af"
          />

          <TextInput
            placeholder="Class/Course"
            className="border border-gray-300 rounded-xl p-4 mb-4 text-base text-gray-900 shadow-sm"
            value={course}
            onChangeText={setCourse}
            placeholderTextColor="#9ca3af"
          />

          <TextInput
            placeholder="Category"
            className="border border-gray-300 rounded-xl p-4 mb-4 text-base text-gray-900 shadow-sm"
            value={category}
            onChangeText={setCategory}
            placeholderTextColor="#9ca3af"
          />

          <TextInput
            placeholder="Description"
            multiline
            className="border border-gray-300 rounded-xl p-4 mb-6 h-28 text-base text-gray-900 shadow-sm"
            value={description}
            onChangeText={setDescription}
            placeholderTextColor="#9ca3af"
            textAlignVertical="top"
          />

          {/* Tags */}
          <Text className="text-gray-700 font-semibold mb-3 text-lg">Tags</Text>
          <View className="flex-row flex-wrap mb-6">
            {tags.map((tag, idx) => (
              <Tag
                key={idx}
                label={tag}
                onRemove={() => setTags(tags.filter((_, i) => i !== idx))}
              />
            ))}
          </View>

          <View className="flex-row items-center border border-gray-300 rounded-xl p-3 mb-8 shadow-sm">
            <TextInput
              placeholder="Add a tag..."
              className="flex-1 text-gray-900 text-base"
              value={tagInput}
              onChangeText={setTagInput}
              placeholderTextColor="#9ca3af"
              onSubmitEditing={addTag}
              returnKeyType="done"
            />
            <TouchableOpacity onPress={addTag} className="ml-2">
              <Ionicons name="add-circle-outline" size={28} color="#2563eb" />
            </TouchableOpacity>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            className="bg-blue-700 py-5 rounded-2xl items-center shadow-lg"
            activeOpacity={0.85}
            onPress={() => {
              // handle submit here
            }}
            disabled={!title || !subject || !file}
            style={{ opacity: !title || !subject || !file ? 0.5 : 1 }}
          >
            <Text className="text-white font-extrabold text-xl tracking-wide">
              Upload Material
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Add;
