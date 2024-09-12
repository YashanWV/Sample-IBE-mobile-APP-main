import apiClient from "./client";

const getMasterDataEndpoint = "/getMasterData";

const getMasterData = (param) =>
  apiClient.get(getMasterDataEndpoint, { param });

export default {
  getMasterData,
};
