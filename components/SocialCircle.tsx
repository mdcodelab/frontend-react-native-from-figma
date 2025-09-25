import React from 'react';
import { TouchableOpacity, StyleSheet, View, ViewStyle } from 'react-native';
import { s } from 'react-native-size-matters';
import { FontAwesome, AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export type SocialName = 'whatsapp' | 'twitter' | 'instagram' | 'snapchat' | 'tiktok';

type SocialCircleProps = {
  network: SocialName;
  onPress?: () => void;
  style?: ViewStyle;
};

// Use Simple Icons CDN for clean SVGs
// Docs: https://simpleicons.org/ (CDN: https://cdn.simpleicons.org/<name>/<color?>)

const BRAND_COLOR = '#1077AF'; // match SendButton color

function SocialCircle({ network, onPress, style }: SocialCircleProps) {
  const size = s(14);

  const renderIcon = () => {
    switch (network) {
      case 'whatsapp':
        return <FontAwesome name="whatsapp" size={size} color={BRAND_COLOR} />;
      case 'twitter':
        // Use AntDesign twitter (X icon is not widely available across all sets)
        return <AntDesign name="twitter" size={size} color={BRAND_COLOR} />;
      case 'instagram':
        return <AntDesign name="instagram" size={size} color={BRAND_COLOR} />;
      case 'snapchat':
        return <FontAwesome name="snapchat-ghost" size={size} color={BRAND_COLOR} />;
      case 'tiktok':
        return <FontAwesome5 name="tiktok" size={size} color={BRAND_COLOR} />;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.circle, style]}
      accessibilityRole="button"
      accessibilityLabel={`${network} action`}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {renderIcon()}
    </TouchableOpacity>
  );
}

export default SocialCircle;

const styles = StyleSheet.create({
  circle: {
    width: s(24),
    height: s(24),
    borderRadius: s(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: s(1),
    borderColor: '#E4E6E8',
  },
});