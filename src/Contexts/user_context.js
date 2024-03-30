import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  console.log("Auth0 context provided", loginWithRedirect);
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};

// import React, { useContext, useEffect, useState } from 'react'
// import { useAuth0 } from '@auth0/auth0-react'

// const UserContext = React.createContext()
// export const UserProvider = ({ children }) => {
//   const { loginWithRedirect, logout, user, isLoading, error } = useAuth0()
//   const [myUser, setMyUser] = useState(null)

//   useEffect(() => {
//     setMyUser(user)
//   }, [user])

//   return (
//     <UserContext.Provider
//       value={{ loginWithRedirect, logout, myUser, isLoading, error }}
//     >
//       {children}
//     </UserContext.Provider>
//   )
// }
// // make sure use
// export const useUserContext = () => {
//   return useContext(UserContext)
// }
