import apiClient from "./client";

const getBookingsEndpoint = "/getBookings";

const getBookings = (username) =>
  apiClient.get(getBookingsEndpoint, { username });

export default {
  getBookings,
};
