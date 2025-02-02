import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import ClockIcon from "@/assets/svg/clock.svg";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  horizontal?: boolean;
  src: any;
  onPress?: () => void;
  disabled?: boolean;
  isDetails?: boolean;
};
const CardItem = (props: Props) => {
  const { horizontal, src, onPress, disabled, isDetails } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      className={`${horizontal ? "flex-row items-center gap-4" : "flex-col"}`}
    >
      <View
        className={`rounded-md overflow-hidden ${
          horizontal ? "w-24 h-24" : "w-full h-48"
        }`}
      >
        <Image
          resizeMode="cover"
          //   source={require("@/assets/image/image-1.png")}
          source={src}
          className="w-full h-full"
        />
      </View>
      <View className="mt-2 gap-1 flex-1">
        <Text className="text-xs text-body-text mb-1">Categories</Text>
        <Text className={` ${isDetails ? "text-2xl" : "text-sm"}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        {!isDetails && (
          <View className={`flex-row items-center justify-between`}>
            <View className="flex-row items-center gap-5">
              <View className="flex-row items-center gap1">
                <Image />
                <Text className="text-body-text text-sm font-semibold">
                  BBC News
                </Text>
              </View>
              <View className="flex-row gap-1 items-center">
                <ClockIcon />
                <Text className="text-body-text text-sm">4h ago</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal"
                color={"#4E4B66"}
                size={15}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
