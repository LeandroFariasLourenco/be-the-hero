import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Incidents from './../pages/Incidents/index';
import Details from './../pages/Details/index';
import React from 'react';

const AppStack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }}>
        <AppStack.Screen name="Incident" component={Incidents} />
        <AppStack.Screen name="Detail" component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}