import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../../../assets/arrow.svg")}
          style={styles.arrow}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Refeição</Text>
    </View>
  );
}
