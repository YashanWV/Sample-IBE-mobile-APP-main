import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../../config/colors";
import AppText from "../AppText";
import { ListItemSeperator } from "../lists";

function DetailsCard({ children, style, icon, title, headerColor }) {
  return (
    <>
      <View style={[styles.container1, { backgroundColor: headerColor }]}>
        <MaterialCommunityIcons name={icon} size={30} color={colors.white} />
        <AppText
          style={{
            color: colors.white,
            marginLeft: 15,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {title}
        </AppText>
      </View>
      <ListItemSeperator height={2} color={colors.lightgrey} />
      <>{children}</>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    shadowOpacity: 0.02,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowRadius: 5,
    elevation: 0.5,
    width: "100%",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    //borderRadius: 20,
    //marginBottom: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
});

export default DetailsCard;
