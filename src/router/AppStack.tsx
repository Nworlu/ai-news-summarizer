import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamList, ProfileStackParamList } from "@/utils/types";
import HomeScreen from "@/screen/app/home";
import { ScreenOptions } from "@/utils/stack_options";
import TrendingScreen from "@/screen/app/home/trending";
import ProfileScreen from "@/screen/app/profile";

const Home = createStackNavigator<HomeStackParamList>();
const Profile = createStackNavigator<ProfileStackParamList>();
export const HomeStack = () => {
  return (
    <Home.Navigator screenOptions={ScreenOptions}>
      <Home.Screen name="home-screen" component={HomeScreen} />
      <Home.Screen name="trending-screen" component={TrendingScreen} />
    </Home.Navigator>
  );
};
export const ProfileStack = () => {
  return (
    <Profile.Navigator screenOptions={ScreenOptions}>
      <Profile.Screen name="profile-screen" component={ProfileScreen} />
      {/* <Home.Screen name="trending-screen" component={TrendingScreen} /> */}
    </Profile.Navigator>
  );
};
