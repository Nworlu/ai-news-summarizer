import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  text: string;
  onPress?: () => void;
  type: "PRIMARY" | "SECONDARY" | "OUTLINE";
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
};

const buttonStyles = {
  PRIMARY: {
    container: "bg-primary",
    text: "text-white",
    icon: "#fff",
  },
  SECONDARY: {
    container: "bg-[#EEF1F4]",
    text: "text-button-text",
    icon: "#4E4B66",
  },
  OUTLINE: {
    container: "border border-primary bg-white",
    text: "text-primary",
    icon: "#1877F2",
  },
};

const PrimaryButton = (props: Props) => {
  const { text, onPress, type, leftIcon, rightIcon } = props;
  // const className =
  //   type === "PRIMARY"
  //     ? "bg-primary"
  //     : type === "OUTLINE"
  //     ? "border border-primary bg-white"
  //     : type === "SECONDARY"
  //     ? "bg-[#EEF1F4] "
  //     : "";
  // const classNameText =
  //   type === "PRIMARY"
  //     ? "text-white"
  //     : type === "OUTLINE"
  //     ? "text-primary"
  //     : type === "SECONDARY"
  //     ? "text-button-text"
  //     : "";
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      className={`py-3 rounded-md ${
        leftIcon || rightIcon ? "gap-2.5 px-4" : "px-6"
      }  ${buttonStyles[type].container} flex-row justify-center items-center`}
    >
      {leftIcon && (
        <Ionicons name={leftIcon} size={24} color={buttonStyles[type].icon} />
      )}
      <Text
        className={`text-base ${buttonStyles[type].text} font-semibold leading-6`}
      >
        {text}
      </Text>
      {rightIcon && (
        <Ionicons name={rightIcon} size={24} color={buttonStyles[type].icon} />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
