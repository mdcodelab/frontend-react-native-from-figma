import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import { s, vs } from 'react-native-size-matters';

function PayMethodCard() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/payments/cash.svg")}
      style={styles.imageSvg}></Image>
      <Text style={styles.imageText}>Cash</Text>
    </View>
  );
}

export default PayMethodCard;

const styles = StyleSheet.create({
  container: {
    width: s(85),
    height: vs(93),
    borderRadius: 8,
    backgroundColor: 'rgba(243, 244, 246, 1)',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: vs(8),
  },
    imageSvg: {
    width: s(24),
    height: vs(24),
  },
    imageText: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(70, 78, 87, 1)",
  },
});
