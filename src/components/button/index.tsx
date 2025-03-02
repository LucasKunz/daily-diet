import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";

import styles from "./styles";

export function Button(props: ButtonProps) {
  const { buttonText, style } = props;

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
