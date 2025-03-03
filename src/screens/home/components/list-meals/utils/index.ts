import { Meal } from "../../../../../types/meal";

export function getMealsByDay(meals: Meal[]) {
  const grouped = meals.reduce<Record<string, Meal[]>>(
    (prevValue, currValue) => {
      if (!prevValue[currValue.date]) {
        prevValue[currValue.date] = [];
      }

      prevValue[currValue.date].push(currValue);

      return prevValue;
    },
    {}
  );

  return Object.entries(grouped).map(([day, meals]) => ({
    day,
    meals,
  }));
}
