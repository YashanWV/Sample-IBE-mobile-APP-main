import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import AppBackground from "../components/AppBackground";
import AppBackgroundCardView from "../components/cards/AppBackgroundCardView";
import flightSearch from "../apis/flightSearch";
import AppBackgroundScrollable from "../components/AppBackgroundScrollable";
import DetailsCard from "../components/cards/DetailsCard";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { AppText } from "../components";

// const availablelights = [
//   {
//     departureAirportName: "Los Angeles International Airport",
//     arrivalAirportName: "OHare International Airport",
//     departureDate: "2024-08-30",
//     arrivalDate: "2024-08-31",
//     departureTime: "10:00",
//     arrivalTime: "13:00",
//   },
//   {
//     departureAirportName: "Los Angeles International Airport",
//     arrivalAirportName: "OHare International Airport",
//     departureDate: "2024-08-30",
//     arrivalDate: "2024-08-31",
//     departureTime: "10:00",
//     arrivalTime: "13:00",
//   },
//   {
//     departureAirportName: "Los Angeles International Airport",
//     arrivalAirportName: "OHare International Airport",
//     departureDate: "2024-08-30",
//     arrivalDate: "2024-08-31",
//     departureTime: "10:00",
//     arrivalTime: "13:00",
//   },
// ];

function AvailableFlightsScreen({ route }) {
  const { params } = route.params;

  const [availableFlights, setAvailableFlights] = useState([]);

  useEffect(() => {
    loadAvailableFlights();
  }, []);

  const loadAvailableFlights = async () => {
    console.log(params);
    const response = await flightSearch.getAvailableFlights(params);
    setAvailableFlights(response.data);
  };

  console.log(availableFlights);

  return (
    <AppBackgroundScrollable style={{ paddingTop: 20 }}>
      {availableFlights &&
        availableFlights.map((flight, index) => (
          <DetailsCard
            key={index}
            icon={"airplane"}
            title={flight.flightDesignator}
            headerColor={colors.secondary}
          >
            <View style={styles.container}>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <FontAwesome5
                  name="plane-departure"
                  size={20}
                  color={colors.black}
                />
                <AppText
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                    color: colors.formalerts,
                    textAlign: "center",
                  }}
                >
                  {`${flight.departureAirport.airportName} : ${flight.departureAirport.country.countryName}`}
                </AppText>
                <AppText
                  style={{
                    fontSize: 15,
                    color: colors.tertiary,
                    textAlign: "center",
                  }}
                >
                  ON: {flight.departureDate}
                </AppText>
                <AppText
                  style={{
                    fontSize: 15,
                    color: colors.tertiary,
                    textAlign: "center",
                  }}
                >
                  AT: {flight.departureTime}
                </AppText>
              </View>

              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <FontAwesome5
                  name="plane-arrival"
                  size={20}
                  color={colors.black}
                />
                <AppText
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                    color: colors.formalerts,
                    textAlign: "center",
                  }}
                >
                  {`${flight.arrivalAirport.airportName} : ${flight.arrivalAirport.country.countryName}`}
                </AppText>
                <AppText
                  style={{
                    fontSize: 15,
                    color: colors.tertiary,
                    textAlign: "center",
                  }}
                >
                  ON: {flight.arrivalDate}
                </AppText>
                <AppText
                  style={{
                    fontSize: 15,
                    color: colors.tertiary,
                    textAlign: "center",
                  }}
                >
                  AT: {flight.arrivalTime}
                </AppText>
              </View>
            </View>
          </DetailsCard>
        ))}
    </AppBackgroundScrollable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: colors.listseperators,
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});

export default AvailableFlightsScreen;
