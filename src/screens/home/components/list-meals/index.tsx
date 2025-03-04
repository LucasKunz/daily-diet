import { FlatList, Text, View } from "react-native";
import { ListMealsProps } from "./types";
import styles from "./styles";
import { MealGroup } from "../meal";
import { getMealsByDay } from "./utils";

export function ListMeals(props: ListMealsProps) {
  const { meals } = props;

  const mealsByDay = getMealsByDay(meals);

  function renderContent() {
    return (
      <FlatList
        data={mealsByDay}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <MealGroup group={item} />}
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
      />
    );
  }

  return renderContent();
}
