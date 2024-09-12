import React from "react";
import { View, StyleSheet } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

function AppIcon({ name, iconSize, iconColor, style }) {
  return (
    <View style={[styles.container, style]}>
      <FontAwesome5 name={name} size={iconSize} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppIcon;
