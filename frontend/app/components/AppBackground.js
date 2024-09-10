import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import colors from "../config/colors";

const StatusBarHeight = getStatusBarHeight();

function AppBackground({ children, style }) {
  return (
    <ScrollView
      style={styles.container}
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
    backgroundColor: colors.invisible,
  },
  contentContainer: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 18,
  },
});

export default AppBackground;
