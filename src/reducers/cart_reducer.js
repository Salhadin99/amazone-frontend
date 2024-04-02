import { ADD_TO_CART, GET_CART } from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { cart } = action.payload;
      console.log("cart add ", cart.cart);

      return { ...state, cart: cart.cart };
    case GET_CART:
      const { cart: cartData } = action.payload;

      return { ...state, cart: cartData };
    default:
      return state;
  }
};

export default cart_reducer;
