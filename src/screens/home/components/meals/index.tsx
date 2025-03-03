import { Text, View } from "react-native";

import styles from "./styles";
import { Button } from "../../../../components/button";
import { useNavigation } from "@react-navigation/native";
import { ListMeals } from "../list-meals";
import { MealsProps } from "./types";

export function Meals(props: MealsProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Refeições</Text>
      <Button
        buttonText="Nova refeição"
        onPress={() => navigation.navigate("meal", { type: "NEW" })}
      />
      <ListMeals {...props} />
    </View>
  );
}
