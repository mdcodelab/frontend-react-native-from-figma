import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';

function PaymentBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>No master card added!</Text>
      <Text style={styles.subtitle}>You can add a mastercard and</Text>
      <Text style={styles.subtitle} style={{marginTop: "-20"}}>save it for latter</Text>
    </View>
  );
}

export default PaymentBox;

const styles = StyleSheet.create({
  container: {
    width: '100%', // full width
    height: vs(257),
    borderRadius: s(10),
    backgroundColor: 'rgba(247, 248, 249, 1)',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: vs(16),
    marginTop: vs(25),
  },
  centerText: {
    fontSize: 17,
    fontWeight: "700",
    color: "rgba(50, 52, 52, 1)",
  },
    subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "rgba(45, 45, 45, 1)",
  },
});
