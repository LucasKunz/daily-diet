import { SafeAreaView, Text, View } from "react-native";
import { Image } from "expo-image";

import { Button } from "../../components/button";
import { COLORS } from "../../constants/colors";

import styles from "./styles";

export default function Feedback() {
  const isHealthyMeal = false;

  const title = isHealthyMeal ? "Continue assim!" : "Que pena!";
  const description1 = isHealthyMeal ? "Você continua " : "Você ";
  const description2 = isHealthyMeal ? "dentro da dieta." : "saiu da dieta";
  const description3 = isHealthyMeal
    ? " Muito bem!"
    : " dessa vez, mas continue se esforçando e não desista!";
  const imageSource = isHealthyMeal ? "happy-feedback.png" : "sad-feedback.png";
  const titleColor = isHealthyMeal ? COLORS.GREEN : COLORS.RED;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        <Text style={styles.description}>
          {description1}
          <Text style={{ fontWeight: "600" }}>{description2}</Text>
          {description3}
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require(`../../assets/${imageSource}`)}
      />
      <Button buttonText="Ir para a página inicial" />
    </SafeAreaView>
  );
}
