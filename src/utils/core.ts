import Toast, { ToastType } from "react-native-toast-message";

export const CustomToaster = (
  type: ToastType,
  text: string,
  duration: number
) => {
  Toast.show({
    type: type,
    text1: text,
    position: "top",
    autoHide: true,
    visibilityTime: duration,
  });
};
// ef8093ffde854ee496bdd4ace4a7ae53
