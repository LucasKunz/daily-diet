import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowContainer}>
        <Image
          source={require("../../../../assets/arrow.svg")}
          style={styles.arrow}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Refeição</Text>
    </View>
  );
}
