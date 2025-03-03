import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getDietInfos } from "../../../../utils/meals";
import { HeaderStatusProps } from "./types";
import { COLORS } from "../../../../constants/colors";

export function HeaderStatus(props: HeaderStatusProps) {
  const { meals } = props;
  const navigation = useNavigation();

  const { healthyMealsPercentage, isHealthyDiet } = getDietInfos(meals);
  const backgroundColor = isHealthyDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT;

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
        <Image
          source={require("../../../../assets/arrow.svg")}
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  );
}
