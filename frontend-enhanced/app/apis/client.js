import { create } from "apisauce";
import authStorage from "../auth/storage";

const securedEndpoints = [];

const apiClient = create({
  baseURL: "http://192.168.1.24:8090/api/v1",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();

  const isSecuredEndpoint = securedEndpoints.some((endpoint) =>
    request.url.includes(endpoint)
  );

  if (authToken && isSecuredEndpoint) {
    request.headers["Authorization"] = "Bearer " + authToken;
  }
  console.log(request);
});

// apiClient.addAsyncRequestTransform(async (request) => {
//   const authToken = await authStorage.getToken();
//   if (!authToken) return;
//   request.headers["Authorization"] = "Bearer " + authToken;
//   console.log(request);
// });

export default apiClient;
