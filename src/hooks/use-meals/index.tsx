import { useCallback, useState } from "react";
import { Meal } from "../../types/meal";
import { STORAGE_MEALS } from "../../storage/meals";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export function useMeals() {
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

  return { meals };
}
