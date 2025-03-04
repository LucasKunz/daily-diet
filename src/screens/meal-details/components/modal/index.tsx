import { Modal, Text, View } from "react-native";
import { Button } from "../../../../components/button";
import styles from "./styles";
import { ExcludeMealModalProps } from "./types";
import { STORAGE_MEALS } from "../../../../storage/meals";
import { useNavigation } from "@react-navigation/native";

export function ExcludeMealModal(props: ExcludeMealModalProps) {
  const { isVisible, mealId, onRequestClose } = props;

  const navigation = useNavigation();

  async function handleExcludeMeal() {
    await STORAGE_MEALS.deleteMeal(mealId);

    onRequestClose();
    navigation.navigate("home");
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>
            Deseja realmente excluir o registro da refeição?
          </Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <Button
              buttonText="Cancelar"
              style={{ flex: 1 }}
              variant="OUTLINE"
              onPress={onRequestClose}
            />
            <Button
              buttonText="Sim, excluir"
              style={{ flex: 1 }}
              onPress={handleExcludeMeal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
