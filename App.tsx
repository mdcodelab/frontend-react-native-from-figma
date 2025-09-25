import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import InitialScreen from './screens/InitialScreen';
import ContactUsScreen from './screens/ContactUsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <InitialScreen /> */}
      <ContactUsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Let screens manage their own layout; don't center them here.
  },
});
