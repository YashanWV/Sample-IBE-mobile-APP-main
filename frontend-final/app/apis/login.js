import apiClient from "./client";

const loginUserEndpoint = "/loginUser";
const getUserEndpoint = "/getUser";

const loginUser = (username, password) =>
  apiClient.post(loginUserEndpoint, { username, password });

const getUser = (username) => apiClient.get(getUserEndpoint, { username });

export default {
  loginUser,
  getUser,
};
