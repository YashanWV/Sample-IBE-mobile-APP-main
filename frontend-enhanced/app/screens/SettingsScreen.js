import React from "react";
import { useState, useEffect } from "react";
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

function SettingsScreen({ navigation }) {
  const { user, logOut } = useAuth();
  const [username, setUsername] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user) {
      setUsername(user.sub);
      console.log(typeof username);
    }
  }, [user]);

  useEffect(() => {
    if (username) {
      loadUser();
    }
  }, [username]);

  const loadUser = async () => {
    const response = await login.getUser(username);

    console.log(response.data);
    setUserDetails(response.data);
  };

  const auth = useAuth();

  const handleSubmit = async () => {
    auth.logOut();
    navigation.navigate("HomeScreen2");
  };

  return (
    <AppBackgroundScrollable>
      <AppBackgroundCardView style={[styles.container, { marginTop: 20 }]}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <MaterialCommunityIcons
            name="account-circle"
            size={50}
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
        <ListItemSeperator />
        <View style={{ alignItems: "flex-start", marginBottom: 15 }}>
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            Email: {userDetails ? userDetails.username : ""}
          </AppText>

          <ListItemSeperator />
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            Country: {userDetails ? userDetails.country.countryName : ""}
          </AppText>
          <ListItemSeperator />
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            Nationality:{" "}
            {userDetails ? userDetails.nationality.nationality : ""}
          </AppText>
          <ListItemSeperator />
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            Gender: {userDetails ? userDetails.gender.gender : ""}
          </AppText>
          <ListItemSeperator />
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            Birthday: {userDetails ? userDetails.birthday : ""}
          </AppText>
          <ListItemSeperator />
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            Passport ID: {userDetails ? userDetails.passport : ""}
          </AppText>
          <ListItemSeperator />
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            NIC: {userDetails ? userDetails.nic : ""}
          </AppText>
          <ListItemSeperator />
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            Contact Number: {userDetails ? userDetails.contact : ""}
          </AppText>
          <ListItemSeperator />
          <AppText
            style={{
              fontSize: 20,
              marginTop: 10,
              color: colors.black,
            }}
          >
            Address: {userDetails ? userDetails.address : ""}
          </AppText>
          <ListItemSeperator />
        </View>
        <ListItemSeperator />

        <AppButton
          title={"LOGOUT"}
          onPress={handleSubmit}
          color={"black"}
          marginTop={10}
        />
      </AppBackgroundCardView>
    </AppBackgroundScrollable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 7,
    elevation: 3,
    paddingLeft: 18,
    paddingRight: 18,
    marginBottom: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
});

export default SettingsScreen;
