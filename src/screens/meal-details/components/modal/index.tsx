import { Modal, Text, View } from "react-native";
import { Button } from "../../../../components/button";
import styles from "./styles";
import { ExcludeMealModalProps } from "./types";

export function ExcludeMealModal(props: ExcludeMealModalProps) {
  const { isVisible, onRequestClose } = props;

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
            <Button buttonText="Sim, excluir" style={{ flex: 1 }} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
