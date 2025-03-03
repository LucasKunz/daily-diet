import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../../constants/storage";
import { CreateMealParams } from "./type";

async function createMeal(params: CreateMealParams) {
  try {
    const { meal } = params;
    const formattedMeal = JSON.stringify(meal);

    await AsyncStorage.setItem(STORAGE_KEYS.meals, formattedMeal);
  } catch (error) {
    throw Error(
      "Não foi possível cadastrar a refeição no momento. Tente novamente mais tarde."
    );
  }
}

async function getMeals() {
  try {
    const storageMeals = await AsyncStorage.getItem(STORAGE_KEYS.meals);

    const meals = storageMeals ? JSON.parse(storageMeals) : [];

    return meals;
  } catch (error) {}
}

export const STORAGE_MEALS = {
  createMeal,
  getMeals,
};
