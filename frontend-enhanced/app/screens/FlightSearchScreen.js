import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Keyboard, Pressable } from "react-native";

import * as Yup from "yup";
import { getStatusBarHeight } from "react-native-status-bar-height";

import AppBackground from "../components/AppBackground";
import AppDatePicker from "../components/AppDatePicker";
import colors from "../config/colors";
import { AppBackgroundCardView } from "../components/cards";
import { AppBackgroundImage, AppText } from "../components";
import { useFormikContext } from "formik";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import flightSearch from "../apis/flightSearch";
import masterData from "../apis/masterData";
import { ListItemSeperator } from "../components/lists";
import Ionicons from '@expo/vector-icons/Ionicons';

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
        <AppBackgroundCardView style={[styles.container, { marginTop: 20 }]} >
          <View style={styles.captionView}><AppText style={styles.caption}>Departure & Arrival Airports</AppText></View>
          <ListItemSeperator />

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ flex: 1, marginRight: 5, width: "50%" }}>
              <AppFormPicker
                name="departureAirportCode"
                icon="plane-departure"
                items={airports ? airports : []}
                placeholder="From"
                marginBottom={12}
                iconSize={0.5}
                iconColor={colors.white}
                borderColor={colors.lightgrey1}
                backgroundColor={colors.lightgrey}
                placeholderColor={colors.lightgrey2}
                label="value"
                textColor={colors.formalerts}
                fontWeight="bold"
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5, width: "50%" }}>
              <AppFormPicker
                name="arrivalAirportCode"
                icon="plane-arrival"
                items={airports ? airports : []}
                placeholder="To"
                marginBottom={18}
                iconSize={0.5}
                iconColor={colors.white}
                borderColor={colors.lightgrey1}
                backgroundColor={colors.lightgrey}
                placeholderColor={colors.lightgrey2}
                label="value"
                textColor={colors.formalerts}
                fontWeight="bold"
              />
            </View>
          </View>

          <View style={{ width: "100%", flexDirection: "row", marginBottom: 15 }}>
            <View style={{ width: "40%", justifyContent: "center" }} >
              <AppText style={{ color: colors.secondary, fontSize: 15, fontWeight: "bold", textAlign: "center" }} >From</AppText>
              <SelectedAirport airportKey="departureAirportCode" airports={airports} />
            </View>

            <View style={{ width: "20%", justifyContent: "center", alignItems: "center" }} >
              <Ionicons name="airplane-sharp" size={35} color={colors.primary3} />
            </View>

            <View style={{ width: "40%", alignItems: "center", position: "absolute", right: 0 }} >
              <AppText style={{ color: colors.secondary, fontSize: 15, fontWeight: "bold", textAlign: "center" }} >To</AppText>
              <SelectedAirport airportKey="arrivalAirportCode" airports={airports} />
            </View>
          </View>

          <ListItemSeperator />

          <AppDatePicker
            name="departureDate"
            placeholder="Select Departure Date"
            marginTop={15}
            icon="calendar-day"
            iconSize={0.5}
            marginBottom={2}
            borderColor={colors.lightgrey1}
            backgroundColor={colors.lightgrey}
            placeholderColor={colors.lightgrey2}
            textColor={colors.formalerts}
          />



        </AppBackgroundCardView>
        {/* <AppFormPicker
            name="departureDate"
            icon="calendar-alt"
            items={countries}
            placeholder="Departure Date"
            marginBottom={18}
            iconSize={0.5}
            iconColor={colors.white}
          /> */}



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

    </AppBackground>
  );
}

// Component to show selected airport
function SelectedAirport({ airportKey, airports }) {
  const { values } = useFormikContext();

  // Find the selected airport based on the value
  const selectedAirport = airports.find((airport) => airport.value === values[airportKey]);

  if (!selectedAirport) return null; // If nothing is selected, don't show anything

  return (

    <AppText style={styles.selectedAirportText}>
      {selectedAirport.label}
    </AppText>

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
    marginBottom: 15,
    paddingBottom: 20
  },
  caption: {
    marginTop: 10,
    marginBottom: 8,
    fontSize: 21,
    fontWeight: "semibold",
    color: colors.secondary,
  },
  captionView: { justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', paddingLeft: 5 },
  selectedAirportText: {
    color: colors.tertiary,
    fontSize: 15,
    fontWeight: "semibold",
    textAlign: "center"
  }
});

export default FlightSearchScreen;
