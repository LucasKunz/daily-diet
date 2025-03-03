import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 82,
    height: 70,
    padding: 24,
  },
  arrowContainer: {
    left: 24,
    position: "absolute",
    transform: [{ rotate: "-135deg" }],
  },
  arrow: {
    height: 24,
    width: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
