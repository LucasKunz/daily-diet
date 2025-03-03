import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../../constants/storage";
import { CreateMealParams } from "./type";
import { Meal } from "../../types/meal";

async function createMeal(params: CreateMealParams) {
  try {
    const { meal } = params;
    const storageMeals = await getMeals();

    const meals = storageMeals ? [...storageMeals, meal] : [meal];
    const formattedMeal = JSON.stringify(meals);

    await AsyncStorage.setItem(STORAGE_KEYS.meals, formattedMeal);
  } catch (error) {
    throw new Error(
      "Não foi possível cadastrar a refeição no momento. Tente novamente mais tarde."
    );
  }
}

async function getMeals() {
  try {
    const storageMeals = await AsyncStorage.getItem(STORAGE_KEYS.meals);

    const meals: Meal[] = storageMeals ? JSON.parse(storageMeals) : [];

    return meals;
  } catch (error) {}
}

export const STORAGE_MEALS = {
  createMeal,
  getMeals,
};
