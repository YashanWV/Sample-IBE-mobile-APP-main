import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Keyboard,
  Pressable,
  Alert,
} from "react-native";

import * as Yup from "yup";
import { getStatusBarHeight } from "react-native-status-bar-height";

import colors from "../config/colors";
import {
  AppBackgroundCardView,
  AppBackgroundCardViewScrollable,
} from "../components/cards";
import { AppBackgroundImage, AppText } from "../components";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import AppDatePicker from "../components/AppDatePicker";
import registration from "../apis/registration";
import masterData from "../apis/masterData";
import AppBackground from "../components/AppBackground";
import AppBackgroundScrollable from "../components/AppBackgroundScrollable";
import { ListItemSeperator } from "../components/lists";
import useAuth from "../auth/useAuth";
import authApi from "../apis/login";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Email is a required field !")
    .email("Email must be a valid email !")
    .label("Email"),
  password: Yup.string()
    .required("Password is a required field !")
    .min(4, "Password must be at least 4 characters !")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter !")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter !")
    .matches(/[0-9]/, "Password must contain at least one number !")
    .matches(/[\W_]/, "Password must contain at least one special character !")
    .label("Password"),
  confirmPassword: Yup.string()
    .required("Password confirmation is a required field !")
    .oneOf([Yup.ref("password"), null], "Passwords must match !")
    .label("Confirm Password"),
  passport: Yup.string()
    .required("Passport Number is a required field !")
    .label("Passport Number"),
  nic: Yup.string()
    .required("ID Card Number is a required field !")
    .label("ID Card Number"),
  fullName: Yup.string()
    .required("Name is a required field !")
    .max(50, "Name must be at most 50 characters !")
    .label("Full Name"),
  contact: Yup.string()
    .required("Contact number is a required field !")
    .label("Contact Number"),
  address: Yup.string()
    .required("Address is a required field !")
    .label("Address"),
});

const StatusBarHeight = getStatusBarHeight();

// const countries = [
//   { label: "Pakistan", value: 1 },
//   { label: "India", value: 2 },
//   { label: "Bangladesh", value: 3 },
//   { label: "Sri Lanka", value: 4 },
//   { label: "Afghanistan", value: 5 },
//   { label: "Nepal", value: 6 },
//   { label: "Bhutan", value: 7 },
//   { label: "Maldives", value: 8 },
//   { label: "Iran", value: 9 },
//   { label: "Iraq", value: 10 },
//   { label: "Kuwait", value: 11 },
//   { label: "Saudi Arabia", value: 12 },
//   { label: "UAE", value: 13 },
//   { label: "Qatar", value: 14 },
//   { label: "Oman", value: 15 },
//   { label: "Yemen", value: 16 },
//   { label: "Syria", value: 17 },
//   { label: "Jordan", value: 18 },
// ];

