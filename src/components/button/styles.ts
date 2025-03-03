import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.GRAY_200,
    borderRadius: 6,
    gap: 12,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  text: {
    color: COLORS.WHITE,
    fontWeight: "700",
  },
});
