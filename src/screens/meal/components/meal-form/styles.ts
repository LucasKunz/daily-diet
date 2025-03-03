import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1,
    gap: 24,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  fieldsContainer: {
    gap: 8,
  },
  label: {
    color: COLORS.GRAY_200,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_500,
    borderRadius: 6,
    padding: 14,
    width: "100%",
  },
  radio: {
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: COLORS.GRAY_600,
    flexDirection: "row",
    gap: 8,
    flex: 1,
    height: 50,
    justifyContent: "center",
  },
  healthRadio: {
    backgroundColor: COLORS.GREEN_LIGHT,
    borderColor: COLORS.GREEN,
    borderWidth: 1,
  },
  unhealthyRadio: {
    backgroundColor: COLORS.RED_LIGHT,
    borderColor: COLORS.RED,
    borderWidth: 1,
  },
});
