import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';

function UserAvatar() {
  return (
      <Image
        source={require("../assets/avatar.png")}
        style={styles.avatar}
        accessibilityLabel="User avatar"
      />
  )
}

export default UserAvatar;

const AVATAR_BASE = 32; // base size in dp

const styles = StyleSheet.create({
  avatar: {
    // For a square avatar you can use s() for both dimensions
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
