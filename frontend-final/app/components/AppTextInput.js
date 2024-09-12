import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

import AppIcon from "./AppIcon";
import colors from "../config/colors";

function AppTextInput({
  icon,
  padding,
  iconSize,
  borderColor = colors.primary2,
  backgroundColor = colors.bluegrey,
  placeholderColor = colors.placeholder,
  textColor = colors.primary3,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        { paddingRight: padding },
        { paddingLeft: padding },
        { borderColor },
        { backgroundColor },
      ]}
    >
      {icon && (
        <AppIcon
          name={icon}
          iconColor={colors.white}
          iconSize={34 * iconSize}
          style={[styles.iconcontainer, { backgroundColor: borderColor }]}
        />
      )}
      <TextInput
        placeholderTextColor={placeholderColor}
        style={{
          fontFamily: Platform.OS === "android" ? "Roboto" : "Inter",
          fontSize: 15,
          fontWeight: "500",
          color: textColor,
          width: "100%",
          marginLeft: 8,
          paddingRight: 38,
        }}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    borderRadius: 30,
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconcontainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 34,
    width: 34,
    borderRadius: 17,
  },
});

export default AppTextInput;
