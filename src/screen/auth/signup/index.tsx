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
import { SignupScreenProps } from "@/utils/types";
import { Formik } from "formik";
import CustomInput from "@/components/input/CustomInput";
import PrimaryButton from "@/components/button/PrimaryButton";
import { Checkbox } from "expo-checkbox";
import { KeyboardAvoidingView } from "react-native";
import { HEIGHT } from "@/constants/size";
import FacebookIcon from "@/assets/svg/facebook.svg";
import GoogleIcon from "@/assets/svg/google.svg";

const SignupScreen = ({ navigation }: SignupScreenProps) => {
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
            <View className="gap-1 h-28">
              <Text className="text-5xl font-bold text-primary">Hello!</Text>
              <Text className="text-body-text text-xl">
                Signup to get Started
              </Text>
            </View>
            <Formik
              initialValues={{
                fullname: "",
                username: "",
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
                      label="Full Name"
                      onChangeText={handleChange("fullname")}
                      placeholder="Enter Full Name"
                      value={values.fullname}
                      isRequired
                      error={errors.fullname}
                    />
                    <CustomInput
                      label="Email"
                      onChangeText={handleChange("email")}
                      placeholder="Enter Email"
                      value={values.email}
                      isRequired
                      error={errors.email}
                    />
                    <CustomInput
                      label="Username"
                      onChangeText={handleChange("username")}
                      placeholder="Enter Username"
                      value={values.username}
                      isRequired
                      error={errors.username}
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
                      <View className="flex-row items-center gap-2">
                        <Checkbox onChange={handleAgreeChange} value={agree} />
                        <Text>Remember me </Text>
                      </View>
                      <PrimaryButton
                        type="PRIMARY"
                        onPress={() => navigation.replace("bottom-tab")}
                        text="Sign up"
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
                      Already have an account ?{" "}
                      {/* <TouchableOpacity
                    > */}
                      <Text
                        onPress={() => navigation.navigate("login-screen")}
                        className="text-primary font-semibold"
                      >
                        Login
                      </Text>
                      {/* </TouchableOpacity> */}
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

export default SignupScreen;
