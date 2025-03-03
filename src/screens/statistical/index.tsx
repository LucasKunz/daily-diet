import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { HeaderStatus } from "./components/status";
import { GeneralStatistics } from "./general-statistics";

import styles from "./styles";
import { useMeals } from "../../hooks/use-meals";
import { getDietInfos } from "../../utils/meals";
import { COLORS } from "../../constants/colors";

export default function Statistical() {
  const { meals } = useMeals();
  const { isHealthyDiet } = getDietInfos(meals);

  return (
    <SafeAreaView
      style={[
        styles.container,
        !isHealthyDiet && { backgroundColor: COLORS.RED_LIGHT },
      ]}
    >
      <HeaderStatus meals={meals} />
      <GeneralStatistics meals={meals} />
      <StatusBar backgroundColor="red" translucent />
    </SafeAreaView>
  );
}
