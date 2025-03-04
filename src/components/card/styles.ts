import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 8,
    gap: 8,
    padding: 16,
    width: "auto",
  },
  description: {
    color: COLORS.GRAY_200,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
});
