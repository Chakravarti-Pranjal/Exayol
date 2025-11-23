import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const AuthTab = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const isLogin = route.name === "Login";
  const isSignup = route.name === "Signup";

  return (
    <View className="flex-row w-full bg-gray-200 p-2 rounded-full mb-6">

      {/* Login Button */}
      <TouchableOpacity
        className={`px-6 py-3 w-1/2 rounded-full ${
          isLogin ? "bg-white" : "bg-transparent"
        }`}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          className={`font-semibold text-center ${
            isLogin ? "text-black" : "text-gray-600"
          }`}
        >
          Log In
        </Text>
      </TouchableOpacity>

      {/* Signup Button */}
      <TouchableOpacity
        className={`px-6 py-3 w-1/2 rounded-full ${
          isSignup ? "bg-white" : "bg-transparent"
        }`}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text
          className={`font-semibold text-center ${
            isSignup ? "text-black" : "text-gray-600"
          }`}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default AuthTab;
