import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Keyboard, Pressable } from "react-native";

import * as Yup from "yup";
import { getStatusBarHeight } from "react-native-status-bar-height";

import AppBackground from "../components/AppBackground";
import AppDatePicker from "../components/AppDatePicker";
import colors from "../config/colors";
import { AppBackgroundCardView } from "../components/cards";
import { AppBackgroundImage, AppText } from "../components";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import flightSearch from "../apis/flightSearch";
import masterData from "../apis/masterData";

const validationSchema = Yup.object().shape({
  numberOfSeats: Yup.number("Number of Tickets must be a number !")
    .required("Number of Tickets is a required field !")
    .min(1, "Number of Tickets must be at least 1 !")
    .max(10, "Number of Tickets must be at most 10 !")
    .label("Number of Tickets"),
});

const StatusBarHeight = getStatusBarHeight();

const bookingClasses = [
  { label: "Economy", value: "Economy" },
  { label: "Business", value: "Business" },
  { label: "First", value: "First" },
];

function FlightSearchScreen({ navigation }) {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    loadMasterData();
  }, []);

  // const loadAirports = async () => {
  //   const response = await flightSearch.getAirports;
  //   setAirports(response.data);
  //   console.log(response.data);
  // };

  const loadMasterData = async () => {
    const response = await masterData.getMasterData("flightSearch");

    setAirports(response.data.Airports);
    console.log(response.data.Airports);
  };

  return (
    <AppBackground>
      <AppBackgroundCardView style={styles.container}>
        <AppText style={styles.register}>Search for flights</AppText>
        <AppForm
          initialValues={{
            departureAirportCode: "",
            arrivalAirportCode: "",
            departureDate: "",
            bookingClass: "",
            numberOfSeats: "",
          }}
          onSubmit={(values) => {
            navigation.navigate("AvailableFlightsScreen", { params: values });
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          <AppFormPicker
            name="departureAirportCode"
            icon="plane-departure"
            items={airports ? airports : []}
            placeholder="Departure Airport"
            marginBottom={18}
            iconSize={0.5}
            iconColor={colors.white}
          />
          <AppFormPicker
            name="arrivalAirportCode"
            icon="plane-arrival"
            items={airports ? airports : []}
            placeholder="Arrival Airport"
            marginBottom={18}
            iconSize={0.5}
            iconColor={colors.white}
          />
          {/* <AppFormPicker
            name="departureDate"
            icon="calendar-alt"
            items={countries}
            placeholder="Departure Date"
            marginBottom={18}
            iconSize={0.5}
            iconColor={colors.white}
          /> */}
          <AppDatePicker
            name="departureDate"
            placeholder="Select Departure Date"
            marginBottom={18}
          />

          <AppFormPicker
            name="bookingClass"
            icon="book-open"
            items={bookingClasses}
            placeholder="Booking Class"
            marginBottom={18}
            iconSize={0.5}
            iconColor={colors.white}
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="ticket-alt"
            iconSize={0.5}
            name="numberOfSeats"
            placeholder="Number of Tickets"
            marginBottom={18}
            padding={18}
          />
          <SubmitButton title="SEARCH" color="secondary" marginBottom={35} />
        </AppForm>
      </AppBackgroundCardView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 1,
    paddingLeft: 20,
    paddingRight: 20,
    // position: "relative",
    // marginTop: StatusBarHeight + 20,
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

export default FlightSearchScreen;
