import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import HomeScreen2 from "../screens/HomeScreen2";
import LoginScreen from "../screens/LoginScreen";
import PreviousBookingsScreen from "../screens/PreviousBookingsScreen";
import FlightSearchScreen from "../screens/FlightSearchScreen";
import AvailableFlightsScreen from "../screens/AvailableFlightsScreen";
import RegiterScreen from "../screens/RegisterScreen";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "../config/colors";

const StatusBarHeight = getStatusBarHeight();

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="HomeScreen2">
    <Stack.Screen
      name="HomeScreen2"
      component={HomeScreen2}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen name='LoginScreen' component={LoginScreen} /> */}
    <Stack.Screen
      name="RegisterScreen"
      component={RegiterScreen}
      options={{
        title: "REGISTER",
        headerTitleAlign: "center",
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Ionicons name="chevron-back" size={23} color={colors.tertiary} />
        ),
      }}
    />
    {/* <Stack.Screen name='RegisterScreenNavigator' component={RegisterScreenNavigator} options={{ headerShown: false }} /> */}
    <Stack.Screen
      name="PreviousBookingsScreen"
      component={PreviousBookingsScreen}
      options={{
        title: "PREVIOUS BOOKINGS",
        headerTitleAlign: "center",
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Ionicons name="chevron-back" size={23} color={colors.tertiary} />
        ),
      }}
    />
    {/* <Stack.Screen name='FlightSearchScreen' component={FlightSearchScreen} /> */}
    {/* <Stack.Screen
      name="AvailableFlightsScreen"
      component={AvailableFlightsScreen}
    /> */}
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  headerStyle: {
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 1,
    height:
      Platform.OS === "android"
        ? StatusBarHeight + 70
        : StatusBarHeight * 3 + 70,
    backgroundColor: colors.white,
    // borderBottomWidth: 0.19,
    // borderBottomColor: colors.listseperators
  },
  headerTitleStyle: {
    fontSize: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Inter",
    fontWeight: "700",
    color: colors.tertiary,
  },
});

export default HomeNavigator;
