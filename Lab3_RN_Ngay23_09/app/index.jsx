import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailProduct from './(tabs)/DetailProduct'
import ChooseColor from './(tabs)/ChooseColor'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator initialRouteName="detailProduct" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="ChooseColor" component={ChooseColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
