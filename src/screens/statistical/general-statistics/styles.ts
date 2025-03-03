import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: "600",
  },
  cardsContainer: {
    gap: 12,
    marginTop: 24,
    width: "100%",
  },
});
