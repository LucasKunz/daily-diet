import { Modal, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { COLORS } from "../../../../constants/colors";
import { Button } from "../../../../components/button";
import { PencilLine, Trash2 } from "lucide-react-native";
import { useState } from "react";
import { ExcludeMealModal } from "../modal";

export function Details() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const title = "Sanduíche";
  const description =
    "Sanduíche de pão integral com atum e salada de alface e tomate";

  function toggleModalVisible() {
    setIsModalVisible(!isModalVisible);
  }

  function renderExcludeMealModal() {
    return (
      <ExcludeMealModal
        isVisible={isModalVisible}
        onRequestClose={toggleModalVisible}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.smallTitle}>Data e hora</Text>
        <Text style={styles.description}>12/08/2022 às 16:00</Text>
      </View>
      <View style={styles.tagContainer}>
        <View style={[styles.tag, { backgroundColor: COLORS.GREEN }]} />
        <Text>dentro da dieta</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button buttonText="Editar refeição">
          <PencilLine color={COLORS.WHITE} size={20} />
        </Button>
        <Button buttonText="Excluir refeição" onPress={toggleModalVisible}>
          <Trash2 color={COLORS.WHITE} size={20} />
        </Button>
      </View>
      {renderExcludeMealModal()}
    </View>
  );
}
