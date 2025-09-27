import React from 'react';
import { View, StyleSheet, Image, Text, ImageSourcePropType } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { MaterialIcons } from '@expo/vector-icons';

// definești tipul props-urilor
interface PayMethodCardProps {
  image: ImageSourcePropType;
  method: string;
  selected: boolean;
}

function PayMethodCard({ image, method, selected }: PayMethodCardProps) {
  return (
    <View style={[styles.container, selected && styles.selectedContainer]}>
      {selected && (
        <MaterialIcons 
          name="check-circle" 
          size={28} 
          color="rgba(225, 118, 34, 1)"
          style={{ position: "absolute", top: -1, right: 0 }} 
        />
      )}
      <Image source={image} style={styles.imageSvg} />
      <Text style={styles.imageText}>{method}</Text>
    </View>
  );
}

export default PayMethodCard;

const styles = StyleSheet.create({
  container: {
    width: s(85),
    height: vs(93),
    borderRadius: 8,
    backgroundColor: 'rgba(243, 244, 246, 1)',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: vs(8),
    position: "relative"
  },
  selectedContainer: {
    backgroundColor: "white",
    borderWidth: s(2),
    borderColor: "rgba(225, 118, 34, 1)",
  },
  imageSvg: {
    width: s(24),
    height: vs(24),
  },
  imageText: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(70, 78, 87, 1)",
  },
});
