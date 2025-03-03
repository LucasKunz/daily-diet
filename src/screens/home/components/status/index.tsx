import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Status() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textPercentage}>90,86%</Text>
        <Text>das refeições dentro da dieta</Text>
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => navigation.navigate("statistical")}
        >
          <Image
            source={require("../../../../assets/arrow.svg")}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
