import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  "walkthrough-stack": undefined;
};

export type WalkthroughStackParamList = {
  "splash-screen": undefined;
  "onboarding-screen": undefined;
};

export type SplashScreenProps = StackScreenProps<
  WalkthroughStackParamList,
  "splash-screen"
>;
export type OnboardingScreenProps = StackScreenProps<
  WalkthroughStackParamList,
  "onboarding-screen"
>;
