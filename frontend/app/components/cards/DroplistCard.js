import React from "react";
import Constants from "expo-constants";
import { StyleSheet, ScrollView, SafeAreaView, View } from "react-native";

function DroplistCard({ style, children, ...othrProps }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    marginLeft: 30,
    marginRight: 30,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default DroplistCard;
