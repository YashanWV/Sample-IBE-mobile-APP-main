import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import HomeScreen2 from '../screens/HomeScreen2';
import LoginScreen from '../screens/LoginScreen';
import PreviousBookingsScreen from '../screens/PreviousBookingsScreen';
import FlightSearchScreen from '../screens/FlightSearchScreen';
import AvailableFlightsScreen from '../screens/AvailableFlightsScreen';
import RegiterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator initialRouteName='HomeScreen2'>
        <Stack.Screen name='HomeScreen2' component={HomeScreen2} options={{ headerShown: false }} />
        {/* <Stack.Screen name='LoginScreen' component={LoginScreen} /> */}
        <Stack.Screen name='RegisterScreen' component={RegiterScreen} />
        <Stack.Screen name='PreviousBookingsScreen' component={PreviousBookingsScreen} />
        <Stack.Screen name='FlightSearchScreen' component={FlightSearchScreen} />
        <Stack.Screen name='AvailableFlightsScreen' component={AvailableFlightsScreen} />
    </Stack.Navigator>
);

export default HomeNavigator;