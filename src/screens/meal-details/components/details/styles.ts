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
  textContainer: {
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  smallTitle: {
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
  },
  tagContainer: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: COLORS.GRAY_600,
    borderRadius: 99,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tag: {
    borderRadius: 99,
    height: 8,
    width: 8,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    gap: 8,
    flex: 1,
  },
});
