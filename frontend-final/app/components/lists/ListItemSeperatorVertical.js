import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

function ListItemSeperatorVertical({
  width = 1,
  color = colors.listseperators,
}) {
  return (
    <View style={[styles.container, { width }, { backgroundColor: color }]} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default ListItemSeperatorVertical;
