import React from "react";
import { StyleSheet, Text } from "react-native";
import { Platform } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.font, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Inter",
  },
});

export default AppText;
