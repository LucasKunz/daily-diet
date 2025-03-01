import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { Button } from "../../../../components/button";

export function Meals() {
  return (
    <View style={styles.container}>
      <Text>Refeições</Text>
      <Button buttonText="Nova refeição" />
    </View>
  );
}
