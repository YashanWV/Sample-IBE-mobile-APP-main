import apiClient from "./client";

const getAirportsEndpoint = "/getAirports";
const getAvailableFlightsEndpoint = "/availableFlights";

const getAirports = apiClient.get(getAirportsEndpoint);

const getAvailableFlights = (params) =>
  apiClient.post(getAvailableFlightsEndpoint, params);

export default {
  getAirports,
  getAvailableFlights,
};
