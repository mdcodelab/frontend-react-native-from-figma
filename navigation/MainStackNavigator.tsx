
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "../screens/InitialScreen";
import MeditationScreen from "../screens/MeditationScreen";
import PaymentScreen from "../screens/PaymentScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import { View, Text, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      {/* Home Screen */}
      <Stack.Screen 
        name="Home" 
        component={InitialScreen} 
        options={{ headerShown: false }} 
      />

      {/* Meditation Screen */}
      <Stack.Screen 
        name="Meditation" 
        component={MeditationScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
              {/* Săgeata dreapta către Contact Us */}
              <TouchableOpacity onPress={() => navigation.navigate("Contact Us")}>
                <Text style={{ fontSize: 18, marginRight: 10, backgroundColor: "transparent" }}>→</Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />

      {/* Contact Us Screen */}
      <Stack.Screen 
        name="Contact Us" 
        component={ContactUsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
              {/* Săgeata dreapta către Payment */}
              <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
                <Text style={{ fontSize: 18, marginRight: 10, backgroundColor: "transparent" }}>→</Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />

      {/* Payment Screen */}
      <Stack.Screen 
        name="Payment" 
        component={PaymentScreen}
        options={{ headerShown: true }} 
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
