import React, { useContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import axios from "axios";
import { products_url as url } from "../Utils/Constants";

const addproductContext = React.createContext();
export const AddProductProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addProduct = async (products) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(url, products, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const productAdded = response.data;
      console.log("added data", productAdded);
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <addproductContext.Provider value={{ addProduct }}>
      {children}
    </addproductContext.Provider>
  );
};
// make sure use
export const useAddProductContext = () => {
  return useContext(addproductContext);
};
