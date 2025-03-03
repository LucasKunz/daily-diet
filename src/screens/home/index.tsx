import { StatusBar } from "expo-status-bar";
import { Alert, SafeAreaView } from "react-native";

import styles from "./styles";

import { Header } from "./components/header";
import { Status } from "./components/status";
import { Meals } from "./components/meals";
import { useCallback, useState } from "react";
import { STORAGE_MEALS } from "../../storage/meals";
import { useFocusEffect } from "@react-navigation/native";
import { Meal } from "../../types/meal";

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const getStorageMeals = useCallback(async () => {
    try {
      const storageMeals = await STORAGE_MEALS.getMeals();

      if (storageMeals) setMeals(storageMeals);
    } catch (error) {
      Alert.alert(error as string);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      getStorageMeals();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Status />
      <Meals meals={meals} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
