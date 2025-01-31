import { View, Text, Image } from "react-native";
import React from "react";
import { OnboardingContentProps } from "@/data/onboard";
import { WIDTH } from "@/constants/size";

const OnboardingItem = ({
  description,
  image,
  title,
}: OnboardingContentProps) => {
  return (
    <View style={{ width: WIDTH }}>
      <Image source={image} className="w-full h-pich" />
      <View className="p-6 max-w-96 w-full">
        <Text className="text-2xl font-bold leading-9">{title}</Text>
        <Text className="text-basee font-bold text-body-text leading-6">
          {description}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(OnboardingItem);
