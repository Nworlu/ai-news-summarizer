import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParmsList } from "@/utils/types";
import HomeScreen from "@/screen/app/home";
import { ScreenOptions } from "@/utils/stack_options";
import HomeIcon from "@/assets/svg/home.svg";
import ExploreIcon from "@/assets/svg/explore.svg";
import BookmarkIcon from "@/assets/svg/bookmark.svg";
import ProfileIcon from "@/assets/svg/profile.svg";
import { HomeStack, ProfileStack } from "./AppStack";
import ExploreScreen from "@/screen/app/explore";
import BookmarkScreen from "@/screen/app/bookmark";
import NewsDetailScreen from "@/screen/app/home/news-detail";

const Tab = createBottomTabNavigator<BottomTabParmsList>();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={ScreenOptions}>
      <Tab.Screen
        name="home-stack"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <HomeIcon fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="explore-screen"
        component={ExploreScreen}
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <ExploreIcon fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="bookmark-screen"
        component={BookmarkScreen}
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color }) => (
            <BookmarkIcon fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="profile-stack"
        component={ProfileStack}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <ProfileIcon fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="news-details-screen"
        component={NewsDetailScreen}
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
