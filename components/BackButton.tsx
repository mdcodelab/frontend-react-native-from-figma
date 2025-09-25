import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { s } from 'react-native-size-matters';

function BackButton() {
  return (
    <TouchableOpacity style={styles.backButton} accessibilityRole="button" accessibilityLabel="Back">
      <Image source={require("../assets/cross.png")} style={styles.backButtonImage}></Image>
    </TouchableOpacity>
  )
}

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonImage: {
    width: s(24),
    height: s(24),
  },

});
