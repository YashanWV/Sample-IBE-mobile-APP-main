import React from "react";
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";

import colors from "../../config/colors";


function AppBackgroundCardViewScrollable({ children, style }) {
  return (

    <ScrollView
      style={[styles.container, style]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >

      {children}

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.black,
    width: "100%",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppBackgroundCardViewScrollable;
