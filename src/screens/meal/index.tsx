import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { Header } from "./components/header";
import { MealForm } from "./components/meal-form";
import { useRoute } from "@react-navigation/native";
import { RouteParams } from "./types";

export default function Meal() {
  const { params } = useRoute();
  const { id } = params as RouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header id={id} />
      <MealForm id={id} />
    </SafeAreaView>
  );
}
