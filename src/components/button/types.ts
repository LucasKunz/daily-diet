import { PropsWithChildren } from "react";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type ButtonProps = TouchableOpacityProps &
  PropsWithChildren & {
    buttonText: string;
    style?: StyleProp<ViewStyle>;
    variant?: "PRIMARY" | "OUTLINE";
  };
