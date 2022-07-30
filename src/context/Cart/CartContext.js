import { createContext, useReducer } from "react";
import CartReducer, { sumItems } from "./CartReducer";

const CartContext = createContext();

const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export const CartProvider = (props) => {
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkOut: false,
  };

  //reducer steup
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //action creater functions -> will return action objects with type and payload
  const addToCart = (payload) => dispatch({ type: "ADD_TO_CART", payload });

  const removeCartItem = (payload) =>
    dispatch({ type: "REMOVE_ITEM", payload });

  const increase = (payload) => dispatch({ type: "INCREASE", payload });

  const decrease = (payload) => dispatch({ type: "DECREASE", payload });

  const clearCart = () => dispatch({ type: "CLEAR" });

  const handleCheckOut = () => dispatch({ type: "CHECKOUT" });

  // console.log(state);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        increase,
        decrease,
        removeCartItem,
        clearCart,
        handleCheckOut,
        cartItems: state.cartItems,
        ...state,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
