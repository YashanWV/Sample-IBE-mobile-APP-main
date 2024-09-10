import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Keyboard, Pressable } from "react-native";

import * as Yup from "yup";
import { getStatusBarHeight } from "react-native-status-bar-height";

import colors from "../config/colors";
import { AppBackgroundCardView } from "../components/cards";
import { AppBackgroundImage, AppText } from "../components";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Name is a required field !")
    .max(50, "Name must be at most 50 characters !")
    .label("Full Name"),
  contact: Yup.string()
    .required("Contact number is a required field !")
    .label("Contact Number"),
  address: Yup.string()
    .required("Address is a required field !")
    .label("Address"),
});

const StatusBarHeight = getStatusBarHeight();

function RegiterScreen3({ navigation }) {
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
          initialValues={{ fullName: "", contact: "", address: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="user-alt"
            iconSize={0.5}
            name="fullName"
            placeholder="Full Name"
            marginBottom={18}
            padding={18}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            iconSize={0.5}
            name="contact"
            placeholder="Contact Number"
            secureTextEntry
            marginBottom={18}
            padding={18}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="address-book"
            iconSize={0.5}
            name="address"
            placeholder="Address"
            secureTextEntry
            marginBottom={18}
            padding={18}
          />
          <SubmitButton title="FINISH" color="primary2" marginBottom={15} />
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
            Already have an account?
          </AppText>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <AppText
              style={{
                fontSize: 14,
                color: colors.primary2,
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

export default RegiterScreen3;
