import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, StyleSheet, Text, Platform, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import useAuth from "../auth/useAuth";
import login from "../apis/login";

const StatusBarHeight = getStatusBarHeight();

import colors from "../config/colors";
import { AppText } from "../components";
import AppBackground from "../components/AppBackground";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AppButton } from "../components/buttons";


function HomeScreen({ navigation }) {
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

  const firstName = userDetails
    ? userDetails.fullName.split(" ")[0].charAt(0).toUpperCase() +
    userDetails.fullName.split(" ")[0].slice(1).toLowerCase()
    : null;

  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
        {userDetails ? (
          <>
            <AppText style={styles.helloMessge}>Hello,</AppText>
            <AppText style={styles.name}>{firstName}!</AppText>
          </>
        ) : (
          <TouchableOpacity style={styles.loginButton} onPress={() => { navigation.navigate("LoginScreen") }}>
            <Text style={{ fontSize: 23, color: colors.secondary, fontWeight: "bold" }}>LOGIN</Text>
          </TouchableOpacity>
        )}
      </View>
      <AppBackground>
        <View style={styles.corouselContainer}>
          <Image
            style={styles.corouselImage}
            source={require("../assets/images/home1.jpg")}
          />
        </View>

        <View style={styles.bookingsButtonContainer}>
          <TouchableOpacity style={styles.bookingsButton} onPress={() => navigation.navigate("PreviousBookingsScreen")}>
            <AppText
              style={{
                position: "absolute",
                left: 20,
                right: 70,
                fontSize: 30,
                fontWeight: "semibold",
                color: colors.bluegrey,
                textAlign: "center",
              }}
            >
              Your Previous Booking Details
            </AppText>
            <FontAwesome5
              name="chevron-circle-right"
              size={23}
              color={colors.bluegrey1}
              style={{ position: "absolute", right: 20 }}
            />
          </TouchableOpacity>
        </View>
        <AppButton title={"Book a Flight"} onPress={() => navigation.navigate("Book")} color={"bluegrey"} textColor={colors.tertiary} borderWidth={1} borderColor={colors.tertiary} marginTop={20} marginBottom={20} />
      </AppBackground>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    width: "100%",
    height:
      Platform.OS === "android"
        ? StatusBarHeight + 70
        : StatusBarHeight * 3 + 70,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 1,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 50,
    position: "absolute",
    bottom: 10,
    left: 15,
  },
  helloMessge: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "semibold",
    color: colors.tertiary,
    position: "absolute",
    bottom: 40,
    right: 15,
  },
  name: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.secondary,
    position: "absolute",
    bottom: 10,
    right: 15,
  },
  corouselContainer: {
    width: "100%",
    flex: 1,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 20,
    marginTop: 20,
  },
  corouselImage: {
    flex: 1,
    width: "100%",
    borderRadius: 20,
  },
  bookingsButtonContainer: {
    width: "100%",
    height: 130,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 1,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: colors.tertiary,
    justifyContent: "center",
  },
  bookingsButton: {
    width: "100%",
    height: 130,
    borderRadius: 20,
    backgroundColor: colors.tertiary,
    justifyContent: "center",
  },
  loginButton: {
    height: 30,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 15
  },
});

export default HomeScreen;
