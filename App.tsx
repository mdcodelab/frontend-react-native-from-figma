import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={()=> Alert.alert("Press")}>Hello World!</Text>
      <Image 
        source={require("./assets/icon.png")}
        style={styles.myImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // ca să fie textul pe mijloc
    alignItems: 'center'
  },
  myImage: {
    width: 100,
    height: 100,
    marginTop: 12,
  }
});
