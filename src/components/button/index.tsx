import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";

import styles from "./styles";

export function Button(props: ButtonProps) {
  const { buttonText, style, ...otherProps } = props;

  return (
    <TouchableOpacity style={[styles.container, style]} {...otherProps}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