function RegiterScreen({ navigation }) {
  // const [keyboardVisible, setKeyboardVisible] = useState(false);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     () => {
  //       setKeyboardVisible(true); // Keyboard is shown
  //     }
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     "keyboardDidHide",
  //     () => {
  //       setKeyboardVisible(false); // Keyboard is hidden
  //     }
  //   );

  //   // Cleanup listeners on unmount
  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   loadCountries();
  // }, []);

  // const loadCountries = async () => {
  //   const response = await registration.getCountries;
  //   setCountries(response.data);
  // };

  const [nationalities, setNationalities] = useState([]);

  // useEffect(() => {
  //   loadNationalities();
  // }, []);

  // const loadNationalities = async () => {
  //   const response = await registration.getNationalities;
  //   setNationalities(response.data);
  // };

  const [genders, setGenders] = useState([]);

  // useEffect(() => {
  //   loadGenders();
  // }, []);

  // const loadGenders = async () => {
  //   const response = await registration.getGenders;
  //   setGenders(response.data);
  // };

  useEffect(() => {
    loadMasterData();
  }, []);

  const loadMasterData = async () => {
    const response = await masterData.getMasterData("registration");

    setCountries(response.data.Countries);
    console.log(response.data.Countries);

    setNationalities(response.data.Nationalities);
    console.log(response.data.Nationalities);

    setGenders(response.data.Genders);
    console.log(response.data.Genders);
  };

  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.loginUser(username, password);
    console.log(result.ok);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
    navigation.navigate("HomeScreen2");
  };

  const loadRegisterUser = async (values) => {
    const response = await registration.registerUser(values);

    if (response.data.charAt(4) == "(") {
      console.log("User registered successfully:", response.data);
      Alert.alert("Successfully Registered!", "", [
        {
          text: "OK",
          onPress: () => {
            handleSubmit(values);
          },
        },
      ]);
    } else {
      Alert.alert("Registration Unsuccessful!", response.data, [
        {
          text: "Retry",
          onPress: () => navigation.navigate("RegisterScreen"),
        },
      ]);
    }
  };

  return (




    <AppForm
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
        birthday: "",
        country: "",
        nationality: "",
        gender: "",
        passport: "",
        nic: "",
        fullName: "",
        contact: "",
        address: "",
      }}
      onSubmit={(values) => {
        const { confirmPassword, ...userDetails } = values;
        console.log(userDetails);
        loadRegisterUser(userDetails);

      }}
      validationSchema={validationSchema}
    >
      <AppBackgroundScrollable>
        <AppBackgroundCardView style={[styles.container1, { marginTop: 20 }]}>
          <View style={styles.captionView}><AppText style={styles.caption}>Account Details</AppText></View>
          <ListItemSeperator />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="user-alt"
            iconSize={0.5}
            keyboardType="email-address"
            name="username"
            placeholder="Email"
            textContentType="emailAddress"
            marginBottom={18}
            marginTop={20}
            padding={18}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="key"
            iconSize={0.5}
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
            marginBottom={18}
            padding={18}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="key"
            iconSize={0.5}
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="password"
            marginBottom={25}
            padding={18}
          />
        </AppBackgroundCardView>

        <AppBackgroundCardView style={styles.container1}>
          <View style={styles.captionView}><AppText style={styles.caption}>Private Details</AppText></View>
          <ListItemSeperator />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ flex: 1, marginRight: 5, width: "50%" }}>
              <AppDatePicker
                name="birthday"
                placeholder="Birthday"
                marginBottom={18}
                icon2="calendar-day"
                iconSize={0.5}
                iconColor={colors.white}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5, width: "50%" }}>
              <AppFormPicker
                name="country"
                icon2="font-awesome-flag"
                items={countries ? countries : []}
                placeholder="Country"
                marginBottom={18}
                iconSize={0.5}
                iconColor={colors.white}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, marginRight: 5, width: "50%" }}>
              <AppFormPicker
                name="nationality"
                icon2="flag"
                items={nationalities ? nationalities : []}
                placeholder="Nationality"
                marginBottom={18}
                iconSize={0.5}
                iconColor={colors.white}

              />
            </View>
            <View style={{ flex: 1, marginLeft: 5, width: "50%" }}>
              <AppFormPicker
                name="gender"
                icon2="transgender"
                items={genders ? genders : []}
                placeholder="Gender"
                marginBottom={18}
                iconSize={0.6}
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
            marginBottom={25}
            padding={18}
          />
        </AppBackgroundCardView>

        <AppBackgroundCardView style={styles.container1}>
          <View style={styles.captionView}><AppText style={styles.caption}>Contact Details</AppText></View>
          <ListItemSeperator />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="user-alt"
            iconSize={0.5}
            name="fullName"
            placeholder="Full Name"
            marginBottom={18}
            marginTop={20}
            padding={18}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            iconSize={0.5}
            name="contact"
            placeholder="Contact Number"
            marginBottom={18}
            padding={18}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="address-book"
            iconSize={0.5}
            name="address"
            placeholder="Address"
            marginBottom={25}
            padding={18}
          />
        </AppBackgroundCardView>
      </AppBackgroundScrollable>


      <View style={styles.submit}>
        <AppText style={{ color: colors.formalerts, textAlign: 'center', marginBottom: 4, }}>By submitting, you agree to our Terms and Conditions and Privacy Policy.</AppText>
        <ListItemSeperator />
        <SubmitButton title="REGISTER" color="secondary" marginBottom={10} marginTop={10} />
      </View>
    </AppForm>



  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 7,
    elevation: 3,
    paddingLeft: 18,
    paddingRight: 18,
    position: "relative",
    marginTop: 30 + StatusBarHeight,
    marginBottom: 30,
  },

  container1: {
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 7,
    elevation: 3,
    paddingLeft: 18,
    paddingRight: 18,
    marginBottom: 15,
  },
  captionView: { justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', paddingLeft: 5 },
  caption: {
    marginTop: 10,
    marginBottom: 8,
    fontSize: 21,
    fontWeight: "semibold",
    color: colors.secondary,
  },
  submit: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    backgroundColor: colors.white,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 1,
    borderTopWidth: 0.19,
    borderTopColor: colors.listseperators
  }
});

export default RegiterScreen;
