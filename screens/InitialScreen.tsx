import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function InitialScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.png")}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="Logo"
      />
      <Image source={require("../assets/Ellipse2.png")} style={styles.bottomImage}></Image>
    </View>
  )
}

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
  },
  bottomImage: {
    width: 200,
    height: 200,
    position: "absolute",
    bottom: 0,
    right: 0,
  }
});
