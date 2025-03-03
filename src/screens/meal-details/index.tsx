import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { Header } from "./components/header";
import { Details } from "./components/details";

export default function MealDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Details />
    </SafeAreaView>
  );
}
