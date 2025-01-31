import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import ScreenView from "@/layout/ScreenView";
import { OnboardingScreenProps } from "@/utils/types";
import { onboardingContent } from "@/data/onboard";
import OnboardingItem from "@/components/onboard/OnboardingItem";
import { HEIGHT, WIDTH } from "@/constants/size";
import OnboardingFooter from "@/components/onboard/OnboardingFooter";

const OnboardingScreen = ({}: OnboardingScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<FlatList>(null);
  const onNextPress = useCallback(() => {
    if (currentIndex < onboardingContent.length - 1) {
      ref.current?.scrollToOffset({
        offset: (currentIndex + 1) * WIDTH, // Smooth scrolling
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);
  const onBackPress = useCallback(() => {
    if (currentIndex > 0) {
      ref.current?.scrollToOffset({
        offset: (currentIndex - 1) * WIDTH,
        animated: true,
      });
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);
  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { nativeEvent } = event;
    const position =
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
    setCurrentIndex(Math.floor(position));
  };
  return (
    <View style={{ height: HEIGHT }} className="h-full">
      <FlatList
        ref={ref}
        data={onboardingContent}
        horizontal
        onScroll={handleOnScroll}
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={({ item }) => <OnboardingItem {...item} />}
      />
      <OnboardingFooter
        currentIndex={currentIndex}
        onPress={onNextPress}
        onBackPress={onBackPress}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
