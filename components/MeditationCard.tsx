import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AntDesign from '@expo/vector-icons/AntDesign';

function MeditationCard() {
    const phoneWidth = Dimensions.get('window').width;
    const cardWidth = phoneWidth - s(16);

  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        source={require('../assets/1.webp')}
        style={styles.card} 
        imageStyle={styles.cardImage}
      >
      </ImageBackground>
      <View style={styles.cardLayer}>
        <View style={styles.liveContainer}><Text style={styles.liveText}>Live</Text></View>
        <Text style={styles.title}>Meditation</Text>
        <View style={styles.heartContainer}>
            <AntDesign name="video-camera" size={s(12)} color="#rgba(74, 140, 255, 1)" />
            <Text style={styles.heartText}>31st Jan 09:00 am</Text>
        </View>
      </View>
    </View>
  );
}

export default MeditationCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: s(155),
    height: vs(150),
    borderRadius: s(12),
    overflow: 'hidden',
    backgroundColor: '#EDEFF2', // fallback bg while image loads
  },
  card: {
    width: '100%',
    height: '100%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
  },
  title: {
    fontSize: s(12),
    fontWeight: 'semibold',
    color: '#fff',
    position: 'absolute',
    zIndex: 100,
    bottom: s(10),
    left: s(0),
    padding: s(10),
    marginBottom: s(5),
  },
  cardLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  heartText: {
    fontSize: s(10),
    color: '#fff',
  },
  liveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: s(39),
    height: s(22),
    backgroundColor: "rgba(228, 17, 17, 1)",
    borderRadius: s(90),
    position: 'absolute',
    zIndex: 100,
    top: s(8),
    right: s(8),

  },
  liveText: {
    fontSize: s(10),
    color: '#fff',
  },
  heartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(4),
    position: 'absolute',
    zIndex: 100,
    bottom: s(0),
    left: s(0),
    padding: s(10),
  },
});