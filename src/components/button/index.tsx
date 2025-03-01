import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";

import styles from "./styles";

export function Button(props: ButtonProps) {
  const { buttonText } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
