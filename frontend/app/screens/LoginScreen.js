import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Keyboard, Pressable } from "react-native";

import * as Yup from "yup";
import { getStatusBarHeight } from "react-native-status-bar-height";

import colors from "../config/colors";
import {
  AppBackgroundCardView,
  AppBackgroundCardViewScrollable,
} from "../components/cards";
import { AppBackgroundImage, AppText } from "../components";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import authApi from "../apis/login";
import useAuth from "../auth/useAuth";
import AppBackground from "../components/AppBackground";

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

const StatusBarHeight = getStatusBarHeight();

function LoginScreen({ navigation }) {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // Keyboard is shown
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // Keyboard is hidden
      }
    );

    // Cleanup listeners on unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.loginUser(username, password);
    console.log(result.ok);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
    navigation.navigate("HomeScreen");
  };

  return (
    <AppBackground>
      {!keyboardVisible && (
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            position: "absolute",
            top: StatusBarHeight,
            height: 150,
            width: 150,
            alignSelf: "center",
          }}
        />
      )}
      {!keyboardVisible && (
        <AppText style={styles.caption}>Your Journey Begins Here!</AppText>
      )}
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
          <SubmitButton title="LOGIN" color="primary2" marginBottom={15} />
        </AppForm>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            flexDirection: "row",
          }}
        >
          <AppText
            style={{ fontSize: 14, color: colors.primary2, fontWeight: "500" }}
          >
            Not registered yet?
          </AppText>
          <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
            <AppText
              style={{
                fontSize: 14,
                color: colors.primary2,
                fontWeight: "500",
              }}
            >
              {" "}
              Register&gt;
            </AppText>
          </Pressable>
        </View>
      </AppBackgroundCardView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
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
  caption: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: StatusBarHeight + 156,
  },
  login: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "800",
    color: colors.primary2,
  },
});

export default LoginScreen;
