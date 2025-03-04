import { Text, View } from "react-native";
import styles from "./styles";
import { CardProps } from "./types";
import { COLORS } from "../../constants/colors";

export function Card(props: CardProps) {
  const {
    backgroundColor = COLORS.GRAY_700,
    description,
    title,
    style,
  } = props;

  return (
    <View style={[styles.container, style, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
