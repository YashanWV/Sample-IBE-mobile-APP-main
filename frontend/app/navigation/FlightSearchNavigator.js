import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FlightSearchScreen from '../screens/FlightSearchScreen';
import AvailableFlightsScreen from '../screens/AvailableFlightsScreen';

const Stack = createStackNavigator();

const FlightSearchNavigator = () => (
    <Stack.Navigator initialRouteName='FlightSearchScreen'>
        <Stack.Screen name='FlightSearchScreen' component={FlightSearchScreen} />
        <Stack.Screen name='AvailableFlightsScreen' component={AvailableFlightsScreen} />
    </Stack.Navigator>
);

export default FlightSearchNavigator;