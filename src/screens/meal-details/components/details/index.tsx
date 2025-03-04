import { Modal, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { COLORS } from "../../../../constants/colors";
import { Button } from "../../../../components/button";
import { PencilLine, Trash2 } from "lucide-react-native";
import { useState } from "react";
import { ExcludeMealModal } from "../modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMeals } from "../../../../hooks/use-meals";

type RouteParams = {
  id: string;
};

export function Details() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { meals } = useMeals();
  const { params } = useRoute();
  const navigation = useNavigation();
  const { id } = params as RouteParams;

  const meal = meals.find((meal) => meal.id === id);
  const { name, date, description, hour } = meal || {};

  const tagTitle = meal?.isHealthyMeal ? "Dentro" : "Fora";
  const tagColor = meal?.isHealthyMeal ? COLORS.GREEN : COLORS.RED;

  function toggleModalVisible() {
    setIsModalVisible(!isModalVisible);
  }

  function renderExcludeMealModal() {
    return (
      <ExcludeMealModal
        mealId={id}
        isVisible={isModalVisible}
        onRequestClose={toggleModalVisible}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.smallTitle}>Data e hora</Text>
        <Text style={styles.description}>
          {date} às {hour}
        </Text>
      </View>
      <View style={styles.tagContainer}>
        <View style={[styles.tag, { backgroundColor: tagColor }]} />
        <Text>{tagTitle} da dieta</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonText="Editar refeição"
          onPress={() => navigation.navigate("meal", { id })}
        >
          <PencilLine color={COLORS.WHITE} size={20} />
        </Button>
        <Button
          buttonText="Excluir refeição"
          variant="OUTLINE"
          onPress={toggleModalVisible}
        >
          <Trash2 color={COLORS.GRAY_200} size={20} />
        </Button>
      </View>
      {renderExcludeMealModal()}
    </View>
  );
}
