import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "@/utils/types";
import SignupScreen from "@/screen/auth/signup";
import { ScreenOptions } from "@/utils/stack_options";
import LoginScreen from "@/screen/auth/login";

const Stack = createStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen name="signup-screen" component={SignupScreen} />
      <Stack.Screen name="login-screen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
