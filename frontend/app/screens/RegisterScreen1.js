import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Keyboard, Pressable } from "react-native";

import * as Yup from "yup";
import { getStatusBarHeight } from "react-native-status-bar-height";

import colors from "../config/colors";
import { AppBackgroundCardView } from "../components/cards";
import { AppBackgroundImage, AppText } from "../components";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string()
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
  confirmPassword: Yup.string()
    .required("Password confirmation is a required field !")
    .oneOf([Yup.ref("password"), null], "Passwords must match !")
    .label("Confirm Password"),
});

const StatusBarHeight = getStatusBarHeight();

function RegiterScreen1({ navigation }) {
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

  return (
    <AppBackgroundImage>
      {!keyboardVisible && (
        <Image
          source={require("../assets/images/logo.png")}
          style={{ position: "absolute", top: StatusBarHeight }}
        />
      )}
      {!keyboardVisible && (
        <AppText style={styles.caption}>Your Journey Begins Here!</AppText>
      )}
      <AppBackgroundCardView style={styles.container}>
        <AppText style={styles.register}>REGISTER</AppText>
        <AppForm
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="user-alt"
            iconSize={0.5}
            keyboardType="email-address"
            name="email"
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
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="key"
            iconSize={0.5}
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="password"
            marginBottom={18}
            padding={18}
          />
          <SubmitButton title="NEXT" color="secondary" marginBottom={15} />
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
            style={{ fontSize: 14, color: colors.secondary, fontWeight: "500" }}
          >
            Already have an account?
          </AppText>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <AppText
              style={{
                fontSize: 14,
                color: colors.secondary,
                fontWeight: "500",
              }}
            >
              {" "}
              Login&gt;
            </AppText>
          </Pressable>
        </View>
      </AppBackgroundCardView>
    </AppBackgroundImage>
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
    paddingLeft: 20,
    paddingRight: 20,
    position: "relative",
    marginTop: 100,
  },
  caption: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: StatusBarHeight + 156,
  },
  register: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "800",
    color: colors.primary2,
  },
});

export default RegiterScreen1;
