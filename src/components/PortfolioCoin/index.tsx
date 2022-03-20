import React from "react";
import { Text, View } from "../../components/Themed";
import styles from "./styles";

export interface PortfolioCoinProps {
  image: String;
  name: String;
  symbol: String;
  amount: Number;
  valueUSD: Number;
}

const PortfolioCoinScreen = (props: PortfolioCoinProps) => {
  const { image, name, symbol, amount, valueUSD } = props;
  return (
    <View style={styles.root}>
      <Text> Portfolio Screen </Text>
    </View>
  );
};

export default PortfolioCoinScreen;
