import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { BookmarkScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import CustomInput from "@/components/input/CustomInput";
import CardItem from "@/components/card/CardItem";

const BookmarkScreen = ({}: BookmarkScreenProps) => {
  const [search, setSearch] = useState("");

  return (
    <ScreenView backgroundColor="#fff" style={{ flex: 1 }}>
      <View className="w-[90%] self-center pt-4 bg-white">
        <View className="pb-4">
          <Text className="text-4xl font-bold">BookMark</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomInput
            onChangeText={setSearch}
            value={search}
            label=""
            placeholder="Search"
          />
          <View className="mt-4 gap-4 pb-4">
            <CardItem src={require("@/assets/image/image-1.png")} />
            <CardItem src={require("@/assets/image/image-2.png")} />
            <CardItem src={require("@/assets/image/image-3.png")} />
          </View>
        </ScrollView>
      </View>
    </ScreenView>
  );
};

export default BookmarkScreen;
