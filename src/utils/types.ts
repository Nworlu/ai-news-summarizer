import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  "walkthrough-stack": undefined;
  "auth-stack": undefined;
  "bottom-tab": undefined;
};

export type WalkthroughStackParamList = {
  "splash-screen": undefined;
  "onboarding-screen": undefined;
  "auth-stack": undefined;
};

export type AuthStackParamList = {
  "login-screen": undefined;
  "signup-screen": undefined;
  "bottom-tab": undefined;
};
export type HomeStackParamList = {
  "home-screen": undefined;
  "trending-screen": undefined;
  "bottom-tab": undefined;
  "news-details-screen": { newsId: string };
};
export type ProfileStackParamList = {
  "profile-screen": undefined;
  "bottom-tab": undefined;
  "news-details-screen": { newsId: string };
  "edit-profile-screen": { userId: string };
  // "trending-screen": undefined;
};
export type BottomTabParmsList = {
  "home-stack": undefined;
  "explore-screen": undefined;
  "bookmark-screen": undefined;
  "profile-stack": undefined;
  "news-details-screen": { newsId: string };
};

export type SplashScreenProps = StackScreenProps<
  WalkthroughStackParamList,
  "splash-screen"
>;
export type OnboardingScreenProps = StackScreenProps<
  WalkthroughStackParamList,
  "onboarding-screen"
>;
export type SignupScreenProps = StackScreenProps<
  AuthStackParamList,
  "signup-screen"
>;
export type LoginScreenProps = StackScreenProps<
  AuthStackParamList,
  "login-screen"
>;
export type HomeScreenProps = StackScreenProps<
  HomeStackParamList,
  "home-screen"
>;
export type TrendingScreenProps = StackScreenProps<
  HomeStackParamList,
  "trending-screen"
>;
export type ExploreScreenProps = StackScreenProps<
  BottomTabParmsList,
  "explore-screen"
>;
export type NewsdetailScreenProps = StackScreenProps<
  BottomTabParmsList,
  "news-details-screen"
>;
export type BookmarkScreenProps = StackScreenProps<
  BottomTabParmsList,
  "bookmark-screen"
>;

// profile s
export type ProfileScreenProps = StackScreenProps<
  ProfileStackParamList,
  "profile-screen"
>;
export type EditProfileScreenProps = StackScreenProps<
  ProfileStackParamList,
  "edit-profile-screen"
>;
