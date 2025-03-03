import { Text, View } from "react-native";
import { MealsProps } from "./types";
import styles from "./styles";
import { COLORS } from "../../../../constants/colors";
import { Meal } from "../../../../types/meal";

export function MealGroup(props: MealsProps) {
  const { group } = props;
  const { day, meals } = group;

  function renderMeal(meal: Meal) {
    const { hour, isHealthyMeal, name } = meal;
    const backgroundStatus = isHealthyMeal
      ? COLORS.GREEN_MIDDLE
      : COLORS.RED_MIDDLE;

    return (
      <View style={styles.mealContainer}>
        <Text style={styles.hour}>{hour}</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>{name}</Text>
        <View style={[styles.healthy, { backgroundColor: backgroundStatus }]} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{day}</Text>
      {meals.map((meal) => renderMeal(meal))}
    </View>
  );
}
