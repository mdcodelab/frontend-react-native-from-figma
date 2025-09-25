import React from 'react';
import SendButton from './SendButton';
import SocialCircle, { SocialName } from './SocialCircle';
import { View, StyleSheet, Text} from 'react-native';
import { s, vs } from 'react-native-size-matters';

const networks: SocialName[] = ['whatsapp', 'twitter', 'instagram', 'snapchat', 'tiktok'];

function labelFor(network: SocialName) {
  switch (network) {
    case 'whatsapp':
      return 'WhatsApp';
    case 'twitter':
      return 'Twitter';
    case 'instagram':
      return 'Instagram';
    case 'snapchat':
      return 'Snapchat';
    case 'tiktok':
      return 'TikTok';
  }
}

function SocialSection() {
  return (
    <View>
      {networks.map((n) => (
        <View key={n} style={styles.row}>
          <SocialCircle network={n} />
          <Text style={styles.text}>{labelFor(n)}</Text>
          <SendButton></SendButton>
        </View>
      ))}
    </View>
  )
}

export default SocialSection;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: s(0.5),
    borderBottomColor: '#E4E6E8',
    paddingVertical: vs(8),
  },
  text: {
    marginStart: s(8),
    flex: 1,
    fontSize: s(11),
    color: '#8083A3',
    letterSpacing: 0.2,
  },
});
