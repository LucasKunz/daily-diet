import { Meal } from "../types/meal";

const HEALTHY_MEALS_IN_PERCENTAGE = 70;

export function getDietInfos(meals: Meal[]) {
  const healthyMealsLength = meals.filter((meal) => meal.isHealthyMeal).length;

  const healthyMealsPercentage = (healthyMealsLength * 100) / meals.length;

  const isHealthyDiet = healthyMealsPercentage >= HEALTHY_MEALS_IN_PERCENTAGE;

  return { isHealthyDiet, healthyMealsPercentage };
}
