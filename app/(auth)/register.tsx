// screens/Register.tsx
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface FormState {
  username: string,
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (name: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
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
        <Text className="text-3xl font-bold mt-2">Create Your Account</Text>
        <Text className="text-gray-500 mt-1 text-lg">Start sharing and discovering study notes</Text>
      </View>

      {/* Tabs */}
      <View className="flex-row w-full justify-center bg-gray-200 p-2 rounded-full mb-6 ">
        <TouchableOpacity className="px-6 py-3 w-1/2">
          <Text className="text-black font-semibold text-center">Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity className="px-6 py-3 bg-white rounded-full w-1/2">
          <Text className="text-gray-600 font-semibold text-center">Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <InputField
        placeholder="Enter user name"
        iconName="person-outline"
        value={form.username}
        onChangeText={(val) => handleChange("username", val)}
      />
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

      <InputField
        placeholder="Confirm your password"
        name="password"
        iconName="lock-closed-outline"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(val) => handleChange("confirmPassword", val)}
      />

      {/* Sign-up Button */}
      <CustomButton 
                title="Sign Up" className="w-full mt-10"
                onPress={handleRegister}
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
        <Text className="ml-2 font-semibold text-gray-700">Sign up with Google</Text>
      </TouchableOpacity>

      <Link href="/login" className='text-lg text-center text-general-200 mt-10'>
                        <Text>Already have an account?</Text>
                        <Text className='text-blue-500'> Log In</Text>
                    </Link>

    </View>
  );
};

export default Register;
