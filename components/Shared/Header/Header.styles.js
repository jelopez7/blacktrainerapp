import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    margin: 15,
  },
  titleView: {
    flex: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contentHeader: {
    flex: 1,
    marginTop: 30,
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentIcon: {
    alignItems: "center",
  },
  textInfo: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textInfoData: {
    color: "#e28316",
    fontSize: 15,
  },
  description: {
    marginTop: 15,
    color: "#828282",
    textAlign: "center",
  },
});
