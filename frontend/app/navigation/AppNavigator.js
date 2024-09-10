import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from './HomeNavigator';
import FlightSearchNavigator from './FlightSearchNavigator';
import colors from '../config/colors';


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: colors.white, height: 60 },
        tabBarLabelStyle: { marginBottom: 8 },
        tabBarActiveTintColor: colors.tertiary,  // Color for the active icon and label
        tabBarInactiveTintColor: colors.primary3,
    }}>
        <Tab.Screen name='Home' component={HomeNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
                headerShown: false
            }} />

        <Tab.Screen name='Book' component={FlightSearchNavigator}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="airplane" color={color} size={30} />
                ),
                headerShown: false
            }} />
    </Tab.Navigator>
)

export default AppNavigator;