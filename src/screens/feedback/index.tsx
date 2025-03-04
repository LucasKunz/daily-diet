import { SafeAreaView, Text, View } from "react-native";
import { Image } from "expo-image";

import { Button } from "../../components/button";
import { COLORS } from "../../constants/colors";

import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import happyImage from "../../assets/happy-feedback.png";
import unhappyImage from "../../assets/sad-feedback.png";

type RouteParams = {
  isHealthyMeal: string;
};

export default function Feedback() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { isHealthyMeal } = params as RouteParams;

  const isHealthy = isHealthyMeal === "true";

  const title = isHealthy ? "Continue assim!" : "Que pena!";
  const description1 = isHealthy ? "Você continua " : "Você ";
  const description2 = isHealthy ? "dentro da dieta." : "saiu da dieta";
  const description3 = isHealthy
    ? " Muito bem!"
    : " dessa vez, mas continue se esforçando e não desista!";
  const imageSource = isHealthy ? happyImage : unhappyImage;
  const titleColor = isHealthy ? COLORS.GREEN : COLORS.RED;

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
      <Image style={styles.image} source={imageSource} />
      <Button
        buttonText="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
      />
    </SafeAreaView>
  );
}
