import React from 'react';
import UserAvatar from '../components/UserAvatar';
import { View , StyleSheet} from 'react-native';

function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <UserAvatar />
    </View>
  )
}

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

});
