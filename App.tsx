import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import InitialScreen from './screens/InitialScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import MeditationScreen from './screens/MeditationScreen';
import PaymentScreen from './screens/PaymentScreen';
import MainStackNavigator from './navigation/MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (  
    <NavigationContainer>
      <MainStackNavigator></MainStackNavigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Let screens manage their own layout; don't center them here.
  },
});
