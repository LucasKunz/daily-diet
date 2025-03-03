import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import styles from "./styles";

import { Header } from "./components/header";
import { Status } from "./components/status";
import { Meals } from "./components/meals";
import { useMeals } from "../../hooks/use-meals";

export default function Home() {
  const { meals } = useMeals();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Status meals={meals} />
      <Meals meals={meals} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
