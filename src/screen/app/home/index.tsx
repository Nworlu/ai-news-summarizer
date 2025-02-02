import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import ScreenView from "@/layout/ScreenView";
import { HomeScreenProps } from "@/utils/types";
import LogoIcon from "@/assets/svg/logo.svg";
import BellIcon from "@/assets/svg/bell.svg";
import { StyleSheet } from "react-native";
import CustomInput from "@/components/input/CustomInput";
import CardItem from "@/components/card/CardItem";
import SectionHeader from "@/components/header/SectionHeader";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");
  const data = [
    "All",
    "Sports",
    "Politics",
    "Business",
    "Health",
    "Travel",
    "Science",
  ];
  return (
    <ScreenView style={{ flex: 1 }} backgroundColor={"#fff"}>
      <View className="w-[90%] self-center pt-6">
        <View className="flex-row justify-between items-center">
          <LogoIcon width={99} height={30} />
          <View className="w-8 h-8 rounded-md bg-white items-center justify-center">
            <BellIcon />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="mt-3">
          <CustomInput
            onChangeText={setSearch}
            value={search}
            label=""
            placeholder="Search"
          />
          <SectionHeader
            title="Trending"
            onPress={() => navigation.navigate("trending-screen")}
          />
          <View>
            <CardItem
              onPress={() =>
                navigation.navigate("news-details-screen", {
                  newsId: "1234567",
                })
              }
              src={require("@/assets/image/image-1.png")}
            />
            <SectionHeader
              title="Latest"
              onPress={() => navigation.navigate("trending-screen")}
            />

            <FlatList
              horizontal
              pagingEnabled
              data={data}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="gap-4"
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={`${
                    active === item ? "border-b-2 border-primary pb-1" : "pb-1"
                  }`}
                  onPress={() => setActive(item)}
                >
                  <Text
                    className={`text-base text-body-text ${
                      active === item ? "" : ""
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <View className="mt-6 gap-4">
              <CardItem
                horizontal
                src={require("@/assets/image/image-2.png")}
              />
              <CardItem
                horizontal
                src={require("@/assets/image/image-3.png")}
              />
              <CardItem
                horizontal
                src={require("@/assets/image/image-1.png")}
              />
              <CardItem
                horizontal
                src={require("@/assets/image/image-4.png")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenView>
  );
};

export default HomeScreen;

{
  /* <View className="flex-row items-center gap-4">
  {[
    "All",
    "Sports",
    "Politics",
    "Business",
    "Health",
    "Travel",
    "Science",
  ].map((value, index) => (
    <TouchableOpacity
      className={`${
        active === value ? "border-b-2 border-primary pb-1" : "pb-1"
      }`}
      onPress={() => setActive(value)}
      key={index}
    >
      <Text
        className={`text-base text-body-text ${
          active === value ? "" : ""
        }`}
      >
        {value}
      </Text>
    </TouchableOpacity>
  ))}
</View> */
}
const styles = StyleSheet.create({
  logo: {
    width: 99,
    height: 30,
  },
});
