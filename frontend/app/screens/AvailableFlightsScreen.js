import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import AppBackground from "../components/AppBackground";
import AppBackgroundCardView from "../components/cards/AppBackgroundCardView";
import flightSearch from "../apis/flightSearch";

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
    <AppBackground>
      {availableFlights &&
        availableFlights.map((flight, index) => (
          <AppBackgroundCardView key={index} style={styles.container}>
            <Text>
              {flight.departureAirport.airportName} to {flight.arrivalAirport.airportName}
            </Text>
            <Text>
              {flight.departureDate} {flight.departureTime} to{" "}
              {flight.arrivalDate} {flight.arrivalTime}
            </Text>
          </AppBackgroundCardView>
        ))}
    </AppBackground>
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
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default AvailableFlightsScreen;
