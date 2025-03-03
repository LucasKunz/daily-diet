import { Text, View } from "react-native";

import styles from "./styles";
import { Button } from "../../../../components/button";
import { useNavigation } from "@react-navigation/native";

export function Meals() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Refeições</Text>
      <Button
        buttonText="Nova refeição"
        onPress={() => navigation.navigate("meal", { type: "NEW" })}
      />
    </View>
  );
}
