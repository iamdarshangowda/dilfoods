'use client';

import { cartReducer } from './reducers/cartReducers';
const { createContext, useContext, useReducer } = require('react');

const CartContext = createContext();

export const CartContextWrapper = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const value = {
    cartState,
    cartDispatch,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
