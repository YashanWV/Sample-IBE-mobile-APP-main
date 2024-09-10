import React from "react";
import { Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import { AppText, AppBackgroundImage } from "../components";
import { AppBackgroundCardView } from "../components/cards";
import { AppButton } from "../components/buttons";

function WelcomeScreen({ navigation }) {
  return (
    <AppBackgroundImage>
      <AppBackgroundCardView style={styles.container}>
        <Image source={require("../assets/images/logo.png")} />
        <AppText style={styles.caption}>Your Journey Begins Here!</AppText>
        <AppButton
          title="LOGIN"
          onPress={() => navigation.navigate("LoginScreen")}
          color="primary2"
          marginTop={15}
          marginBottom={18}
        />
        <AppButton
          title="REGISTER"
          onPress={() => navigation.navigate("RegisterScreen")}
          color="primary2"
          marginBottom={32}
        />
      </AppBackgroundCardView>
    </AppBackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bluegrey2,
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
  },
  caption: {
    color: colors.primary1,
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 156,
  },
});

export default WelcomeScreen;
