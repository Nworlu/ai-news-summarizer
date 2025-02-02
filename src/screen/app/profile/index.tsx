import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { ProfileScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import PrimaryButton from "@/components/button/PrimaryButton";
import { tagProfile } from "@/data/onboard";
import CardItem from "@/components/card/CardItem";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = ({}: ProfileScreenProps) => {
  const [tag, setTag] = useState("Recently Viewed");

  return (
    <ScreenView backgroundColor="#fff" style={{ flex: 1 }}>
      <View className="bg-white w-[90%] self-center pt-6">
        <View className="flex-row justify-end items-center ">
          <Text className="text-sm flex-1 text-center ml-7">Profile</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color={"#4E4B66"} />
          </TouchableOpacity>
        </View>
        <View className="gap-4 mt-3">
          <View>
            <Text className="text-base font-semibold">Wilson Franci</Text>
            <Text className="text-base text-body-text">Willy</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="flex-1 items-center">
              <Text className="text-base text-center font-semibold">333</Text>
              <Text className="text-xs text-body-text">Total News read</Text>
            </View>
            <View className="flex-1 items-center">
              <Text className="text-base text-center font-semibold">333</Text>
              <Text className="text-xs text-body-text">Total summarized</Text>
            </View>
            <View className="flex-1 items-center">
              <Text className="text-base text-center font-semibold">33</Text>
              <Text className="text-xs text-body-text">Total Bookmarked</Text>
            </View>
          </View>
        </View>
        <View className="mt-4">
          <PrimaryButton text="Edit Profile" type="PRIMARY" />
        </View>
        <View className="mt-4 pb-96">
          <View className="flex-row items-center gap-2 self-center">
            {tagProfile.map((newsTag, index) => (
              <TouchableOpacity
                key={index}
                className={`${
                  tag === newsTag ? "border-b-2 border-primary pb-1" : "pb-1"
                }`}
                onPress={() => setTag(newsTag)}
              >
                <Text
                  className={`text-base ${
                    tag === newsTag ? "" : "text-body-text"
                  }`}
                >
                  {newsTag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <FlatList
            className="mt-4"
            showsVerticalScrollIndicator={false}
            data={Array.from({ length: 20 })}
            contentContainerClassName="gap-4 pb-20"
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => (
              <CardItem
                horizontal
                src={require("@/assets/image/image-1.png")}
              />
            )}
          />
        </View>
      </View>
    </ScreenView>
  );
};

export default ProfileScreen;
