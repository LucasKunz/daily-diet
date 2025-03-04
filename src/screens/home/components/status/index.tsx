import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StatusProps } from "./types";
import { COLORS } from "../../../../constants/colors";
import { getDietInfos } from "../../../../utils/meals";
import { ArrowUp } from "lucide-react-native";

export function Status(props: StatusProps) {
  const { meals } = props;

  const navigation = useNavigation();
  const { healthyMealsPercentage, isHealthyDiet } = getDietInfos(meals);

  const colorStatus =
    healthyMealsPercentage === 0
      ? COLORS.GRAY_600
      : isHealthyDiet
      ? COLORS.GREEN_LIGHT
      : COLORS.RED_LIGHT;
  const arrowColor =
    healthyMealsPercentage === 0
      ? COLORS.GRAY_200
      : isHealthyDiet
      ? COLORS.GREEN
      : COLORS.RED;

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
          <ArrowUp color={arrowColor} style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
