import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import PrimaryButton from "../button/PrimaryButton";

type Props = {
  title: string;
  subTitle: string;
  src?: any;
  saved?: boolean;
  button?: boolean;
};

const AuthorCard = (props: Props) => {
  const { subTitle, title, src, saved, button = true } = props;
  return (
    <TouchableOpacity className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-2 flex-1">
        {src && (
          <Image
            source={src}
            //   source={require("@/assets/image/health.png")}
            className="w-20 h-20 rounded-md"
            resizeMode="cover"
          />
        )}
        <View className="gap-0.5 flex-1">
          <Text className="text-base ">{title}</Text>
          <Text className="text-sm text-body-text">{subTitle}</Text>
        </View>
      </View>
      {button && (
        <PrimaryButton
          type={saved ? "PRIMARY" : "OUTLINE"}
          text={"Save"}
          onPress={() => {}}
        />
      )}
    </TouchableOpacity>
  );
};

export default AuthorCard;
