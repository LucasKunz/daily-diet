import { Text, View } from "react-native";

import styles from "./styles";
import { Card } from "../../../components/card";
import { COLORS } from "../../../constants/colors";

export function GeneralStatistics() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estatísticas gerais</Text>
      <View style={styles.cardsContainer}>
        <Card
          description="melhor sequência de pratos dentro da dieta"
          title="22"
        />
        <Card description="refeições registradas" title="109" />
        <View
          style={{
            gap: 12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card
            description="refeições registradas"
            title="109"
            backgroundColor={COLORS.GREEN_LIGHT}
          />
          <Card
            description="refeições registradas"
            title="109"
            backgroundColor={COLORS.RED_LIGHT}
          />
        </View>
      </View>
    </View>
  );
}
