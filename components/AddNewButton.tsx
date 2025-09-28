import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { s, vs } from 'react-native-size-matters';

function AddNewButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.containerText}>+ ADD NEW</Text>
    </TouchableOpacity>
  );
}

export default AddNewButton;

const styles = StyleSheet.create({
  container: {
    width: '100%', // full width
    height: vs(62),
    marginTop: vs(16),
    borderRadius: s(10),
    borderWidth: s(2),
    borderColor: 'rgba(240, 245, 250, 1)',
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    fontSize: 17,
    fontWeight: "700",
    color: 'rgba(255, 118, 234, 1)',
  },
});
