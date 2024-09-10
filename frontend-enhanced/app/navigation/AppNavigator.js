import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import FlightSearchNavigator from "./FlightSearchNavigator";
import colors from "../config/colors";
import RegiterScreen from "../screens/RegisterScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "";

  // Hide tab bar if navigating to RegisterScreen
  if (
    routeName === "RegisterScreen" ||
    routeName === "PreviousBookingsScreen" ||
    routeName === "AvailableFlightsScreen"
  ) {
    return "none"; // This hides the tab bar
  }
  return "flex"; // Default tab bar display
};

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: colors.white,
        height: Platform.OS === "android" ? 60 : 90,
        display: getTabBarVisibility(route),
      },
      tabBarLabelStyle: { marginBottom: 8 },
      tabBarActiveTintColor: colors.tertiary, // Color for the active icon and label
      tabBarInactiveTintColor: colors.formalerts,
    })}
  >
    <Tab.Screen
      name="Book"
      component={FlightSearchNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="airplane" color={color} size={30} />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={30} />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Settings"
      component={SettingsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={30} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
