import { useContext } from "react";

import AuthContext from "./context";
import authStorage from "./storage";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    console.log(user);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
    setUser(null);
  };

  return { user, logIn, logOut };
};

export default useAuth;
