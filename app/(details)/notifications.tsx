import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Notification {
  id: string;
  type: "like" | "comment" | "join" | "announcement" | "new_note";
  title: string;
  subtitle?: string;
  time: string;
  avatar?: string;
  icon?: React.ReactNode;
  groupName?: string;
}

const notificationsNew: Notification[] = [
  {
    id: "1",
    type: "like",
    title: "Daniel Lee liked your post.",
    time: "5m ago",
    avatar:
      "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual image url
  },
  {
    id: "2",
    type: "new_note",
    title: "New note from Physics Study Group",
    subtitle: "Calculus Cheat Sheet",
    time: "1h ago",
    icon: <Ionicons name="document-text-outline" size={24} color="#3B82F6" />,
  },
];

const notificationsEarlier: Notification[] = [
  {
    id: "3",
    type: "comment",
    title: "Anna commented on your post",
    subtitle: '"This is really helpful,..."',
    time: "3h ago",
    avatar:
      "https://randomuser.me/api/portraits/women/2.jpg", // Replace with actual image url
  },
  {
    id: "4",
    type: "join",
    title: "Jane Doe and 2 others joined the group",
    time: "Yesterday",
    icon: <Ionicons name="people-outline" size={24} color="#A78BFA" />,
  },
  {
    id: "5",
    type: "announcement",
    title: "System Announcement",
    subtitle: "Mid-term study resources available",
    time: "2d ago",
    icon: <Ionicons name="megaphone-outline" size={24} color="#F97316" />,
  },
];

const NotificationItem = ({ item }: { item: Notification }) => {
  return (
    <View className="flex-row items-center bg-white p-4 rounded-xl mb-3 shadow-sm">
      {item.avatar ? (
        <Image
          source={{ uri: item.avatar }}
          className="w-12 h-12 rounded-full mr-4"
        />
      ) : (
        <View className="w-12 h-12 rounded-full mr-4 bg-gray-200 items-center justify-center">
          {item.icon}
        </View>
      )}
      <View className="flex-1">
        <Text className="font-semibold text-gray-900">{item.title}</Text>
        {item.subtitle && (
          <Text className="text-gray-500 mt-1 text-sm">{item.subtitle}</Text>
        )}
      </View>
      <Text className="text-gray-400 text-xs ml-3">{item.time}</Text>
    </View>
  );
};

export default function Notifications() {
    const navigation = useNavigation<any>();
  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-5 rounded-lg ">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
                    <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
                      <Ionicons name="arrow-back" size={22} color="#333" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold">Notifications</Text>
                    <TouchableOpacity onPress={() => router.push('/notifications')} className="p-1">
                      <Ionicons name="notifications-outline" size={22} color="#333" />
                    </TouchableOpacity>
                  </View>

      {/* New Section */}
      <Text className="font-bold text-gray-700 mb-3">New</Text>
      <FlatList
        data={notificationsNew}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        scrollEnabled={false}
      />

      {/* Earlier Section */}
      <Text className="font-bold text-gray-700  mb-3">Earlier</Text>
      <FlatList
        data={notificationsEarlier}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
}
