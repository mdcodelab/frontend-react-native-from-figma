import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import { View , StyleSheet, Text} from 'react-native';
import SendButton from '../components/SendButton';
import SocialSection from '../components/SocialSection';

function ContactUsScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <BackButton></BackButton>
        <UserAvatar />
        </View>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.description}>Social media platforms</Text>
        <SocialSection />
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
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginVertical: 50
  },
  description: {
    fontSize: 20,
    marginBottom: 20,
  }

});
