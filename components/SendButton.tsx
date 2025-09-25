import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { s } from "react-native-size-matters";

function SendButton() {
  return (
    <TouchableOpacity style={styles.sendButton} accessibilityRole="button" accessibilityLabel="Send">
      <Image
        source={require("../assets/icons/shape.png")}
        style={styles.sendButtonImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  )
}

export default SendButton;

const styles = StyleSheet.create({
    sendButton: {
        width: s(24),
        height: s(24),
        borderRadius: s(12),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1077AF"
    },
    sendButtonImage: {
        width: s(16),
        height: s(16),
        tintColor: '#fff',
    },
});