import React, { useContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

const authContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("Auth0 context provided");
  //const navigate = useNavigate();
  //   const navigate = useNavigate();

  return (
    <authContext.Provider
      value={{ isAuthenticated, setIsAuthenticated: setIsAuthenticated }}
    >
      {children}
    </authContext.Provider>
  );
};
// make sure use
export const useAuthContext = () => {
  return useContext(authContext);
};
