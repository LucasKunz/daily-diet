import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../../constants/storage";
import { CreateMealParams } from "./type";
import { Meal } from "../../types/meal";

async function getMeals() {
  try {
    const storageMeals = await AsyncStorage.getItem(STORAGE_KEYS.meals);

    const meals: Meal[] = storageMeals ? JSON.parse(storageMeals) : [];

    return meals;
  } catch (error) {}
}

async function createMeal(params: CreateMealParams) {
  try {
    console.warn("here");
    const { meal } = params;
    const storageMeals = await getMeals();
    const meals = storageMeals ? [...storageMeals, meal] : [meal];
    const formattedMeal = JSON.stringify(meals);

    await AsyncStorage.setItem(STORAGE_KEYS.meals, formattedMeal);
  } catch (error) {
    console.error(error);
    throw new Error(
      "Não foi possível cadastrar a refeição no momento. Tente novamente mais tarde."
    );
  }
}

async function updateMeal(params: CreateMealParams) {
  try {
    const { meal } = params;
    const storageMeals = await getMeals();

    const updatedMeals = storageMeals?.map((storageMeal) => {
      if (storageMeal.id !== meal.id) return storageMeal;

      return meal;
    });

    const formattedMeal = JSON.stringify(updatedMeals);

    await AsyncStorage.setItem(STORAGE_KEYS.meals, formattedMeal);
  } catch (error) {
    console.error(error);
    throw new Error(
      "Não foi possível cadastrar a refeição no momento. Tente novamente mais tarde."
    );
  }
}

async function deleteMeal(id: string) {
  try {
    const storageMeals = await AsyncStorage.getItem(STORAGE_KEYS.meals);

    const meals: Meal[] = storageMeals ? JSON.parse(storageMeals) : [];

    const updateMeals = meals.filter((meal) => meal.id !== id);

    await AsyncStorage.setItem(STORAGE_KEYS.meals, JSON.stringify(updateMeals));
  } catch (error) {}
}

export const STORAGE_MEALS = {
  createMeal,
  getMeals,
  updateMeal,
  deleteMeal,
};
