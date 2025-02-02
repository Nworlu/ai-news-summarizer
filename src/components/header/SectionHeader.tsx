import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  title: string;
  onPress: () => void;
};

const SectionHeader = (props: Props) => {
  const { title, onPress } = props;
  return (
    <View className="flex-row items-center justify-between my-4">
      <Text className="text-base font-semibold leading-6">{title}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text className="text-sm leading-5 text-body-text">See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;
