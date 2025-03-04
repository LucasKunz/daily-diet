import { StyleProp, ViewStyle } from "react-native";

export type CardProps = {
  description: string;
  backgroundColor?: string;
  title: string;
  style?: StyleProp<ViewStyle>;
};
