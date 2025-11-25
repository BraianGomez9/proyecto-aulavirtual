import { useState, useEffect, createContext, useContext } from "react";

export const CartContext = createContext();



export const CartProvider = ({children}) => {
  return (
    <CartContext.Provider>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext