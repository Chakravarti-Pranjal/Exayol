import MenuItem from "@/components/MenuItem";
import ProfileHeader from "@/components/ProfileHeader";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";


const Profile: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <ProfileHeader
          name="Alexandra Chen"
          subtitle="Computer Science"
          avatarUri="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          onEdit={() => {
            /* navigate to edit profile */
            navigation.navigate("EditProfile");
          }}
          onBack={() => navigation.goBack()}
          onSettings={() => navigation.navigate("Settings")}
        />

        {/* Stats area */}
        <View className="px-4 -mt-6">
          {/*<View className="flex-row">
            <StatCard number={6} label="Notes Uploaded" />
            <StatCard number={29} label="Saved Items" />
          </View>*/}

          {/*<View className="mt-2 bg-white rounded-xl p-4 shadow-sm items-center">
            <Text className="text-lg font-bold">112</Text>
            <Text className="text-gray-500 mt-1">Followers</Text>
          </View>*/}

          {/* Menu / Options */}
          <View className="mt-4">
            <MenuItem
              title="My Notes"
              subtitle="View your uploaded notes"
              iconName="document-text-outline"
              onPress={() => navigation.navigate("MyNotes")}
            />
            <MenuItem
              title="Saved Materials"
              subtitle="Quick access to saved resources"
              iconName="bookmark-outline"
              onPress={() => navigation.navigate("SavedMaterials")}
            />
            <MenuItem
              title="My Community Posts"
              subtitle="Your discussion posts"
              iconName="chatbubble-ellipses-outline"
              onPress={() => navigation.navigate("MyPosts")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
