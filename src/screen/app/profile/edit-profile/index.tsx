import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { Ionicons } from "@expo/vector-icons";

const EditProfileScreen = () => {
  return (
    <ScreenView backgroundColor="#fff">
      <View className="w-[90%] self-center bg-white">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity>
            <Ionicons name="close" size={24} color={"#4E4B66"} />
          </TouchableOpacity>

          <Text>Edit Profile</Text>
          <TouchableOpacity>
            <Ionicons name="checkmark" size={24} color={"#4E4B66"} />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenView>
  );
};

export default EditProfileScreen;
