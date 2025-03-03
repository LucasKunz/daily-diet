import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";

import styles from "./styles";

export function Button(props: ButtonProps) {
  const {
    buttonText,
    children,
    style,
    variant = "PRIMARY",
    disabled,
    ...otherProps
  } = props;

  const buttonVariantStyle =
    variant === "PRIMARY" ? styles.primaryVariant : styles.outlineVariant;

  const textVariantStyle =
    variant === "PRIMARY" ? "" : styles.outlineTextVariant;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonVariantStyle,
        style,
        disabled && styles.disable,
      ]}
      disabled={disabled}
      {...otherProps}
    >
      {children}
      <Text style={[styles.text, textVariantStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
