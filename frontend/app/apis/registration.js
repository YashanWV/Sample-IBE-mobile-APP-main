import apiClient from "./client";

const getGendersEndpoint = "/getGenders";
const getCountriesEndpoint = "/getCountries";
const getNationalitiesEndpoint = "/getNationalities";
const registerUserEndpoint = "/registerUser";

const getGenders = apiClient.get(getGendersEndpoint);
const getCountries = apiClient.get(getCountriesEndpoint);
const getNationalities = apiClient.get(getNationalitiesEndpoint);

const registerUser = (params) => apiClient.post(registerUserEndpoint, params);

export default {
  getGenders,
  getCountries,
  getNationalities,
  registerUser,
};
