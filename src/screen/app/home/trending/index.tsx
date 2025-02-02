import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { Ionicons } from "@expo/vector-icons";
import { TrendingScreenProps } from "@/utils/types";
import CardItem from "@/components/card/CardItem";

const TrendingScreen = ({ navigation }: TrendingScreenProps) => {
  return (
    <ScreenView backgroundColor="#fff">
      <View className="w-[90%] self-center pt-6">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={"#4E4B66"} />
          </TouchableOpacity>
          <Text className="text-base font-semibold">Trending</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color={"#4E4B66"} />
          </TouchableOpacity>
        </View>
        <ScrollView
          className="mb-4"
          contentContainerClassName="mt-4 gap-4"
          showsVerticalScrollIndicator={false}
        >
          <CardItem src={require("@/assets/image/image-1.png")} />
          <CardItem src={require("@/assets/image/image-2.png")} />
          <CardItem src={require("@/assets/image/image-3.png")} />
          <CardItem src={require("@/assets/image/image-4.png")} />
        </ScrollView>
      </View>
    </ScreenView>
  );
};

export default TrendingScreen;
