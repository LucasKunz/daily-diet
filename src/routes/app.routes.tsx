import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Feedback from "../screens/feedback";
import Meal from "../screens/meal";
import MealDetails from "../screens/meal-details";
import Statistical from "../screens/statistical";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="meal" component={Meal} />
      <Screen name="meal-details" component={MealDetails} />
      <Screen name="statistical" component={Statistical} />
    </Navigator>
  );
}
