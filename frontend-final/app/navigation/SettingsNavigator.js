import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import colors from "../config/colors";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";

const StatusBarHeight = getStatusBarHeight();

const Stack = createStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator initialRouteName="SettingsScreen">
    <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{
        title: "ACCOUNT",
        headerTitleAlign: "center",
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerBackTitleVisible: false,
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

export default SettingsNavigator;
