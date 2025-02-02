import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import ErrorIcon from "@/assets/svg/error-icon.svg";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  label: string;
  secureTextEntry?: boolean;
  isRequired?: boolean;
  error?: string;
};
const CustomInput = (props: Props) => {
  const {
    placeholder,
    onChangeText,
    value,
    label,
    secureTextEntry,
    isRequired,
    error,
  } = props;
  const [visible, setVisible] = useState(true);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <View className="gap-1">
      <Text className="text-sm text-body-text">
        {label}
        {isRequired && <Text className="text-error-dark">*</Text>}{" "}
      </Text>
      <View className="relative">
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry ? visible : false}
          className="p-2.5 py-4 rounded-md border border-body-text"
          // clearButtonMode=''
        />
        {secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.6}
            className="absolute top-3 right-3"
            onPress={handleVisibility}
          >
            <Ionicons
              name={visible ? "eye-outline" : "eye-off-outline"}
              size={24}
              color={"#4E4B66"}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View className="flex-row items-center gap-1">
          <ErrorIcon />
          <Text className="text-sm text-error-dark">{error}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
