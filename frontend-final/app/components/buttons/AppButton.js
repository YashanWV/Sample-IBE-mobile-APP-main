import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText";

function AppButton({
  title,
  onPress,
  color = "primary3",
  textColor = colors.white,
  borderWidth = 0,
  borderColor,
  marginTop = 0,
  marginBottom = 0,
  style,
  width = "100%",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors[color] },
        { marginTop },
        { marginBottom },
        { borderWidth },
        { borderColor },
        { width },
        style,
      ]}
      onPress={onPress}
    >
      <AppText style={[styles.text, { color: textColor }]}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    elevation: 0.5,
  },
  text: {
    fontSize: 24,
    fontWeight: "800",
  },
});

export default AppButton;
