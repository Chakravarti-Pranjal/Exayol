// screens/Login.tsx
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface FormState {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  const handleChange = (name: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    console.log("Form Data:", form);
    router.push('/(tabs)/home')
  };

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center px-6">

      {/* Logo */}
      <View className="items-center mb-8">
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          className="w-14 h-14"
        />
        <Text className="text-4xl font-bold mt-2">Welcome Back!</Text>
        <Text className="text-gray-500 text-lg mt-1">Login to continue your study journey</Text>
      </View>

      {/* Tabs */}
            <View className="flex-row w-full justify-between bg-gray-200 p-2 rounded-full mb-6 ">
              <TouchableOpacity className="px-6 py-3 w-1/2 bg-white rounded-full">
                <Text className="text-black font-semibold text-center">Log In</Text>
              </TouchableOpacity>
      
              <TouchableOpacity className="px-6 py-3 ">
                <Text className="text-gray-600 font-semibold text-center">Sign Up</Text>
              </TouchableOpacity>
            </View>

      {/* Input Fields */}
      <InputField
        placeholder="Enter your email address"
        iconName="mail-outline"
        value={form.email}
        onChangeText={(val) => handleChange("email", val)}
      />

      <InputField
        placeholder="Enter your password"
        name="password"
        iconName="lock-closed-outline"
        secureTextEntry
        value={form.password}
        onChangeText={(val) => handleChange("password", val)}
      />

      {/* Forgot Password */}
      <TouchableOpacity className="self-end mt-2">
        <Text className="text-blue-600">Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      
      <CustomButton 
                title="Log In" className="w-full mt-10"
                onPress={handleLogin}
            />

      {/* Divider */}
      <View className="flex-row items-center w-full my-4">
        <View className="flex-1 h-[1px] bg-gray-300" />
        <Text className="mx-3 text-gray-400">or</Text>
        <View className="flex-1 h-[1px] bg-gray-300" />
      </View>

      {/* Google Sign-in */}
      <TouchableOpacity className="w-full bg-white py-3 rounded-xl flex-row justify-center items-center border border-gray-300">
        <Ionicons name="logo-google" size={20} color="black" />
        <Text className="ml-2 font-semibold text-gray-700">Log in with Google</Text>
      </TouchableOpacity>

      <Link href="/register" className='text-lg text-center text-general-200 mt-10'>
                              <Text>Don't have an account?</Text>
                              <Text className='text-blue-500'> Sign Up</Text>
                          </Link>
      

    </View>
  );
};

export default Login;
