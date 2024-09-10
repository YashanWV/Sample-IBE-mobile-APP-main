import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

function ListItemSeperator({ height = 1, color = colors.listseperators }) {
  return (
    <View style={[styles.container, { height }, { backgroundColor: color }]} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",

    marginHorizontal: -30,
  },
});

export default ListItemSeperator;
