import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import ScreenView from "@/layout/ScreenView";
import { SURFACE_COLOR } from "@/constants/colors";
import { SplashScreenProps } from "@/utils/types";
import LogoIcon from "@/assets/svg/logo.svg";
import { HEIGHT } from "@/constants/size";

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("onboarding-screen");
    }, 3000);
  }, [navigation]);

  return (
    <ScreenView backgroundColor={"#ff"}>
      <View className="justify-center items-center h-full">
        <LogoIcon style={styles.logo} />
      </View>
    </ScreenView>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  logo: {
    marginBottom: HEIGHT * 0.3,
  },
});
