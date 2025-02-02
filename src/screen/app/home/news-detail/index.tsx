import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { NewsdetailScreenProps } from "@/utils/types";
import AuthorCard from "@/components/card/AuthorCard";
import CardItem from "@/components/card/CardItem";
import BookmarkIcon from "@/assets/svg/bookmark.svg";

const NewsDetailScreen = ({ navigation }: NewsdetailScreenProps) => {
  return (
    <ScreenView backgroundColor="#fff">
      <View style={{ flex: 1 }} className="w-[90%] self-center pt-6 bg-white">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={"#4E4B66"} />
          </TouchableOpacity>
          {/* <Text className="text-base font-semibold">Trending</Text> */}
          <View className="flex-row items-center gap-3">
            <TouchableOpacity>
              <Ionicons
                name="share-social-outline"
                size={24}
                color={"#4E4B66"}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={24} color={"#4E4B66"} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView className="mt-4">
          <AuthorCard button={false} subTitle="14m ago" title="BBC News" />
          <View className="mt-5">
            <CardItem
              disabled
              isDetails
              src={require("@/assets/image/image-1.png")}
            />
            <View className="mt-4">
              <Text className="text-body-text text-base">
                Ukrainian President Volodymyr Zelensky has accused European
                countries that continue to buy Russian oil of "earning their
                money in other people's blood". In an interview with the BBC,
                President Zelensky singled out Germany and Hungary, accusing
                them of blocking efforts to embargo energy sales, from which
                Russia stands to make up to £250bn ($326bn) this year. There has
                been a growing frustration among Ukraine's leadership with
                Berlin, which has backed some sanctions against Russia but so
                far resisted calls to back tougher action on oil sales.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={styles.shadowBox}
        className="w-full flex-row justify-between items-center px-6 pt-4"
      >
        <View className="flex-row items-center gap-4">
          <View className="flex-row items-center gap-1">
            <TouchableOpacity>
              <Ionicons name="heart-outline" color={"#050505"} size={24} />
            </TouchableOpacity>
            <Text className="text-base text-title-active">24.5k</Text>
          </View>
          <TouchableOpacity className="mb-1">
            <FontAwesome5 name="robot" size={24} color="#4E4B66" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <BookmarkIcon fill={"#4E4B66"} />
        </TouchableOpacity>
      </View>
    </ScreenView>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: -2 }, // Horizontal and vertical offset
    shadowOpacity: 0.05, // Opacity of the shadow
    shadowRadius: 4, // Blur radius of the shadow
    elevation: 2, // Android-specific property for shadow (optional)
    borderTopWidth: 0.4,
    borderTopColor: "#E5E5E5",
  },
});
