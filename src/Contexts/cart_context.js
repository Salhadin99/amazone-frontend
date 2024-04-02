import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { add_cart_url as url } from "../Utils/Constants";
import { remove_cart_url } from "../Utils/Constants";
import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  GET_CART,
} from "../actions";

const getLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 543,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //add to cart
  const token = localStorage.getItem("token");
  const addToCart = async (id, color, amount) => {
    try {
      const response = await axios.post(
        url,
        {
          productId: id,
          color,
          count: amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: ADD_TO_CART, payload: { cart: response.data } });
    } catch (error) {
      console.error("error ", error);
    }
  };

  const getCart = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const cart = response.data;
      dispatch({ type: GET_CART, payload: { cart: response.data } });
    } catch (error) {
      console.log("error");
    }
  };

  //remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  //toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  //clear cart
  const clearCart = async () => {
    try {
      const response = await axios.delete(remove_cart_url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: CLEAR_CART });
      dispatch({ type: GET_CART, payload: { cart: {} } });
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
