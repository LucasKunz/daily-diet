import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 32,
  },
  content: {
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.GREEN_LIGHT,
    height: 102,
    justifyContent: "center",
    marginHorizontal: 24,
    padding: 20,
  },
  textPercentage: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 42,
  },
  arrowContainer: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  arrow: {
    transform: [{ rotate: "45deg" }],
  },
});
