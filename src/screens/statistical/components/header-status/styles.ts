import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.GREEN_LIGHT,
    height: 200,
    justifyContent: "center",
    padding: 32,
  },
  textPercentage: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 42,
  },
  arrowContainer: {
    position: "absolute",
    top: 8,
    left: 28,
    transform: [{ rotate: "-90deg" }],
  },
  arrow: {
    height: 24,
    width: 24,
  },
});
