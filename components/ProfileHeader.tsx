import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

interface ProfileHeaderProps {
  name: string;
  subtitle?: string;
  avatarUri: string;
  onEdit?: () => void;
  onBack?: () => void;
  onSettings?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  subtitle,
  avatarUri,
  onEdit,
  onBack,
  onSettings,
}) => {
  return (
    <View className="w-full bg-white pt-10 pb-4 px-4 rounded-b-2xl shadow-sm">
      <View className="flex-row items-center justify-between mb-6">
        <TouchableOpacity onPress={onBack} className="p-1">
          <Ionicons name="arrow-back" size={22} color="#333" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold">Profile</Text>
        <TouchableOpacity onPress={onSettings} className="p-1">
          <Ionicons name="notifications-outline" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View className="items-center mt-6">
        <View className="rounded-full bg-gray-100 items-center justify-center">
          <Image
            source={{ uri: avatarUri }}
            className="w-28 h-28 rounded-full"
            style={{ borderWidth: 6, borderColor: "#fff" }}
          />
        </View>

        <Text className="text-3xl font-bold mt-3">{name}</Text>
        {subtitle ? <Text className="text-gray-500 text-lg mt-1">{subtitle}</Text> : null}


        <CustomButton 
                title="Edit Profile" className="w-full my-6"
                onPress={onEdit}
            />

      </View>
    </View>
  );
};

export default ProfileHeader;
