import { Image } from "expo-image";
import { View } from "react-native";

import styles from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/logo.svg")}
        style={{ width: 82, height: 37 }}
      />
      <Image
        source={require("../../../../assets/avatar.png")}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
}
