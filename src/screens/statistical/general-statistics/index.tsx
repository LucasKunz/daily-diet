import { Text, View } from "react-native";

import styles from "./styles";
import { Card } from "../../../components/card";
import { COLORS } from "../../../constants/colors";
import { GeneralStatisticsProps } from "./types";

export function GeneralStatistics(props: GeneralStatisticsProps) {
  const { meals } = props;

  const mealsLength = meals.length;
  const healthyMeals = meals.filter((meal) => meal.isHealthyMeal).length;
  const unhealthyMeals = mealsLength - healthyMeals;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas gerais</Text>
      <View style={styles.cardsContainer}>
        <Card
          description="melhor sequência de pratos dentro da dieta"
          title="22"
        />
        <Card description="refeições registradas" title={String(mealsLength)} />
        <View
          style={{
            gap: 12,
            flexDirection: "row",
          }}
        >
          <Card
            description="refeições dentro da dieta"
            title={String(healthyMeals)}
            backgroundColor={COLORS.GREEN_LIGHT}
          />
          <Card
            description="refeições fora da dieta"
            title={String(unhealthyMeals)}
            backgroundColor={COLORS.RED_LIGHT}
          />
        </View>
      </View>
    </View>
  );
}
