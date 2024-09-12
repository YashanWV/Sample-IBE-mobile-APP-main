import React from "react";
import { View, StyleSheet, Text } from "react-native";

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

function PreviousBookingsScreen({ route }) {
  const { params } = route.params;

  return (
    <AppBackgroundScrollable style={{ paddingTop: 20 }}>
      {params ? (
        params.map((flight, index) => (
          <DetailsCard
            key={index}
            icon={"ticket-confirmation"}
            title={flight.bookingId}
            headerColor={colors.primary3}
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
                    {`${flight.departureAirport} : ${flight.departureCountry}`}
                  </AppText>
                  <AppText
                    style={{
                      fontSize: 15,
                      color: colors.secondary,
                      textAlign: "center",
                    }}
                  >
                    ON: {flight.departureDate}
                  </AppText>
                  <AppText
                    style={{
                      fontSize: 15,
                      color: colors.secondary,
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
                    {`${flight.arrivalAirport} : ${flight.arrivalCountry}`}
                  </AppText>
                  <AppText
                    style={{
                      fontSize: 15,
                      color: colors.secondary,
                      textAlign: "center",
                    }}
                  >
                    ON: {flight.arrivalDate}
                  </AppText>
                  <AppText
                    style={{
                      fontSize: 15,
                      color: colors.secondary,
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
                size={24}
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
              <FontAwesome
                name="bookmark"
                size={20}
                color="black"
                style={{ marginTop: 10, marginLeft: 35 }}
              />
              <AppText
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {flight.bookingClass}
              </AppText>
              <FontAwesome
                name="users"
                size={18}
                color="black"
                style={{ marginTop: 10, marginLeft: 35 }}
              />
              <AppText
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {flight.bookingClass}
              </AppText>
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
          You have to logged in for see the previous booking details!
        </Text>
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

export default PreviousBookingsScreen;
