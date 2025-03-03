import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { Header } from "./components/header";
import { MealForm } from "./components/meal-form";

export default function Meal() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MealForm />
    </SafeAreaView>
  );
}
