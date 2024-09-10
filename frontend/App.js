import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";

import LoginScreen from "./app/screens/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegiterScreen1 from "./app/screens/RegisterScreen1";
import RegiterScreen2 from "./app/screens/RegisterScreen2";
import RegiterScreen3 from "./app/screens/RegisterScreen3";
import RegiterScreen from "./app/screens/RegisterScreen";
import FlightSearchScreen from "./app/screens/FlightSearchScreen";
import AppPicker from "./app/components/AppPicker";
import AvailableFlightsScreen from "./app/screens/AvailableFlightsScreen";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import HomeScreen from "./app/screens/HomeScreen";
import PreviousBookingsScreen from "./app/screens/PreviousBookingsScreen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";


const Stack = createStackNavigator();

export default function App() {
  let x = 1;

  console.log("App executed!");

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {/* <Stack.Navigator initialRouteName="LoginScreen"> */}
        {/* <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="RegisterScreen1" component={RegiterScreen1} />
        <Stack.Screen name="RegisterScreen2" component={RegiterScreen2} />
        <Stack.Screen name="RegisterScreen3" component={RegiterScreen3} />
        <Stack.Screen name="PreviousBookingsScreen" component={PreviousBookingsScreen} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegiterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FlightSearchScreen" component={FlightSearchScreen} />
        <Stack.Screen
          name="AvailableFlightsScreen"
          component={AvailableFlightsScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
        <AppNavigator />
        {/* </Stack.Navigator> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );

  // return <AppPicker icon={"key"} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
