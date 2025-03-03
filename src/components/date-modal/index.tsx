import { Modal, View } from "react-native";
import DateTimePicker, {
  DateType,
  getDefaultStyles,
} from "react-native-ui-datepicker";
import styles from "./styles";
import { useState } from "react";

export type DateModalProps = {
  isVisible: boolean;
  onRequestClose: VoidFunction;
  onChange: (value: string) => void;
};

export function DateModal(props: DateModalProps) {
  const { isVisible, onChange, onRequestClose } = props;

  const [selected, setSelected] = useState<DateType>();
  const defaultStyles = getDefaultStyles();

  function handleChange({ date }: { date: DateType }) {
    const newDate = new Date(date as string);

    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const year = newDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    setSelected(date);
    onChange(formattedDate);
    onRequestClose();
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
          <DateTimePicker
            mode="single"
            date={selected}
            onChange={handleChange}
            styles={defaultStyles}
          />
        </View>
      </View>
    </Modal>
  );
}
