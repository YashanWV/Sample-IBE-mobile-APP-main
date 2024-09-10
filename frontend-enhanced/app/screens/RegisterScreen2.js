import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Keyboard, Pressable } from "react-native";

import * as Yup from "yup";
import { getStatusBarHeight } from "react-native-status-bar-height";

import colors from "../config/colors";
import { AppBackgroundCardView } from "../components/cards";
import { AppBackgroundImage, AppText } from "../components";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  passport: Yup.string()
    .required("Passport Number is a required field !")
    .label("Passport Number"),
  nic: Yup.string()
    .required("ID Card Number is a required field !")
    .label("ID Card Number"),
});

const StatusBarHeight = getStatusBarHeight();

const countries = [
  { label: "Pakistan", value: 1 },
  { label: "India", value: 2 },
  { label: "Bangladesh", value: 3 },
  { label: "Sri Lanka", value: 4 },
  { label: "Afghanistan", value: 5 },
  { label: "Nepal", value: 6 },
  { label: "Bhutan", value: 7 },
  { label: "Maldives", value: 8 },
  { label: "Iran", value: 9 },
  { label: "Iraq", value: 10 },
  { label: "Kuwait", value: 11 },
  { label: "Saudi Arabia", value: 12 },
  { label: "UAE", value: 13 },
  { label: "Qatar", value: 14 },
  { label: "Oman", value: 15 },
  { label: "Yemen", value: 16 },
  { label: "Syria", value: 17 },
  { label: "Jordan", value: 18 },
];

function RegiterScreen2({ navigation }) {
  return (
    <AppBackgroundImage>
      <AppBackgroundCardView style={styles.container}>
        <AppText style={styles.register}>REGISTER</AppText>
        <AppForm
          initialValues={{
            birthday: "",
            country: "",
            nationality: "",
            gender: "",
            passport: "",
            nic: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormPicker
            name="birthday"
            icon="birthday-cake"
            items={countries}
            placeholder="Birthday"
            marginBottom={18}
            iconSize={0.5}
            iconColor={colors.white}
          />
          <AppFormPicker
            name="country"
            icon="font-awesome-flag"
            items={countries}
            placeholder="Country"
            marginBottom={18}
            iconSize={0.5}
            iconColor={colors.white}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, marginRight: 5, width: "50%" }}>
              <AppFormPicker
                name="nationality"
                icon="flag"
                items={countries}
                placeholder="Nationality"
                marginBottom={18}
                iconSize={0.5}
                iconColor={colors.white}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5, width: "50%" }}>
              <AppFormPicker
                name="gender"
                icon="genderless"
                items={countries}
                placeholder="Gender"
                marginBottom={18}
                iconSize={0.8}
                iconColor={colors.white}
              />
            </View>
          </View>

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="passport"
            iconSize={0.5}
            name="passport"
            placeholder="Passport Number"
            marginBottom={18}
            padding={18}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="address-card"
            iconSize={0.5}
            name="nic"
            placeholder="ID Card Number"
            marginBottom={18}
            padding={18}
          />
          <SubmitButton title="NEXT" color="secondary" marginBottom={15} />
        </AppForm>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            flexDirection: "row",
          }}
        >
          <AppText
            style={{ fontSize: 14, color: colors.secondary, fontWeight: "500" }}
          >
            Already have an account?
          </AppText>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <AppText
              style={{
                fontSize: 14,
                color: colors.secondary,
                fontWeight: "500",
              }}
            >
              {" "}
              Login&gt;
            </AppText>
          </Pressable>
        </View>
      </AppBackgroundCardView>
    </AppBackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 7,
    elevation: 3,
    paddingLeft: 20,
    paddingRight: 20,
    position: "relative",
    marginTop: StatusBarHeight + 20,
  },
  caption: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: StatusBarHeight + 156,
  },
  register: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "800",
    color: colors.primary2,
  },
});

export default RegiterScreen2;
