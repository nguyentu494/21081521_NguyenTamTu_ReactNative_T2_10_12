import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screen1 from './screen/Screen1'
import screen2 from './screen/Screen2'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator initialRouteName="screen1" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="screen1" component={screen1} />
        <Stack.Screen name="screen2" component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
