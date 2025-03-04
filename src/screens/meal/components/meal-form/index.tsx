import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { COLORS } from "../../../../constants/colors";
import { Button } from "../../../../components/button";
import { useCallback, useEffect, useState } from "react";
import { HandleChangeInputParams, MealFormProps } from "./types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { STORAGE_MEALS } from "../../../../storage/meals";
import { DateModal } from "../../../../components/date-modal";

import UUID from "react-native-uuid";
import { useMeals } from "../../../../hooks/use-meals";

export const INIT_FORM_STATE = {
  id: "",
  name: "",
  description: "",
  date: "",
  hour: "",
  isHealthyMeal: undefined,
};

export function MealForm(props: MealFormProps) {
  const { id } = props;

  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [formData, setFormData] = useState(INIT_FORM_STATE);

  const { meals } = useMeals();

  const navigation = useNavigation();

  const buttonTitle = !!id ? "Salvar alterações" : "Cadastrar refeição";

  const isButtonDisabled =
    !formData.date ||
    !formData.hour ||
    typeof formData.isHealthyMeal == "undefined" ||
    !formData.name;

  useFocusEffect(
    useCallback(() => {
      if (!meals.length) return;

      const editingMeal = meals.find((meal) => meal.id === id);

      if (!editingMeal) return;

      setFormData(editingMeal);
    }, [meals])
  );

  function toggleDateModal() {
    setIsDateModalOpen(!isDateModalOpen);
  }

  function handleChangeInput(params: HandleChangeInputParams) {
    const { field, value } = params;

    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    if (isButtonDisabled) return;

    if (id) {
      await STORAGE_MEALS.updateMeal({ meal: formData });

      return navigation.goBack();
    }

    await STORAGE_MEALS.createMeal({ meal: { ...formData, id: UUID.v4() } });

    navigation.navigate("feedback", {
      isHealthyMeal: String(formData.isHealthyMeal),
    });
  }

  console.log(formData);

  function renderDateModal({
    isVisible,
    onRequestClose,
    onChange,
  }: {
    isVisible: boolean;
    onRequestClose: VoidFunction;
    onChange: (value: string) => void;
  }) {
    return (
      <DateModal
        isVisible={isVisible}
        onRequestClose={onRequestClose}
        onChange={onChange}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.fieldsContainer}>
        <Text
          aria-label="Label for name"
          nativeID="labelName"
          style={styles.label}
        >
          Nome
        </Text>
        <TextInput
          aria-label="input"
          aria-labelledby="labelName"
          style={styles.input}
          value={formData.name}
          onChange={(text) =>
            handleChangeInput({ field: "name", value: text.nativeEvent.text })
          }
        />
      </View>
      <View style={styles.fieldsContainer}>
        <Text
          aria-label="Label for description"
          nativeID="labelDescription"
          style={styles.label}
        >
          Descrição
        </Text>
        <TextInput
          aria-label="input"
          aria-labelledby="labelDescription"
          multiline
          numberOfLines={10}
          style={[styles.input, { height: 120 }]}
          value={formData.description}
          placeholder="Macro-nutrientes, modo de preparo.."
          onChange={(text) =>
            handleChangeInput({
              field: "description",
              value: text.nativeEvent.text,
            })
          }
        />
      </View>
      <View style={{ flexDirection: "row", gap: 24 }}>
        <View style={[styles.fieldsContainer, { flex: 1 }]}>
          <Text
            aria-label="Label for date"
            nativeID="labelDate"
            style={styles.label}
          >
            Data
          </Text>
          <TouchableOpacity style={styles.input} onPress={toggleDateModal}>
            <Text>{formData.date}</Text>
          </TouchableOpacity>
          {renderDateModal({
            isVisible: isDateModalOpen,
            onRequestClose: toggleDateModal,
            onChange: (value: string) =>
              handleChangeInput({ field: "date", value }),
          })}
        </View>
        <View style={[styles.fieldsContainer, { flex: 1 }]}>
          <Text
            aria-label="Label for hour"
            nativeID="labelHour"
            style={styles.label}
          >
            Hora
          </Text>
          <TextInput
            aria-label="input"
            aria-labelledby="labelHour"
            style={styles.input}
            value={formData.hour}
            placeholder="00:00"
            onChange={(text) =>
              handleChangeInput({
                field: "hour",
                value: text.nativeEvent.text,
              })
            }
          />
        </View>
      </View>

      <View style={[styles.fieldsContainer, { flex: 1 }]}>
        <Text
          aria-label="Label for date"
          nativeID="labelDate"
          style={styles.label}
        >
          Está dentro da dieta?
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity
            style={[styles.radio, formData.isHealthyMeal && styles.healthRadio]}
            onPress={() =>
              handleChangeInput({ field: "isHealthyMeal", value: true })
            }
          >
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 999,
                backgroundColor: COLORS.GREEN,
              }}
            />
            <Text>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radio,
              formData.isHealthyMeal === false && styles.unhealthyRadio,
            ]}
            onPress={() =>
              handleChangeInput({ field: "isHealthyMeal", value: false })
            }
          >
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 99,
                backgroundColor: COLORS.RED,
              }}
            />
            <Text>Não</Text>
          </TouchableOpacity>
        </View>
        <Button
          buttonText={buttonTitle}
          style={{ marginTop: "auto" }}
          onPress={handleSubmit}
          disabled={isButtonDisabled}
        />
      </View>
    </View>
  );
}
