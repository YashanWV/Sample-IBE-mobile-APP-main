import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import FlightSearchScreen from "../screens/FlightSearchScreen";
import AvailableFlightsScreen from "../screens/AvailableFlightsScreen";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "../config/colors";

const StatusBarHeight = getStatusBarHeight();

const Stack = createStackNavigator();

const FlightSearchNavigator = () => (
  <Stack.Navigator initialRouteName="FlightSearchScreen">
    <Stack.Screen
      name="FlightSearchScreen"
      component={FlightSearchScreen}
      options={{
        title: "SEARCH FOR FLIGHTS",
        headerTitleAlign: "center",
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="AvailableFlightsScreen"
      component={AvailableFlightsScreen}
      options={{
        title: "AVAILABLE FLIGHTS",
        headerTitleAlign: "center",
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Ionicons name="chevron-back" size={23} color={colors.tertiary} />
        ),
      }}
    />
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

export default FlightSearchNavigator;
