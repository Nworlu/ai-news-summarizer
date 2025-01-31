import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import { onboardingContent } from "@/data/onboard";

type Props = {
  currentIndex: number;
  onPress: () => void;
  onBackPress: () => void;
};

const OnboardingFooter = (props: Props) => {
  const { currentIndex, onPress, onBackPress } = props;
  return (
    <View className="py-10 flex-row justify-between items-center px-6">
      <View className="flex-row items-center gap-1.5 ">
        {onboardingContent.map((_, i) => (
          <View
            key={i}
            className={`w-3.5 h-3.5 rounded-full ${
              currentIndex === i ? "bg-primary" : "bg-placeholder"
            } `}
          />
        ))}
      </View>

      <View className="flex-row items-center gap-2.5">
        {currentIndex > 0 && (
          <TouchableOpacity onPress={onBackPress}>
            <Text className="text-body-text text-base font-semibold leading-6">
              Back
            </Text>
          </TouchableOpacity>
        )}
        <PrimaryButton
          onPress={onPress}
          text={
            currentIndex < onboardingContent.length - 1 ? "Next" : "Get Started"
          }
        />
      </View>
    </View>
  );
};

export default React.memo(OnboardingFooter);
