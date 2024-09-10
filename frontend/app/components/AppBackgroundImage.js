import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Platform } from "react-native";

const StatusBarHeight = getStatusBarHeight();

function AppBackgroundImage({ children }) {

  return (
    <ImageBackground
      style={styles.container}
      blurRadius={Platform.OS === "android" ? 7 : 10}
      source={require("../assets/images/background.png")}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: StatusBarHeight
  },
});

export default AppBackgroundImage;
