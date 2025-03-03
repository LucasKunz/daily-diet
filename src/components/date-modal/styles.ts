import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: `rgba(0, 0, 0, 0.25)`,
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    elevation: 5,
    gap: 32,
    maxHeight: "50%",
    margin: 24,
    padding: 24,
    paddingTop: 40,
  },
});
