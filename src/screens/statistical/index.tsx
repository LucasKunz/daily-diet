import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { HeaderStatus } from "./components/header-status";
import { GeneralStatistics } from "./general-statistics";

import styles from "./styles";
import { useMeals } from "../../hooks/use-meals";
import { getDietInfos } from "../../utils/meals";
import { COLORS } from "../../constants/colors";

export default function Statistical() {
  const { meals } = useMeals();
  const { healthyMealsPercentage, isHealthyDiet } = getDietInfos(meals);
  const backgroundColor =
    healthyMealsPercentage == 0
      ? COLORS.GRAY_600
      : !isHealthyDiet
      ? COLORS.RED_LIGHT
      : COLORS.GREEN_LIGHT;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <HeaderStatus meals={meals} />
      <GeneralStatistics meals={meals} />
      <StatusBar backgroundColor="red" translucent />
    </SafeAreaView>
  );
}
