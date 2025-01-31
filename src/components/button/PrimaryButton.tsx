import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  text: string;
  onPress?: () => void;
};

const PrimaryButton = (props: Props) => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      className={`py-3 px-6 rounded-md bg-primary justify-center items-center`}
    >
      <Text className={`text-base text-white font-semibold leading-6`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
