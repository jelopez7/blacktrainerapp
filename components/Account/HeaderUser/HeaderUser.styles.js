import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    margin: 10,
    borderWidth: 3,
    borderColor: "#99e5f3",
    borderRadius: 10,
  },
  info: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  description: {
    color: "grey",
  },
  separator: {
    width: 3,
    backgroundColor: "#99e5f3",
    alignSelf: "stretch",
  },
});
