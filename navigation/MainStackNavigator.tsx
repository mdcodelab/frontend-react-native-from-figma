
import { createStackNavigator } from "@react-navigation/stack";
// Corect: folosește "@react-navigation/stack" în loc de "react-navigation/stack"

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={InitialScreen} />
            <Stack.Screen name="Meditation" component={MeditationScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;
