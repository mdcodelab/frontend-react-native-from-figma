import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import { View , StyleSheet} from 'react-native';

function ContactUsScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <BackButton></BackButton>
        <UserAvatar />
        </View>
    </View>
  )
}

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

});
