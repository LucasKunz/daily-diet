import { Meal } from "../../../../types/meal";

export type MealsProps = {
  group: {
    day: string;
    meals: Meal[];
  };
};
