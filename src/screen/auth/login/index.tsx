import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import ScreenView from "@/layout/ScreenView";
import { LoginScreenProps } from "@/utils/types";
import { Formik } from "formik";
import CustomInput from "@/components/input/CustomInput";
import PrimaryButton from "@/components/button/PrimaryButton";
import { Checkbox } from "expo-checkbox";
import { KeyboardAvoidingView } from "react-native";
import { HEIGHT } from "@/constants/size";
import FacebookIcon from "@/assets/svg/facebook.svg";
import GoogleIcon from "@/assets/svg/google.svg";

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  return (
    <ScreenView backgroundColor={"#fff"}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={{ height: HEIGHT }} className="w-[90%] self-center mt-6">
            <View className="gap-1 h-40 mb-10">
              <Text className="text-5xl font-bold text-title-active">
                Hello
              </Text>
              <Text className="text-5xl font-bold text-primary">Again!</Text>
              <Text className="text-body-text text-xl max-w-56">
                Welcome back you’ve been missed
              </Text>
            </View>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(value) => console.log(value)}
            >
              {({
                dirty,
                errors,
                handleChange,
                handleSubmit,
                isValid,
                values,
              }) => (
                <View>
                  <View className="mt-4 gap-4">
                    <CustomInput
                      label="Email"
                      onChangeText={handleChange("email")}
                      placeholder="Enter Email"
                      value={values.email}
                      isRequired
                      error={errors.email}
                    />
                    <CustomInput
                      label="Password"
                      onChangeText={handleChange("password")}
                      placeholder="Enter Password"
                      value={values.password}
                      isRequired
                      error={errors.password}
                      secureTextEntry
                    />
                    <View className="gap-5">
                      <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center gap-2">
                          <Checkbox
                            onChange={handleAgreeChange}
                            value={agree}
                          />
                          <Text className="text-body-text text-sm">
                            Remember me
                          </Text>
                        </View>
                        <Text className="text-[#5890FF] text-sm">
                          Forgot the password ?
                        </Text>
                      </View>
                      <PrimaryButton
                        type="PRIMARY"
                        onPress={() => navigation.replace("bottom-tab")}
                        text="Login"
                      />
                    </View>
                  </View>
                  <View className="mt-4 self-center gap-4">
                    <Text className="text-sm text-body-text text-center">
                      or continue with
                    </Text>
                    <View className="flex-row justify-between items-center w-full gap-14">
                      <TouchableOpacity className="bg-[#EEF1F4] flex-row items-center rounded-md py-3 px-6 gap-2.5 flex-1">
                        <FacebookIcon />
                        <Text className="text-button-text text-base font-semibold">
                          Facebook
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="bg-[#EEF1F4] flex-row items-center rounded-md py-3 px-6 gap-2.5 flex-1">
                        <GoogleIcon />
                        <Text className="text-button-text text-base font-semibold">
                          Google
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text className="text-sm text-body-text text-center">
                      don't have an account ?{" "}
                      <Text
                        onPress={() => navigation.navigate("signup-screen")}
                        className="text-primary font-semibold"
                      >
                        Sign up
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScreenView>
  );
};

export default LoginScreen;
