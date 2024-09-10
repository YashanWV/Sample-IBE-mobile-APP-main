import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Pressable,
  Keyboard,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import useAuth from "../auth/useAuth";
import authApi from "../apis/login";
import login from "../apis/login";
import * as Yup from "yup";

const StatusBarHeight = getStatusBarHeight();

import colors from "../config/colors";
import { AppText } from "../components";
import AppBackground from "../components/AppBackground";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AppButton } from "../components/buttons";
import { AppBackgroundCardView } from "../components/cards";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import { ListItemSeperator } from "../components/lists";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Email is a required field !")
    .email("Email must be a valid email !")
    .label("Email"),
  password: Yup.string()
    .required("Password is a required field !")
    .min(4, "Password must be at least 4 characters !")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter !")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter !")
    .matches(/[0-9]/, "Password must contain at least one number !")
    .matches(/[\W_]/, "Password must contain at least one special character !")
    .label("Password"),
});

function HomeScreen2({ navigation }) {
  const { user, logOut } = useAuth();
  const [username, setUsername] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [showLoginCard, setShowLoginCard] = useState(false);

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

  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.loginUser(username, password);
    console.log(result.ok);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    setShowLoginCard(false);
    auth.logIn(result.data);
    navigation.navigate("HomeScreen2");
  };

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
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => setShowLoginCard(true)}
          >
            <Text
              style={{
                fontSize: 23,
                color: colors.secondary,
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Text>
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
          <TouchableOpacity
            style={styles.bookingsButton}
            onPress={() => navigation.navigate("PreviousBookingsScreen")}
          >
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
        <AppButton
          title={"Book a Flight"}
          onPress={() => navigation.navigate("Book")}
          color={"bluegrey"}
          textColor={colors.tertiary}
          borderWidth={1}
          borderColor={colors.tertiary}
          marginTop={20}
          marginBottom={20}
        />
      </AppBackground>

      <Modal
        visible={showLoginCard}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLoginCard(false)} // Close the modal on request
      >
        <View style={styles.modalOverlay}>
          <AppBackgroundCardView style={styles.container}>
            <AppText style={styles.login}>LOGIN</AppText>
            <AppForm
              initialValues={{ username: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <ErrorMessage
                error="Invalid email and/or password."
                visible={loginFailed}
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="user-alt"
                iconSize={0.5}
                keyboardType="email-address"
                name="username"
                placeholder="Email"
                textContentType="emailAddress"
                marginBottom={18}
                padding={18}
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="key"
                iconSize={0.5}
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                marginBottom={18}
                padding={18}
              />
              <SubmitButton title="LOGIN" color="primary3" marginBottom={20} />
            </AppForm>
            <ListItemSeperator />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 18,
                marginTop: 18,
              }}
            >
              <AppText
                style={{
                  fontSize: 16,
                  color: colors.secondary,
                  fontWeight: "500",
                }}
              >
                Not registered yet?
              </AppText>
            </View>
            <AppButton
              title={"REGISTER"}
              onPress={() => {
                navigation.navigate("RegisterScreen");
                setShowLoginCard(false);
              }}
              color="tertiary"
              marginBottom={25}
            />
          </AppBackgroundCardView>
        </View>
      </Modal>
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
    right: 20,
  },
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
  },

  login: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "800",
    color: colors.primary3,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly dark overlay
    paddingHorizontal: 18,
  },
  seperator: {
    width: "100%",
  },
});

export default HomeScreen2;
