import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import { s, vs } from 'react-native-size-matters';
import PaymentsList from '../components/PaymentsList';
import PaymentBox from '../components/PaymentBox';
import AddNewButton from '../components/AddNewButtpn';


function PaymentScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton></BackButton>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <PaymentsList></PaymentsList>
      <PaymentBox></PaymentBox>
      <AddNewButton></AddNewButton>
    </View>
  )
}

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: s(24),
    paddingVertical: vs(50),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: s(100),
    height: vs(32),
  },
  headerText: {
    fontSize: 17,
    fontWeight: "400",
    marginLeft: 10,
    color: "rgba(27, 28, 46, 1)",
  },
});