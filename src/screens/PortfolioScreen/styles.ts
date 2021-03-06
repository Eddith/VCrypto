import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    height: 175,
    resizeMode: "contain",
  },
  balanceContainer: {
    marginVertical: 20,
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#777777",
  },
  balance: {
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default styles;
