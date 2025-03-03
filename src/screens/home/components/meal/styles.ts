import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    marginTop: 32,
  },
  mealContainer: {
    alignItems: "center",
    borderColor: COLORS.GRAY_500,
    borderRadius: 6,
    borderWidth: 1,
    gap: 12,
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  hour: {
    fontWeight: "600",
  },
  separator: {
    backgroundColor: COLORS.GRAY_400,
    height: "100%",
    width: 1,
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
  healthy: {
    borderRadius: 99,
    height: 14,
    width: 14,
  },
});
