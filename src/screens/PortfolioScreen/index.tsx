import React from "react";
import { Text, View } from "../../components/Themed";
import { Image } from "react-native";
import styles from "./styles";
const image = require("../../../assets/images/Saly-10.png");

const portfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    symbol: "USD",
    amount: 69.42,
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Welcome to VCrypto</Text>
        <Text style={styles.balance}>$69.420</Text>
      </View>
    </View>
  );
};

export default PortfolioScreen;
