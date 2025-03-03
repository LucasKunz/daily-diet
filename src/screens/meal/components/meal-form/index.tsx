import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { COLORS } from "../../../../constants/colors";
import { Button } from "../../../../components/button";
import { useState } from "react";
import { HandleChangeInputParams } from "./types";

export const INIT_FORM_STATE = {
  name: "",
  description: "",
  date: "",
  hour: "",
  isHealthyMeal: undefined,
};

export function MealForm() {
  const [formData, setFormData] = useState(INIT_FORM_STATE);

  function handleChangeInput(params: HandleChangeInputParams) {
    const { field, value } = params;

    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  function handleSubmit() {
    console.log(INIT_FORM_STATE);
    console.log(formData);
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
          <TextInput
            aria-label="input"
            aria-labelledby="labelDate"
            style={styles.input}
            keyboardType="numeric"
            inputMode="numeric"
            value={formData.date}
            onChange={(text) =>
              handleChangeInput({ field: "date", value: text.nativeEvent.text })
            }
          />
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
            onChange={(text) =>
              handleChangeInput({ field: "hour", value: text.nativeEvent.text })
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
              !formData.isHealthyMeal && styles.unhealthyRadio,
            ]}
            onPress={() =>
              handleChangeInput({ field: "isHealthyMeal", value: false })
            }
          >
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 999,
                backgroundColor: COLORS.RED,
              }}
            />
            <Text>Não</Text>
          </TouchableOpacity>
        </View>
        <Button
          buttonText="Cadastrar refeição"
          style={{ marginTop: "auto" }}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
