import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import styles from "./styles";

import { Header } from "./components/header";
import { Status } from "./components/status";
import { Meals } from "./components/meals";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Status />
      <Meals />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
