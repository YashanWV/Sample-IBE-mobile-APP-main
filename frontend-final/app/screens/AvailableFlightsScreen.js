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
import ListItemSeperatorVertical from "../components/lists/ListItemSeperatorVertical";
import { ListItemSeperator } from "../components/lists";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    { response.data.length !== 0 ? setAvailableFlights(response.data) : setAvailableFlights(null) }

    // if (availableFlights.length === 0) setAvailableFlights(null);
  };

  //{availableFlights.length === 0 setAvailableFlights(null);}

  console.log(availableFlights);

  return (
    <AppBackgroundScrollable style={{ paddingTop: 20 }}>
      {availableFlights ? (
        availableFlights.map((flight, index) => (
          <DetailsCard
            key={index}
            icon={"airplane"}
            title={flight.flightDesignator}
            headerColor={colors.secondary}
          >
            <View style={styles.container}>
              <>
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

                <ListItemSeperatorVertical color={colors.lightgrey} />

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
              </>
            </View>
            <ListItemSeperator color={colors.lightgrey} />
            <View
              style={{
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 20,
                paddingBottom: 10,
                marginBottom: 15,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,
                backgroundColor: colors.listseperators,
              }}
            >
              <FontAwesome
                name="ticket"
                size={28}
                color="black"
                style={{ marginTop: 10 }}
              />
              <AppText
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {flight.ticketPrice}
              </AppText>
              <TouchableOpacity
                style={{
                  marginLeft: 120,
                  width: 120,
                  height: 25,
                  borderRadius: 10,
                  backgroundColor: colors.tertiary,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppText style={{ color: colors.white }}>Book Tickets</AppText>
              </TouchableOpacity>
            </View>
          </DetailsCard>
        ))
      ) : (
        <Text
          style={{
            fontSize: 20,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: colors.tertiary,
          }}
        >
          We're Sorry!{"\n"}No flights available right now
        </Text>
        // <>
        //   {" "}
        //   <AppText style={{ fontSize: 20, color: colors.tertiary }}>
        //     We're sorry!
        //   </AppText>
        //   <AppText style={{ fontSize: 18, color: colors.primary3 }}>
        //     No flights available right now.
        //   </AppText>
        // </>
      )}
    </AppBackgroundScrollable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.listseperators,
    paddingTop: 8,
    paddingBottom: 10,
  },
});

export default AvailableFlightsScreen;
