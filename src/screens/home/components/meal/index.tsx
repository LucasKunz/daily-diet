import { Text, TouchableOpacity, View } from "react-native";
import { MealsProps } from "./types";
import styles from "./styles";
import { COLORS } from "../../../../constants/colors";
import { Meal } from "../../../../types/meal";
import { memo } from "react";
import { useNavigation } from "@react-navigation/native";

export const MealGroup = memo((props: MealsProps) => {
  const { group } = props;
  const { day, meals } = group;

  const navigation = useNavigation();

  function handleMealItemPress(meal: Meal) {
    navigation.navigate("meal-details", { id: meal.id });
  }

  function renderMeal(meal: Meal) {
    const { hour, isHealthyMeal, name } = meal;
    const backgroundStatus = isHealthyMeal
      ? COLORS.GREEN_MIDDLE
      : COLORS.RED_MIDDLE;

    return (
      <TouchableOpacity
        style={styles.mealContainer}
        onPress={() => handleMealItemPress(meal)}
      >
        <Text style={styles.hour}>{hour}</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>{name}</Text>
        <View style={[styles.healthy, { backgroundColor: backgroundStatus }]} />
      </TouchableOpacity>
    );
  }
  console.log(" item");

  return (
    <View style={styles.container}>
      <Text>{day}</Text>
      {meals.map((meal) => renderMeal(meal))}
    </View>
  );
});
