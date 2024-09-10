import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

function AppBackgroundCardView({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    width: "100%",
  },
});

export default AppBackgroundCardView;
