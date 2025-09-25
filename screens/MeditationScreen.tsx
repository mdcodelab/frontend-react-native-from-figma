import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { s, vs } from 'react-native-size-matters';

function MeditationScreen() {
  const tabsArray = ['Live', 'Recorded'];
  const ACTIVE_BG = 'rgba(117, 86, 59, 1)';
  const ACTIVE_TEXT = '#fff';
  const INACTIVE_TEXT = 'rgba(44, 32, 22, 1)';

  const [selectedTab, setSelectedTab] = React.useState(tabsArray[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditations</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>

      <View style={styles.tabs}>
        {tabsArray.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[
              styles.tab,
              selectedTab === tab ? { backgroundColor: ACTIVE_BG, borderColor: ACTIVE_BG } : styles.tabInactive,
            ]}
            accessibilityRole="button"
            accessibilityState={{ selected: selectedTab === tab }}
          >
            <Text
              style={[
                styles.tabText,
                { color: selectedTab === tab ? ACTIVE_TEXT : INACTIVE_TEXT }
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default MeditationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: s(20),
    fontWeight: '600',
    letterSpacing: 0.3,
    marginTop: vs(8),
    color: 'rgba(29, 21, 15, 1)',
  },
  description: {
    fontSize: s(14),
    fontWeight: '400',
    marginTop: vs(8),
  },
  tabs: {
    flexDirection: 'row',
    gap: s(12),
    marginTop: vs(16),
    alignItems: "center",
    justifyContent: "space-between"
  },
  tab: {
    flex: 1,
    minWidth: s(162),
    height: s(32),
    paddingHorizontal: s(12),
    borderRadius: s(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(117, 86, 59, 1)',
  },
  tabInactive: {
    backgroundColor: 'transparent',
  },
  tabText: {
    fontSize: s(14),
    fontWeight: '600',
  },
});