import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import SectionHeader from "@/components/header/SectionHeader";
import { ExploreScreenProps } from "@/utils/types";
import PrimaryButton from "@/components/button/PrimaryButton";
import AuthorCard from "@/components/card/AuthorCard";
import CardItem from "@/components/card/CardItem";

const ExploreScreen = ({}: ExploreScreenProps) => {
  return (
    <ScreenView style={{ flex: 1 }} backgroundColor="#fff">
      <View className="w-[90%] self-center pt-4 bg-white">
        <View className="pb-4">
          <Text className="text-4xl font-bold">Explore</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionHeader title="Topic" onPress={() => console.log("")} />
          <View className="gap-4">
            <AuthorCard
              src={require("@/assets/image/health.png")}
              subTitle="Get energizing workout moves, healthy recipes..."
              title="Health"
            />
            <AuthorCard
              src={require("@/assets/image/health.png")}
              subTitle="the application of scientific knowledge to the practi..."
              title="Technology"
            />
            <AuthorCard
              src={require("@/assets/image/health.png")}
              subTitle="Art is a diverse range of human activity, and result..."
              title="Art"
            />
          </View>

          <View className="mt-4 gap-4">
            <Text className="text-base font-bold">Popular Topic</Text>
            <CardItem src={require("@/assets/image/image-1.png")} />
            <CardItem src={require("@/assets/image/image-2.png")} />
            <CardItem src={require("@/assets/image/image-3.png")} />
          </View>
        </ScrollView>
      </View>
    </ScreenView>
  );
};

export default ExploreScreen;
