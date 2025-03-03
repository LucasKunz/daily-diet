import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  buttonText: string;
  style?: StyleProp<ViewStyle>;
};
