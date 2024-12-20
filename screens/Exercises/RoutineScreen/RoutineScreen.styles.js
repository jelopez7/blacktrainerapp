import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentFlat: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  contentInfo: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  name: {
    fontWeight: "bold",
  },
  info: {
    color: "#828282",
    paddingRight: 100,
    marginTop: 3,
  },
});
