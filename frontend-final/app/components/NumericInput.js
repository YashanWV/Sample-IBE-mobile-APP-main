import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function NumericInput({ value, onChange, min = 0, max = 10 }) {
  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.lightgrey,
    borderRadius: 30,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    height: 58,
    width: "100%",
  },
  button: {
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary2,
    borderRadius: 17,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: colors.primary3,
  },
});

export default NumericInput;
