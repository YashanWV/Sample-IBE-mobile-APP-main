import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.errmsg}>{error}</AppText>;
}

const styles = StyleSheet.create({
  errmsg: {
    width: '100%',
    color: colors.formalerts,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 13,
    paddingEnd: 20,
    paddingStart: 20,

  },
});

export default ErrorMessage;
