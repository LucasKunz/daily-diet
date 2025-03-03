import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { HeaderProps } from "./types";

export function Header(props: HeaderProps) {
  const { type } = props;
  const navigation = useNavigation();

  const title = type === "EDIT" ? "Editar refeição" : "Nova refeição";

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
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
