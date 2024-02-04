import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurentScreen from './src/screens/RestaurentScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './src/screens/BasketScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen  name="Home" component={HomeScreen} />
          <Stack.Screen  name="Restaurent" component={RestaurentScreen} />
          <Stack.Screen  name="Basket" component={BasketScreen} options={{presentation: 'modal'}}/>
          <Stack.Screen  name="PreparingOrder" component={PreparingOrderScreen} />
          <Stack.Screen  name="Delivery" component={DeliveryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
