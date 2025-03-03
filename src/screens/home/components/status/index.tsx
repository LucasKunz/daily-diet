import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StatusProps } from "./types";
import { COLORS } from "../../../../constants/colors";
import { getDietInfos } from "../../../../utils/meals";

export function Status(props: StatusProps) {
  const { meals } = props;

  const navigation = useNavigation();
  const { healthyMealsPercentage, isHealthyDiet } = getDietInfos(meals);

  const colorStatus = isHealthyDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT;
  const arrowColor = isHealthyDiet ? COLORS.GREEN : COLORS.RED;

  return (
    <View style={styles.container}>
      <View style={[styles.content, { backgroundColor: colorStatus }]}>
        <Text style={styles.textPercentage}>
          {healthyMealsPercentage.toFixed(2)}%
        </Text>
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
