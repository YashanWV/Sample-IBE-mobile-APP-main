import React from "react";
import { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import useAuth from "../auth/useAuth";
import authApi from "../apis/login";
import login from "../apis/login";
import AppBackgroundScrollable from "../components/AppBackgroundScrollable";
import { AppBackgroundCardView } from "../components/cards";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";
import { AppText } from "../components";
import { ListItemSeperator } from "../components/lists";
import { AppButton } from "../components/buttons";
import { UserContext } from "../config/UserContext";

function SettingsScreen({ navigation }) {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const auth = useAuth();

  // const handleLogout = () => {
  //   auth.logOut();
  //   //navigation.reset();
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: "Home" }], // Ensure 'routes' is an array with at least one route
  //   });
  //   navigation.navigate("Home");
  // };

  const handleLogout = () => {
    console.log("Logging out...");
    auth.logOut(); // Call the logOut function to clear user data and token

    // // Navigate to login screen and reset navigation stack
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "HomeScreen2" }], // Correctly define 'routes' array
    // });

    setUserDetails(null); // Clear userDetails from context

    // Navigate to HomeScreen2 and reset navigation stack
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });

    //navigation.navigate("HomeScreen2");

    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Home", params: { refresh: true } }], // Pass a refresh parameter
    // });
  };

  return (
    <AppBackgroundScrollable>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          backgroundColor: colors.listseperators,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          padding: 10,

          elevation: 3,
        }}
      >
        <MaterialCommunityIcons
          name="account-circle"
          size={45}
          color={colors.formalerts}
        />
        <AppText
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginLeft: 15,
            color: colors.tertiary,
          }}
        >
          {userDetails ? userDetails.fullName : ""}
        </AppText>
      </View>
      {/* <ListItemSeperator /> */}
      <View
        style={{
          width: "100%",
          backgroundColor: colors.white,

          elevation: 3,
          paddingLeft: 18,
          paddingRight: 18,
          //marginBottom: 15,
          //paddingBottom: 30,
          //paddingTop: 10,
        }}
      >
        {userDetails ? (
          <>
            <View style={{ alignItems: "flex-start" }}>
              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                Email: {userDetails ? userDetails.username : ""}
              </AppText>

              <ListItemSeperator />

              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                Country: {userDetails ? userDetails.country.countryName : ""}
              </AppText>
              <ListItemSeperator />
              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                Nationality:{" "}
                {userDetails ? userDetails.nationality.nationality : ""}
              </AppText>
              <ListItemSeperator />
              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                Gender: {userDetails ? userDetails.gender.gender : ""}
              </AppText>
              <ListItemSeperator />
              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                Birthday: {userDetails ? userDetails.birthday : ""}
              </AppText>
              <ListItemSeperator />
              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                Passport ID: {userDetails ? userDetails.passport : ""}
              </AppText>
              <ListItemSeperator />
              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                NIC: {userDetails ? userDetails.nic : ""}
              </AppText>
              <ListItemSeperator />
              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                Contact Number: {userDetails ? userDetails.contact : ""}
              </AppText>
              <ListItemSeperator />
              <AppText
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  marginBottom: 15,
                  color: colors.black,
                }}
              >
                Address: {userDetails ? userDetails.address : ""}
              </AppText>
            </View>
          </>
        ) : null}
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: colors.listseperators,
          height: 80,

          elevation: 3,
          paddingLeft: 18,
          paddingRight: 18,
          marginBottom: 15,

          //paddingTop: 5,
          borderBottomStartRadius: 20,
          borderBottomEndRadius: 20,
        }}
      >
        {userDetails ? (
          <AppButton
            title={"LOGOUT"}
            onPress={handleLogout}
            color="tertiary"
            //textColor={colors.formalerts}
            marginTop={10}
            marginBottom={10}
          />
        ) : // <>
        //   <ListItemSeperator color={colors.formalerts} />
        //   <View
        //     style={{
        //       width: "100%",
        //       backgroundColor: colors.listseperators,
        //       height: 30,

        //       elevation: 3,

        //       marginBottom: 15,

        //       //paddingTop: 5,
        //       borderBottomStartRadius: 20,
        //       borderBottomEndRadius: 20,
        //     }}
        //   />
        // </>
        null}
      </View>
    </AppBackgroundScrollable>
  );
}

export default SettingsScreen;
