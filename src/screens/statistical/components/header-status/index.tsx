import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getDietInfos } from "../../../../utils/meals";
import { HeaderStatusProps } from "./types";
import { COLORS } from "../../../../constants/colors";
import { ArrowUp } from "lucide-react-native";

export function HeaderStatus(props: HeaderStatusProps) {
  const { meals } = props;
  const navigation = useNavigation();

  const { healthyMealsPercentage, isHealthyDiet } = getDietInfos(meals);

  const arrowColor =
    healthyMealsPercentage === 0
      ? COLORS.GRAY_200
      : isHealthyDiet
      ? COLORS.GREEN
      : COLORS.RED;
  const backgroundColor =
    healthyMealsPercentage === 0
      ? COLORS.GRAY_600
      : isHealthyDiet
      ? COLORS.GREEN_LIGHT
      : COLORS.RED_LIGHT;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.textPercentage}>
        {healthyMealsPercentage.toFixed(2)}%
      </Text>
      <Text>das refeições dentro da dieta</Text>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={() => navigation.goBack()}
      >
        <ArrowUp color={arrowColor} />
      </TouchableOpacity>
    </View>
  );
}
