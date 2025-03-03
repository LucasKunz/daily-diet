import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { Header } from "./components/header";
import { MealForm } from "./components/meal-form";
import { useRoute } from "@react-navigation/native";
import { RouteParams } from "./types";

export default function Meal() {
  const { params } = useRoute();
  const { type = "NEW" } = params as RouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <Header type={type} />
      <MealForm type={type} />
    </SafeAreaView>
  );
}
