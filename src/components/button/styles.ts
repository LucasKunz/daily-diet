import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
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
  primaryVariant: {
    backgroundColor: COLORS.GRAY_200,
  },
  outlineVariant: {
    borderColor: COLORS.GRAY_200,
    borderWidth: 1,
  },
  outlineTextVariant: {
    color: COLORS.GRAY_200,
  },
  disable: {
    opacity: 0.5,
  },
});
